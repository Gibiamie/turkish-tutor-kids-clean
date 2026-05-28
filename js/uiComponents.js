import { localized, t } from './i18n.js';
import { EXPLANATIONS } from './lessonData.js';

export function esc(s){ return String(s ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
export function pct(done,total){ return total ? Math.round(done/total*100) : 0; }
export function progressBar(value){ return `<div class="progress"><span style="width:${Math.max(0,Math.min(100,value))}%"></span></div><div class="progress-label">${value}%</div>`; }
export function visual(item){
  const fallback = esc(item?.fallback || item?.word || 'WORD');
  if(item?.image){
    return `<div class="visual"><img src="${esc(item.image)}" alt="" onerror="this.remove();this.parentElement.innerHTML='<span>${fallback}</span>'"></div>`;
  }
  return `<div class="visual fallback"><span>${fallback}</span></div>`;
}
export function explanationCard(lang,key,compact=false){
  const ex=EXPLANATIONS[key] || {};
  const main=localized(ex.main,lang) || '';
  return `<section class="teach-card">
    <img src="assets/laya_dolphin_3d_transparent.png" alt="Laya" onerror="this.style.display='none'" />
    <div><strong>${esc(t(lang,'layaGuide'))}</strong><p>${esc(main)}</p>${compact?'':`<button class="link-btn" data-action="explain" data-key="${esc(key)}">${esc(t(lang,'learnWhy'))}</button>`}</div>
  </section>`;
}
export function explanationSheet(lang,key){
  const ex=EXPLANATIONS[key] || {};
  const list=(ex.practice?.[lang] || ex.practice?.en || []).map(x=>`<li>${esc(x)}</li>`).join('');
  const block=(label,val)=> val ? `<div class="explain-block"><h4>${esc(label)}</h4><p>${esc(val)}</p></div>` : '';
  return `<div class="sheet-backdrop" data-action="close-sheet"><div class="sheet" role="dialog" aria-modal="true" onclick="event.stopPropagation()">
    <h2>${esc(t(lang,'learnWhy'))}</h2>
    ${block(t(lang,'keyRule'), localized(ex.main,lang))}
    ${block(t(lang,'whatHear'), localized(ex.hear,lang))}
    ${block(t(lang,'mouthTip'), localized(ex.mouth,lang))}
    ${block(t(lang,'commonMistake'), localized(ex.mistake,lang))}
    ${list ? `<div class="explain-block"><h4>${esc(t(lang,'miniPractice'))}</h4><ol>${list}</ol></div>` : ''}
    <button class="btn primary full" data-action="close-sheet">${esc(t(lang,'close'))}</button>
  </div></div>`;
}
