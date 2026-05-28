import { profileStorageKey } from './profiles.js';

export class LocalProgressStore {
  constructor(scope){ this.scope = scope; this.key = profileStorageKey(scope.profileId, scope.language, scope.mode); }
  _empty(){ return { meta:{...this.scope, store:'local', schema:'rc6.1'}, items:{}, attempts:{} }; }
  load(){
    try { return JSON.parse(localStorage.getItem(this.key)) || this._empty(); }
    catch { return this._empty(); }
  }
  save(data){ localStorage.setItem(this.key, JSON.stringify(data)); }
  clear(){ localStorage.removeItem(this.key); }
  markComplete(topicId,itemId){
    const data=this.load(); const k=`${topicId}::${itemId}`;
    const existing=data.items[k] || {profileId:this.scope.profileId, language:this.scope.language, mode:this.scope.mode, topicId, itemId, attempts:0, wrongAttempts:0, completed:false};
    data.items[k] = {...existing, completed:true, completedAt:new Date().toISOString(), lastSeenAt:new Date().toISOString()};
    this.save(data); return data.items[k];
  }
  recordAttempt(topicId,itemId,ok,selected){
    const data=this.load(); const k=`${topicId}::${itemId}`;
    const existing=data.items[k] || {profileId:this.scope.profileId, language:this.scope.language, mode:this.scope.mode, topicId, itemId, attempts:0, wrongAttempts:0, completed:false};
    existing.attempts=(existing.attempts||0)+1; if(!ok) existing.wrongAttempts=(existing.wrongAttempts||0)+1;
    existing.lastAnswer=Array.isArray(selected)?selected.join(' + '):String(selected||'');
    existing.lastSeenAt=new Date().toISOString();
    data.items[k]=existing; this.save(data); return existing;
  }
  isComplete(topicId,itemId){ return !!this.load().items[`${topicId}::${itemId}`]?.completed; }
  completedCount(topicId, validIds){
    const set=new Set(validIds); const items=this.load().items;
    return Object.values(items).filter(x=>x.topicId===topicId && x.completed && set.has(x.itemId)).length;
  }
}

export class CloudProgressStore {
  constructor(scope){ this.scope=scope; this.enabled=false; }
  // RC6 is backend-ready. RC7 can replace this with Supabase implementation.
}

export class ProgressManager {
  constructor(scope){ this.scope=scope; this.local=new LocalProgressStore(scope); this.cloud=new CloudProgressStore(scope); }
  clear(){ this.local.clear(); }
  load(){ return this.local.load(); }
  markComplete(topicId,itemId){ return this.local.markComplete(topicId,itemId); }
  recordAttempt(topicId,itemId,ok,selected){ return this.local.recordAttempt(topicId,itemId,ok,selected); }
  isComplete(topicId,itemId){ return this.local.isComplete(topicId,itemId); }
  completedCount(topicId, validIds){ return this.local.completedCount(topicId, validIds); }
  storeLabel(){ return this.cloud.enabled ? 'Cloud + offline cache' : 'Local fallback · backend-ready'; }
}
