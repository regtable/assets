import { createTuner } from './tuner.mjs';

export function createTelevision({ services, onImage = () => {}, onOpenChange = () => {}, channelsUrl = 'https://raw.githubusercontent.com/regtable/assets/main/retro-road/sunset-76/upper-rooms/76-tv-channels/channels.json' }) {
  let overlay = null, tuner = null, disposed = false, audio = null, room = null, catalog = null;
  let muted = false, activeAudioUrl = null, audioError = '', channelButtons = [], controls = null, status = null, picture = null;
  const request = new AbortController();
  const stopAudio = () => { if (audio) { audio.pause(); audio.removeAttribute('src'); audio.load(); audio = null; } activeAudioUrl = null; };
  const close = () => { tuner?.dispose(); tuner = null; stopAudio(); overlay?.remove(); overlay = null; onOpenChange(false); };
  const el = (tag, text, parent) => { const n = document.createElement(tag); if (text) n.textContent = text; parent?.append(n); return n; };
  const button = (text, parent, action) => { const b = el('button', text, parent); b.type = 'button'; b.style.cssText = 'padding:10px 14px;margin:5px;background:#302e29;color:#ffe3a1;border:1px solid #8c7141;border-radius:6px;cursor:pointer'; b.onclick = action; return b; };
  function reflect(s) {
    if (!overlay || disposed) return;
    const working = ['generating', 'retrying-image', 'retrying-audio'].includes(s.phase);
    channelButtons.forEach(b => { b.disabled = working; b.style.opacity = working ? '.5' : '1'; });
    if (s.imageUrl && picture.src !== s.imageUrl) { picture.src = s.imageUrl; picture.hidden = false; onImage(s.imageUrl); }
    if (s.audioUrl && activeAudioUrl !== s.audioUrl) {
      stopAudio(); audioError = ''; activeAudioUrl = s.audioUrl; audio = new Audio(s.audioUrl); audio.loop = true; audio.muted = muted;
      const attempt = audio.play(); attempt?.catch(() => { if (!overlay || !tuner || disposed) return; audioError = 'Audio ready — press Play audio.'; reflect(tuner.state); });
      audio.onerror = () => { if (!overlay || !tuner || disposed) return; audioError = 'Audio could not be played. Re-tune or try Play audio.'; reflect(tuner.state); };
    }
    const messages = {
      idle: 'Creates 1× image and 1× song. Select channel to continue.',
      generating: 'Tuning… generating one image and one song.',
      'retrying-audio': `Image ready. No audio — retrying audio (${s.audioRetries}/3).`,
      'retrying-image': `Audio ready. Missing image — retrying image (${s.imageRetries}/3).`,
      complete: `${s.channelName} — image and audio ready.`,
      partial: s.imageUrl ? 'Image ready. No audio after three retries. Re-tune to try again.' : 'Audio ready. Missing image after three retries. Re-tune to try again.',
      unavailable: 'Sorry, service unavailable. Re-tune box.'
    };
    status.textContent = messages[s.phase] + (audioError ? ` ${audioError}` : '');
    controls.replaceChildren();
    if (s.audioUrl) button('Play / pause audio', controls, () => { if (!audio) return; if (audio.paused) audio.play().then(() => { if (!overlay || !tuner || disposed) return; audioError = ''; reflect(tuner.state); }).catch(() => { if (!overlay || !tuner || disposed) return; audioError = 'Playback blocked — please try Play audio again.'; reflect(tuner.state); }); else audio.pause(); });
    if (!working && s.channel) button('Re-tune box', controls, () => tune(catalog.channels.find(c => c.id === s.channel)));
  }
  function tune(channel) {
    if (!channel || tuner?.busy) return;
    stopAudio(); audioError = ''; picture.hidden = true; picture.removeAttribute('src');
    tuner?.tune(channel, catalog.imagePromptPrefix || 'Use the following schema to infer an image for the selected channel as a splash while the song plays.');
  }
  async function open(roomId) {
    if (disposed || overlay) return;
    room = roomId;
    overlay = el('div'); overlay.style.cssText = 'position:fixed;inset:0;z-index:2147483000;background:#000c;display:grid;place-items:center;padding:18px';
    const panel = el('section', null, overlay); panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-modal', 'true'); panel.setAttribute('aria-label', 'Sunset 76 television');
    panel.style.cssText = 'background:#16181d;color:#eee;padding:22px;border:1px solid #b38e49;border-radius:12px;width:min(850px,95vw);max-height:92vh;overflow:auto;font:16px system-ui';
    el('h2', `Sunset 76 TV — room ${roomId}`, panel);
    button('Close TV', panel, close).focus();
    status = el('p', 'Loading channel list…', panel); status.setAttribute('aria-live', 'polite');
    el('p', 'Creates 1× image and 1× song. Select channel to continue. Missing media may generate up to three additional retries.', panel);
    const placeholder = el('div', 'Missing image / tuning splash appears below', panel); placeholder.style.cssText = 'padding:10px;color:#999';
    picture = el('img', null, panel); picture.alt = 'Selected channel splash'; picture.hidden = true; picture.style.cssText = 'max-width:100%;max-height:42vh;object-fit:contain';
    const row = el('div', null, panel); controls = el('div', null, panel);
    overlay.onkeydown = event => {
      if (event.key === 'Escape') { event.stopPropagation(); close(); return; }
      if (event.key === 'Tab') { const buttons = [...panel.querySelectorAll('button:not(:disabled)')]; const first = buttons[0], last = buttons.at(-1); if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); } }
    };
    overlay.onpointerdown = event => event.stopPropagation(); overlay.onclick = event => event.stopPropagation();
    document.body.append(overlay); onOpenChange(true);
    const thisOverlay = overlay;
    try {
      const response = await fetch(`${channelsUrl}${channelsUrl.includes('?') ? '&' : '?'}t=${Date.now()}`, { cache: 'no-store', signal: request.signal });
      if (!response.ok) throw new Error(`Channel list HTTP ${response.status}`);
      catalog = await response.json(); if (disposed || overlay !== thisOverlay) return;
      if (!Array.isArray(catalog.channels) || catalog.channels.length !== 7 || new Set(catalog.channels.map(c => c.id)).size !== 7) throw new Error('Configure seven unique channels in channels.json');
      tuner = createTuner({ generateImage: services.generateImage, generateSong: services.generateSong, onState: reflect });
      channelButtons = catalog.channels.map(c => button(c.name, row, () => tune(c)));
      reflect(tuner.state);
    } catch (error) { if (overlay === thisOverlay) status.textContent = 'Channel list unavailable. Close and re-open the TV to re-tune.'; }
  }
  return { open, close, get isOpen() { return !!overlay; }, get roomId() { return room; }, setMuted(value) { muted = !!value; if (audio) audio.muted = muted; }, stopAudio, dispose() { if (disposed) return; disposed = true; request.abort(); close(); } };
}
