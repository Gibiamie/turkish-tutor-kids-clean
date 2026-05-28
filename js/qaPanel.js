import { TOPICS, datasetFor } from './lessonData.js';
import { audioAuditRows, primaryAudioFor, isPronunciationVerified } from './audioRegistry.js';
import { localized, t } from './i18n.js';
import { esc } from './uiComponents.js';

export function renderQA(state){
  const lang=state.language;
  const audioRows=audioAuditRows();
  const rows=TOPICS.map(topic=>{
    const ds=datasetFor(topic.id);
    const complete=state.progress.completedCount(topic.id, ds.map(x=>x.id));
    return `<tr><td>${esc(localized(topic.title,lang))}</td><td>${complete}/${ds.length}</td><td>${esc(state.profile.id)} / ${esc(lang)} / ${esc(state.mode)}</td></tr>`;
  }).join('');
  const audio=audioRows.map(r=>{
    const status = r.intentionalNoAudio ? t(lang,'qaIntentionalNoAudio') : (r.pronunciationVerified ? t(lang,'qaVerified') : t(lang,'qaNotVerified'));
    const cls = r.intentionalNoAudio ? 'warn' : (r.pronunciationVerified ? 'ok' : 'needs');
    return `<tr><td>${esc(r.topicId)}<br><b>${esc(r.itemId)}</b></td><td>${esc(r.kind)}</td><td class="mono">${esc(r.path||'—')}</td><td><span class="tag ${cls}">${esc(status)}</span></td></tr>`;
  }).join('');
  return `<section class="card qa"><h2>${esc(t(lang,'qaMode'))}</h2><p>${esc(t(lang,'qaSub'))}</p>
    <h3>${esc(t(lang,'qaProgressStatus'))}</h3><table><thead><tr><th>Topic</th><th>Done</th><th>Scope</th></tr></thead><tbody>${rows}</tbody></table>
    <h3>${esc(t(lang,'qaAudioStatus'))}</h3><table><thead><tr><th>${esc(t(lang,'qaItem'))}</th><th>Kind</th><th>${esc(t(lang,'qaPath'))}</th><th>Status</th></tr></thead><tbody>${audio}</tbody></table>
  </section>`;
}
