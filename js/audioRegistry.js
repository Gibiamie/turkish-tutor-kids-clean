import { allLessonItems } from './lessonData.js';

const USER_VERIFIED_AUDIO = new Set([
  'audio/pronunciation_tr_evler.mp3','audio/pronunciation_tr_kitaplar.mp3','audio/pronunciation_tr_kopekler.mp3','audio/pronunciation_tr_okullar.mp3','audio/pronunciation_tr_arabalar.mp3',
  'audio/pronunciation_tr_elmayi.mp3','audio/pronunciation_tr_gazeteyi.mp3','audio/pronunciation_tr_kitabi.mp3','audio/pronunciation_tr_kopegi.mp3','audio/pronunciation_tr_arabayi.mp3',
  // Dative forms (owner-uploaded)
  'audio/pronunciation_tr_eve.mp3','audio/pronunciation_tr_okula.mp3','audio/pronunciation_tr_kaleme.mp3','audio/pronunciation_tr_arabaya.mp3','audio/pronunciation_tr_suya.mp3','audio/pronunciation_tr_kitaba.mp3','audio/pronunciation_tr_kopege.mp3',
  // Colors added (owner-uploaded)
  'audio/pronunciation_tr_yesil.mp3','audio/pronunciation_tr_siyah.mp3','audio/pronunciation_tr_kahverengi.mp3','audio/pronunciation_tr_gri.mp3'
]);

function pathsFor(item){
  const out=[];
  for(const key of ['audio','mainAudio','exampleAudio','contrastAudio']) if(item[key]) out.push({kind:key,path:item[key]});
  if(item.extraExamples) item.extraExamples.forEach((x,i)=>out.push({kind:`extraExample${i+1}`,path:x.audio}));
  return out;
}
export function audioAuditRows(){
  return allLessonItems().flatMap(item => {
    const paths = pathsFor(item);
    if(item.noIsolatedAudio && !item.mainAudio){
      return [{ itemId:item.id, topicId:item.topicId, path:'', kind:'mainAudio', intentionalNoAudio:true, expectedInRepo:false, pronunciationVerified:false }].concat(paths.map(p=>row(item,p)));
    }
    return paths.map(p=>row(item,p));
  });
}
function row(item,p){
  return { itemId:item.id, topicId:item.topicId, path:p.path, kind:p.kind, intentionalNoAudio:false, expectedInRepo:true, pronunciationVerified:USER_VERIFIED_AUDIO.has(p.path) };
}
export function primaryAudioFor(item){ return item.audio || item.mainAudio || item.exampleAudio || ''; }
export function isPronunciationVerified(path){ return USER_VERIFIED_AUDIO.has(path); }
