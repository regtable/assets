import { createTuner } from './tuner.mjs';

export function createTelevision({services,onImage=()=>{},onState=()=>{},onOpenChange=()=>{},channelsUrl='https://raw.githubusercontent.com/regtable/assets/main/retro-road/sunset-76/upper-rooms/76-tv-channels/channels.json'}) {
  let overlay=null,disposed=false,audio=null,room=null,roomLabel='',catalog=null,tuner=null;
  let muted=false,activeAudioUrl=null,activeImageUrl=null,audioError='',buttons=[],controls=null,status=null;
  const request=new AbortController();
  const el=(tag,text,parent)=>{const n=document.createElement(tag);if(text)n.textContent=text;parent?.append(n);return n;};
  const button=(text,parent,action)=>{const b=el('button',text,parent);b.type='button';b.style.cssText='padding:10px 14px;margin:5px;background:#302e29;color:#ffe3a1;border:1px solid #8c7141;border-radius:6px;cursor:pointer';b.onclick=action;return b;};
  const stopAudio=()=>{if(audio){audio.pause();audio.removeAttribute('src');audio.load();audio=null;}activeAudioUrl=null;};
  // Hiding the remote does not dispose the tuned programme or audio.
  const close=()=>{overlay?.remove();overlay=null;buttons=[];controls=null;status=null;onOpenChange(false);};
  function makeTuner(){return createTuner({generateImage:services.generateImage,generateSong:services.generateSong,onState:reflect});}
  function reflect(state){
    if(disposed)return;
    if(state.imageUrl&&activeImageUrl!==state.imageUrl){activeImageUrl=state.imageUrl;onImage(state.imageUrl);}
    if(state.audioUrl&&activeAudioUrl!==state.audioUrl){
      stopAudio();audioError='';activeAudioUrl=state.audioUrl;
      const player=new Audio(state.audioUrl);audio=player;player.loop=true;player.muted=muted;
      player.play()?.catch(()=>{if(disposed||audio!==player)return;audioError='Audio ready — use remote to press Play.';reflect(tuner.state);});
      player.onerror=()=>{if(disposed||audio!==player)return;audioError='Audio could not play — use remote to retry playback or re-tune.';reflect(tuner.state);};
    }
    onState({...state,audioError});
    if(!overlay||!status||!controls)return;
    const working=['generating','retrying-image','retrying-audio'].includes(state.phase);
    for(const b of buttons){b.disabled=working;b.style.opacity=working?'.5':'1';}
    const messages={idle:'Creates 1× image and 1× song. Select channel to continue.',generating:'Loading your show on the TV…','retrying-audio':`Image ready. No audio — retrying ${state.audioRetries}/3.`,'retrying-image':`Audio ready. Missing image — retrying ${state.imageRetries}/3.`,complete:`${state.channelName} is playing on the TV.`,partial:state.imageUrl?'Image ready. No audio after three retries.':'Audio ready. Missing image after three retries.',unavailable:'Sorry, service unavailable. Re-tune box.'};
    status.textContent=(messages[state.phase]||'')+(audioError?' '+audioError:'');controls.replaceChildren();
    if(state.audioUrl)button(audio?.paused?'Play audio':'Pause audio',controls,()=>{
      const player=audio;if(!player)return;
      if(!player.paused){player.pause();reflect(tuner.state);return;}
      player.play().then(()=>{if(audio!==player||disposed)return;audioError='';reflect(tuner.state);close();}).catch(()=>{if(audio!==player||disposed)return;audioError='Playback blocked — please press Play again.';reflect(tuner.state);});
    });
    if(!working&&state.channel)button('Re-tune box',controls,()=>tune(catalog?.channels.find(c=>c.id===state.channel)));
    button('Turn TV off',controls,()=>{stop();close();});
  }
  function tune(channel){
    if(!channel||tuner.busy)return;
    stopAudio();audioError='';activeImageUrl=null;
    tuner.tune(channel,catalog.imagePromptPrefix||'Use the following schema to infer an image for the selected channel as a splash while the song plays.');close();
  }
  function stop(){
    tuner?.dispose();stopAudio();activeImageUrl=null;audioError='';
    onState({phase:'idle',channel:null,imageUrl:null,audioUrl:null});
    tuner=disposed?null:makeTuner();room=null;
  }
  async function open(roomId,label=''){
    if(disposed||overlay)return;
    if(room!==roomId){stop();room=roomId;roomLabel=label||String(roomId);}
    overlay=el('div');overlay.style.cssText='position:fixed;inset:0;z-index:2147483000;background:#000b;display:grid;place-items:center;padding:18px';
    const panel=el('section',null,overlay);panel.setAttribute('role','dialog');panel.setAttribute('aria-modal','true');panel.setAttribute('aria-label','Sunset 76 TV remote');
    panel.style.cssText='background:#16181d;color:#eee;padding:22px;border:1px solid #b38e49;border-radius:12px;width:min(700px,95vw);max-height:90vh;overflow:auto;font:16px system-ui';
    el('h2',`Sunset 76 remote — ${roomLabel}`,panel);button('Close remote',panel,close).focus();
    status=el('p','Loading channels…',panel);status.setAttribute('aria-live','polite');
    el('p','Creates 1× image and 1× song. Select channel to continue. Missing media may generate up to three additional retries. The remote closes; your show plays on the TV.',panel);
    const row=el('div',null,panel);controls=el('div',null,panel);
    overlay.onkeydown=event=>{if(event.key==='Escape'){event.stopPropagation();close();return;}if(event.key==='Tab'){const choices=[...panel.querySelectorAll('button:not(:disabled)')],first=choices[0],last=choices.at(-1);if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}}};
    overlay.onpointerdown=event=>event.stopPropagation();overlay.onclick=event=>event.stopPropagation();
    document.body.append(overlay);onOpenChange(true);const thisOverlay=overlay;
    try{
      const response=await fetch(`${channelsUrl}${channelsUrl.includes('?')?'&':'?'}t=${Date.now()}`,{cache:'no-store',signal:request.signal});
      if(!response.ok)throw Error('Channel list HTTP '+response.status);const next=await response.json();
      if(!Array.isArray(next.channels)||next.channels.length!==7||new Set(next.channels.map(c=>c.id)).size!==7)throw Error('Configure seven unique channels');
      if(disposed||overlay!==thisOverlay)return;catalog=next;
      buttons=catalog.channels.map(c=>button(c.name,row,()=>tune(c)));reflect(tuner.state);
    }catch(error){if(overlay===thisOverlay)status.textContent='Channel list unavailable. Close and re-open the remote.';}
  }
  tuner=makeTuner();
  return {open,close,stop,get isOpen(){return !!overlay;},get roomId(){return room;},setMuted(value){muted=!!value;if(audio)audio.muted=muted;},stopAudio,dispose(){if(disposed)return;disposed=true;request.abort();stop();close();}};
}
