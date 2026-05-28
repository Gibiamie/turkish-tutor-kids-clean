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
  if(!state.profile || state.screen==='profile') return renderProfilePicker();
  if(state.screen==='home') return renderHome();
  if(state.screen==='lesson') return renderLesson();
}
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
function topbar(title, sub){
  const lang=state.language;
  return `<header class="topbar"><div class="brand-row"><div class="brand-mark">TR</div><div><h1>${esc(title)}</h1><p>${esc(sub)}</p></div></div>
  ${state.screen!=='home'?`<button class="btn ghost" data-action="home">${esc(t(lang,'home'))}</button>`:''}</header>`;
}
function renderProfilePicker(){
  const lang=state.language || 'en';
  const cards=PROFILES.map(p=>`<button class="profile-card" data-action="select-profile" data-profile="${esc(p.id)}"><span>${esc(p.icon)}</span><div><strong>${esc(t(p.language, 'profile'+p.id.charAt(0).toUpperCase()+p.id.slice(1)) || p.name)}</strong><p>${esc(t(p.language,p.descriptionKey))}</p></div></button>`).join('');
  app.innerHTML=`<main class="center-shell"><section class="hero-card"><div class="brand-mark big">TR</div><h1>${esc(t(lang,'appTitle'))}</h1><p>${esc(t(lang,'version'))}</p></section><section class="card"><h2>${esc(t(lang,'selectProfile'))}</h2><p>${esc(t(lang,'selectProfileSub'))}</p><div class="profile-grid">${cards}</div></section></main>`;
}
function renderHome(){
  const lang=state.language;
  const topicCards=TOPICS.map((topic,i)=>{
    const ds=datasetFor(topic.id); const done=state.progress.completedCount(topic.id, ds.map(x=>x.id)); const p=pct(done,ds.length);
    const label=p>=100?t(lang,'completed'):p>0?t(lang,'continue'):t(lang,'start');
    return `<button class="topic-card" data-action="open-topic" data-topic="${esc(topic.id)}"><span class="topic-num">${i+1}</span><div><h3>${esc(localized(topic.title,lang))}</h3><p>${esc(localized(topic.sub,lang))}</p>${progressBar(p)}<b>${esc(label)}</b></div></button>`;
  }).join('');
  app.innerHTML=`${topbar(t(lang,'appTitle'), `${state.profile.name} · ${t(lang,state.mode)}`)}<main class="page"><section class="card hero"><div><h2>${esc(t(lang,'homeTitle'))}</h2><p>${esc(t(lang,'homeSub'))}</p><p class="scope">${esc(t(lang,'progressSavedFor'))}: <b>${esc(state.profile.name)}</b> · ${esc(LANGS[lang].native)}</p></div><div class="home-actions"><button class="btn secondary" data-action="settings">${esc(t(lang,'settings'))}</button><button class="btn ghost" data-action="profile-screen">${esc(t(lang,'changeProfile'))}</button></div></section><section class="topic-grid">${topicCards}</section><section class="danger-zone"><button class="btn danger" data-action="reset-progress">${esc(t(lang,'reset'))}</button></section>${isQA?renderQA(state):''}</main>`;
}
function currentItem(){ return datasetFor(state.topicId)[state.index]; }
function renderLesson(){
  const lang=state.language; const topic=topicById(state.topicId); const ds=datasetFor(state.topicId); const item=currentItem();
  const done=state.progress.completedCount(state.topicId, ds.map(x=>x.id)); const p=pct(done,ds.length);
  const isLast=state.index>=ds.length-1;
  const endButton=isLast
    ? `<button class="btn success" data-action="finish-topic">${esc(t(lang,'finishTopic'))}</button>`
    : `<button class="btn primary" data-action="next">${esc(t(lang,'next'))}</button>`;
  let body=''; if(topic.type==='alphabet') body=renderAlphabet(item); if(topic.type==='root') body=renderRoot(item); if(topic.type==='builder') body=renderBuilder(item);
  app.innerHTML=`${topbar(localized(topic.title,lang), `${t(lang,'item')} ${state.index+1} ${t(lang,'of')} ${ds.length} · ${state.profile.name}`)}<main class="page lesson"><div class="lesson-meta">${progressBar(p)}</div>${body}<nav class="lesson-nav"><button class="btn secondary" data-action="prev" ${state.index===0?'disabled':''}>${esc(t(lang,'previous'))}</button><button class="btn secondary" data-action="home">${esc(t(lang,'mainPage'))}</button>${endButton}</nav></main>`;
}
function practiceActions(){
  const lang=state.language;
  return `<div class="button-row learning-actions"><button class="btn success" data-action="practice-done">${esc(t(lang,'practiceDone'))}</button><button class="btn secondary" data-action="already-know">${esc(t(lang,'alreadyKnow'))}</button><button class="btn secondary" data-action="needs-more">${esc(t(lang,'needsMorePractice'))}</button></div><p class="status">${esc(t(lang,'practiceRule'))}</p>`;
}
function renderAlphabet(item){
  const lang=state.language; const buttons=[];
  if(item.mainAudio) buttons.push(`<button class="btn secondary" data-action="play" data-path="${esc(item.mainAudio)}">${esc(t(lang,'mainSound'))}</button>`);
  if(item.exampleAudio) buttons.push(`<button class="btn secondary" data-action="play" data-path="${esc(item.exampleAudio)}">${esc(t(lang,'exampleWord'))}</button>`);
  if(item.contrastAudio) buttons.push(`<button class="btn secondary" data-action="play" data-path="${esc(item.contrastAudio)}">${esc(t(lang,'contrastSound'))}</button>`);
  if(item.extraExamples) item.extraExamples.forEach(x=>buttons.push(`<button class="btn secondary" data-action="play" data-path="${esc(x.audio)}">${esc(t(lang,'extraExample'))}: ${esc(x.word)}</button>`));
  return `<section class="card lesson-card center">${explanationCard(lang,item.explanationKey)}<div class="letter">${esc(item.letter)}</div><p class="target">${esc(localized(item.target,lang))}</p><div class="button-row">${buttons.join('')}</div><div class="word-large">${esc(item.exampleWord||'')}</div><p id="audio-status" class="status"></p>${practiceActions()}</section>`;
}
function renderRoot(item){
  const lang=state.language;
  return `<section class="card lesson-card center">${visual(item)}<div class="word-large">${esc(item.word)}</div><p class="target">${esc(localized(item.meaning,lang))}</p><button class="btn secondary" data-action="play" data-path="${esc(item.audio)}">${esc(t(lang,'listen'))}</button><p id="audio-status" class="status"></p>${practiceActions()}</section>`;
}
function renderBuilder(item){
  const lang=state.language; const selected=state.selected.length ? state.selected.map((x,i)=>`<button class="chip selected" data-action="remove-part" data-index="${i}">${esc(x)}</button>`).join('') : `<span>${esc(t(lang,'answerHere'))}</span>`;
  const options=item.options.map(part=>`<button class="chip" data-action="pick-part" data-part="${esc(part)}">${esc(part)}</button>`).join('');
  const fb=state.answered?`<div class="feedback ok"><b>${esc(t(lang,'correct'))}</b><p>${esc(item.revealAfterCorrect)}</p><button class="btn secondary" data-action="play" data-path="${esc(item.audio)}">${esc(t(lang,'listen'))}</button></div>`:'';
  return `<section class="card lesson-card">${explanationCard(lang,item.explanationKey)}<h2 class="prompt">${esc(localized(item.prompt,lang))}</h2><p class="target center">${esc(t(lang,'noFinalAnswer'))}</p>${item.image?visual({image:item.image,fallback:''}):''}<div class="answer-zone ${state.selected.length?'':'empty'}">${selected}</div><div class="chip-grid">${options}</div><div class="button-row"><button class="btn secondary" data-action="clear">${esc(t(lang,'clear'))}</button><button class="btn primary" data-action="check">${esc(t(lang,'check'))}</button></div><div id="feedback-slot">${fb}</div><p id="audio-status" class="status">${state.answered?'':esc(t(lang,'audioLocked'))}</p></section>`;
}
function renderSettings(){
  const lang=state.language;
  const langBtns=Object.values(LANGS).map(l=>`<button class="seg ${state.language===l.code?'active':''}" data-action="set-lang" data-lang="${l.code}">${esc(lang==='id' ? (l.code==='en'?'Bahasa Inggris':'Bahasa Indonesia') : l.native)}</button>`).join('');
  const modes=['kids','family','adult'].map(m=>`<button class="seg ${state.mode===m?'active':''}" data-action="set-mode" data-mode="${m}">${esc(t(lang,m))}</button>`).join('');
  sheetRoot.innerHTML=`<div class="sheet-backdrop" data-action="close-sheet"><div class="sheet" role="dialog" aria-modal="true"><h2>${esc(t(lang,'settings'))}</h2><label>${esc(t(lang,'language'))}</label><div class="seg-row">${langBtns}</div><label>${esc(t(lang,'learnerMode'))}</label><div class="seg-row">${modes}</div><button class="btn primary full" data-action="close-sheet">${esc(t(lang,'close'))}</button></div></div>`;
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
  if(action==='profile-screen'){ state.screen='profile'; return render(); }
  if(action==='settings') return renderSettings();
  if(action==='close-sheet'){
    if(el.classList.contains('sheet-backdrop') && e.target!==el) return;
    sheetRoot.innerHTML=''; return;
  }
  if(action==='set-lang'){ state.language=el.dataset.lang; updateScope(); sheetRoot.innerHTML=''; return render(); }
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