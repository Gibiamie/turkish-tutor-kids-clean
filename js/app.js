import { t, localized, LANGS } from './i18n.js';
import { PROFILES, getProfile, defaultProfile } from './profiles.js';
import { TOPICS, datasetFor, topicById } from './lessonData.js';
import { ProgressManager } from './progressStore.js';
import { esc, progressBar, visual, explanationCard, explanationSheet, pct } from './uiComponents.js';
import { renderQA } from './qaPanel.js';

const app=document.getElementById('app');
const sheetRoot=document.getElementById('sheet-root');
const isQA=new URLSearchParams(location.search).get('qa')==='1';
let audio=null;
let state={ screen:'profile', profile:null, language:'en', mode:'kids', topicId:null, index:0, selected:[], answered:false, progress:null, practiceActions:{} };

const topicVisual={
  alphabet:{icon:'ABC',emoji:'🔤',tone:'blue'},
  root_words:{icon:'-lik',emoji:'🌳',tone:'green'},
  meaning_builder:{icon:'🧩',emoji:'🧩',tone:'purple'},
  plural_builder:{icon:'🦆',emoji:'🦆',tone:'amber'},
  accusative_builder:{icon:'🎒',emoji:'🎒',tone:'aqua'}
};

function setProfile(profileId){
  const profile=getProfile(profileId) || defaultProfile();
  state.profile=profile;
  state.language=profile.language;
  state.mode=profile.mode;
  state.progress=new ProgressManager({profileId:profile.id, language:state.language, mode:state.mode});
  state.screen='home'; state.topicId=null; state.index=0; state.selected=[]; state.answered=false; state.practiceActions={};
  render();
}
function updateScope(){ state.progress=new ProgressManager({profileId:state.profile.id, language:state.language, mode:state.mode}); state.practiceActions={}; }
function render(){
  ensureCelebrationStyles();
  if(!state.profile || state.screen==='profile') return renderProfilePicker();
  if(state.screen==='home') return renderHome();
  if(state.screen==='lesson') return renderLesson();
}
function displayName(){ return state.profile?.name || (state.language==='id'?'Ayza':'Bella'); }
function itemKey(){ const item=currentItem(); return state.topicId && item ? `${state.topicId}::${item.id}` : ''; }
function hasPracticeAction(){ return !!state.practiceActions[itemKey()]; }
function markPracticeAction(){ const key=itemKey(); if(key) state.practiceActions[key]=true; }
function isCurrentComplete(){ const item=currentItem(); return !!(item && state.progress?.isComplete(state.topicId,item.id)); }
function lessonRequiresCompletion(){ const topic=topicById(state.topicId); return topic && topic.type!=='builder'; }
function canMoveForward(){
  if(!lessonRequiresCompletion()) return state.answered || isCurrentComplete();
  return isCurrentComplete();
}
function warnPracticeFirst(){ alert(t(state.language,'practiceBeforeNext')); }
function ensureCelebrationStyles(){
  if(document.getElementById('butterfly-celebration-styles')) return;
  const style=document.createElement('style');
  style.id='butterfly-celebration-styles';
  style.textContent=`
    .button-row.celebration-anchor{position:relative;overflow:visible;}
    .butterfly-burst{position:absolute;left:50%;top:6px;transform:translateX(-50%);width:1px;height:1px;pointer-events:none;z-index:4;}
    .butterfly-burst span{position:absolute;font-size:25px;line-height:1;filter:drop-shadow(0 6px 8px rgba(15,23,42,.18));opacity:0;animation:butterflyFly 1.6s ease-out forwards;}
    .butterfly-burst span:nth-child(1){--x:-92px;--y:-112px;animation-delay:.02s;}
    .butterfly-burst span:nth-child(2){--x:-46px;--y:-136px;animation-delay:.10s;}
    .butterfly-burst span:nth-child(3){--x:0px;--y:-154px;animation-delay:.05s;}
    .butterfly-burst span:nth-child(4){--x:48px;--y:-132px;animation-delay:.14s;}
    .butterfly-burst span:nth-child(5){--x:92px;--y:-112px;animation-delay:.08s;}
    .butterfly-burst span:nth-child(6){--x:24px;--y:-92px;animation-delay:.20s;}
    @keyframes butterflyFly{0%{opacity:0;transform:translate(-50%,0) scale(.55) rotate(0deg);}15%{opacity:1;}65%{opacity:1;transform:translate(calc(-50% + var(--x)),var(--y)) scale(1.08) rotate(16deg);}100%{opacity:0;transform:translate(calc(-50% + var(--x)),calc(var(--y) - 34px)) scale(.72) rotate(-18deg);}}
    @media (prefers-reduced-motion: reduce){.butterfly-burst span{animation:none;opacity:0;}}
  `;
  document.head.appendChild(style);
}
function butterflyBurst(){ return `<div class="butterfly-burst" aria-hidden="true"><span>🦋</span><span>🦋</span><span>🦋</span><span>🦋</span><span>🦋</span><span>🦋</span></div>`; }
function bottomNav(active='home'){
  return `<nav class="bottom-nav" aria-label="Main navigation">
    <button class="${active==='home'?'active':''}" data-action="home"><span>🏠</span><b>Home</b></button>
    <button class="${active==='learn'?'active':''}" data-action="home"><span>📖</span><b>Learn</b></button>
    <button data-action="open-topic" data-topic="meaning_builder"><span>🎮</span><b>Play</b></button>
    <button><span>🏅</span><b>Rewards</b></button>
    <button data-action="settings"><span>☺</span><b>Profile</b></button>
  </nav>`;
}
function renderProfilePicker(){
  const lang=state.language || 'en';
  const cards=PROFILES.map(p=>`<button class="profile-card" data-action="select-profile" data-profile="${esc(p.id)}"><span>${esc(p.icon)}</span><div><strong>${esc(t(p.language, 'profile'+p.id.charAt(0).toUpperCase()+p.id.slice(1)) || p.name)}</strong><p>${esc(t(p.language,p.descriptionKey))}</p></div></button>`).join('');
  app.innerHTML=`<main class="center-shell"><section class="hero-card"><div class="brand-mark big">TR</div><h1>${esc(t(lang,'appTitle'))}</h1><p>${esc(t(lang,'version'))}</p></section><section class="card"><h2>${esc(t(lang,'selectProfile'))}</h2><p>${esc(t(lang,'selectProfileSub'))}</p><div class="profile-grid">${cards}</div></section></main>`;
}
function renderHome(){
  const lang=state.language; const name=displayName();
  const allIds=TOPICS.flatMap(topic=>datasetFor(topic.id).map(x=>({topicId:topic.id,id:x.id})));
  const total=allIds.length || 1;
  const done=allIds.filter(x=>state.progress.isComplete(x.topicId,x.id)).length;
  const overall=pct(done,total);
  const topicCards=TOPICS.map(topic=>{
    const ds=datasetFor(topic.id); const completed=state.progress.completedCount(topic.id, ds.map(x=>x.id)); const p=pct(completed,ds.length);
    const meta=topicVisual[topic.id]||{icon:'★',emoji:'✨',tone:'blue'};
    return `<button class="module-card ${meta.tone}" data-action="open-topic" data-topic="${esc(topic.id)}">
      <span class="module-art">${esc(meta.icon)}</span><span class="module-copy"><strong>${esc(localized(topic.title,lang))}</strong><em>${esc(localized(topic.sub,lang))}</em></span><span class="module-arrow">→</span><i style="--p:${p}%"></i>
    </button>`;
  }).join('') + `<button class="module-card pink" type="button"><span class="module-art">🎁</span><span class="module-copy"><strong>Fun Zone</strong><em>Games, quizzes and surprises!</em></span><span class="module-arrow">→</span><i style="--p:0%"></i></button>`;
  app.innerHTML=`<main class="home-page">
    <section class="home-header"><div class="avatar">${esc((name[0]||'B').toUpperCase())}</div><div><h1>${esc(name)}</h1><p><span>⭐ 27</span> Day Streak</p></div><button class="lang-pill" data-action="settings">🌐 ${esc(lang.toUpperCase())}</button></section>
    <section class="laya-hero"><div class="laya-mascot">🐬</div><div class="hero-text"><h2>Merhaba, ${esc(name)}! 👋</h2><p>${lang==='id'?'Ayo susun makna dalam bahasa Turki hari ini!':'Let’s build meanings in Turkish today!'}</p><button class="btn primary hero-cta" data-action="open-topic" data-topic="meaning_builder">▶ ${esc(t(lang,'continue'))}</button></div><span class="float-butterfly">🦋</span></section>
    <section class="progress-card"><div class="progress-ring" style="--p:${overall}"><strong>${overall}%</strong><span>Complete</span></div><div class="progress-copy"><h3>${lang==='id'?'Hebat!':'Great job!'} <span>${lang==='id'?'Kamu semakin maju.':'You’re doing amazing!'}</span></h3>${progressBar(overall)}<div class="stats"><b>📘 ${total}<small>Lessons</small></b><b>🏆 ${done}<small>Done</small></b><b>🔥 27<small>Day Streak</small></b></div></div></section>
    <section class="module-grid">${topicCards}</section>${isQA?renderQA(state):''}${bottomNav('home')}
  </main>`;
}
function currentItem(){ return datasetFor(state.topicId)[state.index]; }
function renderLesson(){
  const lang=state.language; const topic=topicById(state.topicId); const ds=datasetFor(state.topicId); const item=currentItem();
  const done=state.progress.completedCount(state.topicId, ds.map(x=>x.id)); const p=pct(done,ds.length);
  const isLast=state.index>=ds.length-1;
  const endButton=isLast
    ? `<button class="btn success" data-action="finish-topic">${esc(t(lang,'finishTopic'))}</button>`
    : `<button class="btn primary" data-action="next">${esc(t(lang,'next'))}</button>`;
  let body=''; if(topic.type==='alphabet') body=renderAlphabet(item,p,topic,ds.length); if(topic.type==='root') body=renderRoot(item,p,topic,ds.length); if(topic.type==='builder') body=renderBuilder(item,p,topic,ds.length);
  app.innerHTML=`<main class="lesson-page">${body}<nav class="lesson-nav"><button class="btn secondary" data-action="prev" ${state.index===0?'disabled':''}>${esc(t(lang,'previous'))}</button><button class="btn secondary" data-action="home">${esc(t(lang,'mainPage'))}</button>${endButton}</nav></main>`;
}
function lessonHeader(title,p,total){ return `<header class="lesson-head"><button class="close-x" data-action="home">×</button><h1>${esc(title)}</h1><span class="streak-pill">🔥 7</span><div class="lesson-progress"><span style="width:${p}%"></span></div><b>${state.index+1} / ${total}</b></header>`; }
function layaGuide(text){ return `<section class="laya-guide"><div class="mini-laya">🐬</div><div><strong>Laya guide</strong><p>${esc(text)}</p></div><span>🦋</span></section>`; }
function practiceActions(){
  const lang=state.language;
  return `<div class="learning-actions"><button class="learn-action done" data-action="practice-done"><span>✓</span>${esc(t(lang,'practiceDone'))}</button><button class="learn-action" data-action="already-know"><span>☆</span>${esc(t(lang,'alreadyKnow'))}</button><button class="learn-action" data-action="needs-more"><span>↻</span>${esc(t(lang,'needsMorePractice'))}</button></div><p class="status">${esc(t(lang,'practiceRule'))}</p>`;
}
function renderAlphabet(item,p,topic,total){
  const lang=state.language; const buttons=[];
  if(item.mainAudio) buttons.push(`<button class="sound-card" data-action="play" data-path="${esc(item.mainAudio)}">🔊 <b>${esc(t(lang,'mainSound'))}</b></button>`);
  if(item.exampleAudio) buttons.push(`<button class="sound-card" data-action="play" data-path="${esc(item.exampleAudio)}">📖 <b>${esc(t(lang,'exampleWord'))}</b></button>`);
  if(item.contrastAudio) buttons.push(`<button class="sound-card" data-action="play" data-path="${esc(item.contrastAudio)}">〽 <b>${esc(t(lang,'contrastSound'))}</b></button>`);
  if(item.extraExamples) item.extraExamples.forEach(x=>buttons.push(`<button class="sound-card" data-action="play" data-path="${esc(x.audio)}">📖 <b>${esc(x.word)}</b></button>`));
  return `${lessonHeader(localized(topic.title,lang),p,total)}<section class="lesson-card alphabet-card">${layaGuide(localized(item.target,lang))}<div class="letter-stage"><div class="letter">${esc(item.letter)}</div><div class="button-row sound-grid">${buttons.join('')}</div></div><section class="example-card"><div class="example-icon">🎁</div><div><div class="word-large">${esc(item.exampleWord||'')}</div><p class="target">${esc(localized(item.target,lang))}</p></div><button class="round-sound" data-action="play" data-path="${esc(item.exampleAudio||item.mainAudio||'')}">🔊</button></section><button class="link-btn" data-action="explain" data-key="${esc(item.explanationKey)}">Learn why</button><p id="audio-status" class="status"></p>${practiceActions()}</section>`;
}
function renderRoot(item,p,topic,total){
  const lang=state.language;
  return `${lessonHeader(localized(topic.title,lang),p,total)}<section class="lesson-card root-card">${layaGuide(lang==='id'?'Dengarkan kata, lihat gambar, lalu latih sekali.':'Listen to the word, look at the image, then practice once.')}<div class="prompt-card">${visual(item)}<div><h2>${esc(item.word)}</h2><p>${esc(localized(item.meaning,lang))}</p></div><button class="round-sound" data-action="play" data-path="${esc(item.audio)}">🔊</button></div><p id="audio-status" class="status"></p>${practiceActions()}</section>`;
}
function renderBuilder(item,p,topic,total){
  const lang=state.language; const selected=state.selected.length ? state.selected.map((x,i)=>`<button class="chip selected" data-action="remove-part" data-index="${i}">${esc(x)}</button>`).join('') : `<span>${esc(t(lang,'answerHere'))}</span>`;
  const options=item.options.map(part=>`<button class="chip" data-action="pick-part" data-part="${esc(part)}">${esc(part)}</button>`).join('');
  const celebration=state.answered?butterflyBurst():'';
  const fb=state.answered?`<section class="success-panel"><div class="success-check">✓</div><div><h2>Harika! 🎉</h2><p>${esc(t(lang,'correct'))}</p><strong>${esc(item.finalWord||item.revealAfterCorrect)}</strong></div><div class="success-laya">🐬</div><span class="success-butterflies">🦋 🦋</span><button class="btn secondary" data-action="play" data-path="${esc(item.audio)}">${esc(t(lang,'listen'))}</button></section>`:'';
  return `${lessonHeader(localized(topic.title,lang),p,total)}<section class="builder-screen"><section class="meaning-prompt-card">${item.image?visual({image:item.image,fallback:''}):'<div class="visual"><span>📘</span></div>'}<div><button class="round-sound" data-action="play" data-path="${esc(item.audio)}">🔊</button><h2>${esc(localized(item.prompt,lang))}</h2><p>${esc(t(lang,'noFinalAnswer'))}</p></div></section>${layaGuide(state.answered?(lang==='id'?'Doğru cevabı parçalardan oluşturdun.':'Great job! You built the meaning!'):(lang==='id'?'Parçaları sırayla seç.':'Choose the blocks in the correct order.'))}<div class="answer-zone ${state.selected.length?'':'empty'}">${selected}</div><div class="chip-grid">${options}</div><div class="button-row celebration-anchor"><button class="btn secondary" data-action="clear">↻ ${esc(t(lang,'clear'))}</button><button class="btn primary" data-action="check">✓ ${esc(t(lang,'check'))}</button>${celebration}</div><div id="feedback-slot">${fb}</div><p id="audio-status" class="status">${state.answered?'':esc(t(lang,'audioLocked'))}</p><div class="lesson-tools"><button class="btn secondary" data-action="explain" data-key="${esc(item.explanationKey)}">ⓘ Word Info</button><button class="btn secondary">🔖 Kaydet</button></div></section>`;
}
function renderSettings(){
  const lang=state.language;
  const lockedLabel=LANGS[lang]?.native || (lang==='id'?'Bahasa Indonesia':'English');
  const lockedNote=lang==='id'
    ? 'Jalur bahasa dikunci oleh profil Ayza. Untuk bahasa Inggris, kembali dan pilih profil Bella.'
    : 'Language path is locked by the selected profile. To use Indonesian, go back and choose Ayza.';
  const modes=['kids','family','adult'].map(m=>`<button class="seg ${state.mode===m?'active':''}" data-action="set-mode" data-mode="${m}">${esc(t(lang,m))}</button>`).join('');
  sheetRoot.innerHTML=`<div class="sheet-backdrop" data-action="close-sheet"><div class="sheet" role="dialog" aria-modal="true"><h2>${esc(t(lang,'settings'))}</h2><label>${esc(t(lang,'language'))}</label><div class="seg-row"><span class="seg active">${esc(lockedLabel)}</span></div><p class="status">${esc(lockedNote)}</p><button class="btn secondary full" data-action="profile-screen">${esc(t(lang,'changeProfile'))}</button><label>${esc(t(lang,'learnerMode'))}</label><div class="seg-row">${modes}</div><button class="btn primary full" data-action="close-sheet">${esc(t(lang,'close'))}</button></div></div>`;
}
function play(path){
  const lang=state.language; const status=document.getElementById('audio-status');
  if(!path){ if(status) status.textContent=t(lang,'audioMissing'); return; }
  markPracticeAction();
  if(audio){ audio.pause(); audio=null; }
  audio=new Audio(path); if(status) status.textContent=t(lang,'audioLoading');
  audio.addEventListener('playing',()=>{ if(status) status.textContent=t(lang,'audioPlaying'); });
  audio.addEventListener('ended',()=>{ if(status) status.textContent=t(lang,'audioReady'); audio=null; });
  audio.addEventListener('error',()=>{ if(status) status.textContent=t(lang,'audioError'); audio=null; });
  audio.play().catch(()=>{ if(status) status.textContent=t(lang,'audioTapAgain'); });
}
function checkAnswer(){
  const item=currentItem(); const ok=JSON.stringify(state.selected)===JSON.stringify(item.answerParts); state.progress.recordAttempt(state.topicId,item.id,ok,state.selected);
  if(ok){ state.answered=true; state.progress.markComplete(state.topicId,item.id); renderLesson(); }
  else { const slot=document.getElementById('feedback-slot'); if(slot) slot.innerHTML=`<div class="feedback bad">${esc(t(state.language,'wrong'))}</div>`; }
}
function completeAfterPractice(statusText){
  if(!hasPracticeAction()){ alert(t(state.language,'practiceFirstWarning')); return; }
  const item=currentItem(); state.progress.markComplete(state.topicId,item.id); renderLesson();
  setTimeout(()=>{ const status=document.getElementById('audio-status'); if(status) status.textContent=statusText || t(state.language,'practiceSaved'); },0);
}
function markNeedsMorePractice(){
  if(!hasPracticeAction()){ alert(t(state.language,'practiceFirstWarning')); return; }
  const item=currentItem(); state.progress.recordAttempt(state.topicId,item.id,false,'Needs more practice');
  alert(t(state.language,'needsMoreSaved'));
}
function openTopic(topicId,index=0){ state.screen='lesson'; state.topicId=topicId; state.index=index; state.selected=[]; state.answered=false; render(); }
function go(delta){
  if(delta>0 && !canMoveForward()){ warnPracticeFirst(); return; }
  const len=datasetFor(state.topicId).length; const next=Math.max(0,Math.min(len-1,state.index+delta)); if(next!==state.index) openTopic(state.topicId,next);
}
function reset(){ if(confirm(state.language==='id'?'Hapus progres profil ini?':'Delete this profile progress?')){ state.progress.clear(); render(); } }

