// Pure generation state machine. Services are supplied by the host's Flow SDK.
export function createTuner({ generateImage, generateSong, onState = () => {}, wait = ms => new Promise(r => setTimeout(r, ms)), timeoutMs = 90000, maxRetries = 3 }) {
  let token = 0, disposed = false, busy = false;
  let state = { phase: 'idle', channel: null, imageUrl: null, audioUrl: null, imageRetries: 0, audioRetries: 0 };
  const publish = (next, id) => { if (!disposed && token === id) { state = { ...state, ...next }; onState({ ...state }); } };
  async function call(fn, params) {
    let timer;
    try {
      return await Promise.race([Promise.resolve().then(() => fn(params)), new Promise((_, reject) => { timer = setTimeout(() => reject(new Error('Service timeout')), timeoutMs); })]);
    } finally { clearTimeout(timer); }
  }
  async function tune(channel, imagePromptPrefix) {
    if (disposed || busy) return;
    busy = true; const id = ++token;
    state = { phase: 'generating', channel: channel.id, channelName: channel.name, imageUrl: null, audioUrl: null, imageRetries: 0, audioRetries: 0 };
    publish({}, id);
    // Deliberately pass empty prompts too; channel JSON is the source of truth.
    const prompt = typeof channel.prompt === 'string' ? channel.prompt : JSON.stringify(channel.prompt ?? '');
    const imageArgs = { prompt: `${imagePromptPrefix}\nSelected channel: ${channel.name}\n${prompt}`, aspectRatio: '3:2' };
    const songArgs = { soundPrompt: prompt, title: `${channel.name} — Sunset 76 TV` };
    try {
      const first = await Promise.allSettled([call(generateImage, imageArgs).then(r => { if (!r?.imageUrl) throw new Error('No image'); publish({ imageUrl: r.imageUrl }, id); }), call(generateSong, songArgs).then(r => { if (!r?.audioUrl) throw new Error('No audio'); publish({ audioUrl: r.audioUrl }, id); })]);
      if (disposed || token !== id) return;
      if (first.every(r => r.status === 'rejected')) { publish({ phase: 'unavailable' }, id); return; }
      for (let retry = 1; retry <= maxRetries && (!state.imageUrl || !state.audioUrl); retry++) {
        publish({ phase: state.imageUrl ? 'retrying-audio' : 'retrying-image' }, id);
        await wait(750 * retry); if (disposed || token !== id) return;
        const jobs = [];
        if (!state.imageUrl) {
          publish({ imageRetries: retry }, id);
          jobs.push(call(generateImage, imageArgs).then(r => { if (!r?.imageUrl) throw new Error('No image'); publish({ imageUrl: r.imageUrl }, id); }));
        }
        if (!state.audioUrl) {
          publish({ audioRetries: retry }, id);
          jobs.push(call(generateSong, songArgs).then(r => { if (!r?.audioUrl) throw new Error('No audio'); publish({ audioUrl: r.audioUrl }, id); }));
        }
        await Promise.allSettled(jobs); if (disposed || token !== id) return;
      }
      publish({ phase: state.imageUrl && state.audioUrl ? 'complete' : 'partial' }, id);
    } finally { if (token === id) busy = false; }
  }
  return { tune, get state() { return { ...state }; }, get busy() { return busy; }, dispose() { disposed = true; token++; busy = false; } };
}
