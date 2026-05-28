export const PROFILES = [
  { id:'bella', name:'Bella', icon:'B', language:'en', mode:'kids', locked:false, descriptionKey:'profileBellaSub' },
  { id:'ayza', name:'Ayza', icon:'A', language:'id', mode:'kids', locked:false, descriptionKey:'profileAyzaSub' },
  { id:'adult', name:'Adult', icon:'AD', language:'en', mode:'adult', locked:false, descriptionKey:'profileAdultSub' },
  { id:'guest', name:'Guest', icon:'G', language:'en', mode:'family', locked:false, descriptionKey:'profileGuestSub' }
];
export function getProfile(id){ return PROFILES.find(p=>p.id===id) || null; }
export function defaultProfile(){ return PROFILES[0]; }
export function profileStorageKey(profileId, language, mode){ return `tmb_rc6_progress__${profileId}__${language}__${mode}`; }