document.addEventListener('click', e=>{
  const el=e.target.closest('[data-action]'); if(!el) return; const action=el.dataset.action;
  if(action==='select-profile') return setProfile(el.dataset.profile);
  if(action==='profile-screen'){ sheetRoot.innerHTML=''; state.screen='profile'; return render(); }
  if(action==='settings') return renderSettings();
  if(action==='close-sheet'){
    if(el.classList.contains('sheet-backdrop') && e.target!==el) return;
    sheetRoot.innerHTML=''; return;
  }
  if(action==='set-mode'){ state.mode=el.dataset.mode; updateScope(); sheetRoot.innerHTML=''; return render(); }
  if(action==='open-topic') return openTopic(el.dataset.topic,0);
  if(action==='home'){ state.screen='home'; state.topicId=null; state.selected=[]; state.answered=false; return render(); }
  if(action==='finish-topic'){
    if(!canMoveForward()){ warnPracticeFirst(); return; }
    state.screen='home'; state.topicId=null; state.selected=[]; state.answered=false; return render();
  }
  if(action==='prev') return go(-1);
  if(action==='next') return go(1);
  if(action==='play') return play(el.dataset.path);
  if(action==='practice-done') return completeAfterPractice(t(state.language,'practiceSaved'));
  if(action==='already-know') return completeAfterPractice(t(state.language,'alreadyKnowSaved'));
  if(action==='needs-more') return markNeedsMorePractice();
  if(action==='pick-part'){ if(!state.answered){ state.selected.push(el.dataset.part); renderLesson(); } return; }
  if(action==='remove-part'){ if(!state.answered){ state.selected.splice(Number(el.dataset.index),1); renderLesson(); } return; }
  if(action==='clear'){ state.selected=[]; state.answered=false; return renderLesson(); }
  if(action==='check') return checkAnswer();
  if(action==='reset-progress') return reset();
  if(action==='explain'){ sheetRoot.innerHTML=explanationSheet(state.language, el.dataset.key); return; }
});

render();