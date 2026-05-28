export const TOPICS = [
  { id:'alphabet', type:'alphabet', title:{en:'Alphabet Pro', id:'Alfabet Turki'}, sub:{en:'Sounds and contrasts', id:'Bunyi dan perbandingan'} },
  { id:'root_words', type:'root', title:{en:'Root Words', id:'Kata Dasar'}, sub:{en:'Concrete starter words', id:'Kata awal yang nyata'} },
  { id:'meaning_builder', type:'builder', title:{en:'Meaning Builder', id:'Penyusun Makna'}, sub:{en:'Root + meaning suffixes', id:'Kata dasar + akhiran makna'} },
  { id:'plural_builder', type:'builder', title:{en:'Plural Builder', id:'Bentuk Jamak'}, sub:{en:'-lar / -ler', id:'-lar / -ler'} },
  { id:'accusative_builder', type:'builder', title:{en:'Accusative Builder', id:'Objek Tertentu'}, sub:{en:'The definite object', id:'Objek yang sudah tertentu'} }
];

export const ALPHABET_PRO = [
  {id:'alpha_a',letter:'a',target:{en:'Turkish a sound',id:'bunyi a Turki'},mainAudio:'audio/pronunciation_tr_a.mp3',exampleWord:'araba',exampleAudio:'audio/pronunciation_tr_araba.mp3',explanationKey:'a_sound'},
  {id:'alpha_e',letter:'e',target:{en:'Turkish e sound; not i',id:'bunyi e Turki; bukan i'},mainAudio:'audio/pronunciation_tr_e.mp3',exampleWord:'ev',exampleAudio:'audio/pronunciation_tr_ev.mp3',contrast:'i',contrastAudio:'audio/pronunciation_tr_i.mp3',explanationKey:'e_i_contrast'},
  {id:'alpha_i_dotless',letter:'ı',target:{en:'Dotless Turkish ı',id:'huruf ı Turki tanpa titik'},mainAudio:'audio/pronunciation_tr_i_noktasiz.mp3',exampleWord:'altı',exampleAudio:'audio/pronunciation_tr_alti.mp3',contrast:'i',contrastAudio:'audio/pronunciation_tr_i.mp3',explanationKey:'i_ı_contrast'},
  {id:'alpha_i',letter:'i',target:{en:'Dotted Turkish i',id:'huruf i Turki bertitik'},mainAudio:'audio/pronunciation_tr_i.mp3',exampleWord:'iki',exampleAudio:'audio/pronunciation_tr_iki.mp3',contrast:'ı',contrastAudio:'audio/pronunciation_tr_i_noktasiz.mp3',explanationKey:'i_ı_contrast'},
  {id:'alpha_o',letter:'o',target:{en:'Turkish o sound',id:'bunyi o Turki'},mainAudio:'audio/pronunciation_tr_o.mp3',exampleWord:'on',exampleAudio:'audio/pronunciation_tr_on.mp3',contrast:'ö',contrastAudio:'audio/pronunciation_tr_o_noktali.mp3',explanationKey:'o_ö_contrast'},
  {id:'alpha_o_noktali',letter:'ö',target:{en:'Turkish ö sound',id:'bunyi ö Turki'},mainAudio:'audio/pronunciation_tr_o_noktali.mp3',exampleWord:'öğretmen',exampleAudio:'audio/pronunciation_tr_ogretmen.mp3',contrast:'o',contrastAudio:'audio/pronunciation_tr_o.mp3',explanationKey:'o_ö_contrast'},
  {id:'alpha_u',letter:'u',target:{en:'Turkish u sound',id:'bunyi u Turki'},mainAudio:'audio/pronunciation_tr_u.mp3',exampleWord:'su',exampleAudio:'audio/pronunciation_tr_su.mp3',contrast:'ü',contrastAudio:'audio/pronunciation_tr_u_noktali.mp3',explanationKey:'u_ü_contrast'},
  {id:'alpha_u_noktali',letter:'ü',target:{en:'Turkish ü sound',id:'bunyi ü Turki'},mainAudio:'audio/pronunciation_tr_u_noktali.mp3',exampleWord:'üzgünüm',exampleAudio:'audio/pronunciation_tr_uzgunum.mp3',contrast:'u',contrastAudio:'audio/pronunciation_tr_u.mp3',explanationKey:'u_ü_contrast'},
  {id:'alpha_c',letter:'c',target:{en:'Turkish c; not English c / Indonesian c',id:'huruf c Turki; bukan c Indonesia'},mainAudio:'audio/pronunciation_tr_c.mp3',exampleWord:'c',exampleAudio:'audio/pronunciation_tr_c.mp3',contrast:'ç',contrastAudio:'audio/pronunciation_tr_cok.mp3',explanationKey:'c_ç_contrast'},
  {id:'alpha_c_cedilla',letter:'ç',target:{en:'Turkish ç sound',id:'bunyi ç Turki'},mainAudio:'audio/pronunciation_tr_cok.mp3',exampleWord:'ağaç',exampleAudio:'audio/pronunciation_tr_agac.mp3',contrast:'ş',contrastAudio:'audio/pronunciation_tr_sh.mp3',explanationKey:'ş_ç_contrast'},
  {id:'alpha_sh',letter:'ş',target:{en:'Turkish ş sound',id:'bunyi ş Turki'},mainAudio:'audio/pronunciation_tr_sh.mp3',exampleWord:'şeker',exampleAudio:'audio/pronunciation_tr_seker.mp3',contrast:'ç',contrastAudio:'audio/pronunciation_tr_cok.mp3',explanationKey:'ş_ç_contrast'},
  {id:'alpha_soft_g',letter:'ğ',target:{en:'Safe learner explanation of ğ',id:'penjelasan aman untuk huruf ğ'},mainAudio:null,noIsolatedAudio:true,exampleWord:'dağ',exampleAudio:'audio/pronunciation_tr_dag.mp3',extraExamples:[{word:'ağaç',audio:'audio/pronunciation_tr_agac.mp3'},{word:'soğuk',audio:'audio/pronunciation_tr_soguk.mp3'}],contrast:'g',contrastAudio:'audio/pronunciation_tr_gel.mp3',explanationKey:'safe_ğ_explanation'}
];

export const ROOT_WORDS = [
  {id:'root_ev',word:'ev',meaning:{en:'house',id:'rumah'},audio:'audio/pronunciation_tr_ev.mp3',image:'images/ev.png',fallback:'🏠'},
  {id:'root_okul',word:'okul',meaning:{en:'school',id:'sekolah'},audio:'audio/pronunciation_tr_okul.mp3',image:'images/okul.png',fallback:'🏫'},
  {id:'root_kitap',word:'kitap',meaning:{en:'book',id:'buku'},audio:'audio/pronunciation_tr_kitap.mp3',image:'images/kitap.png',fallback:'📘'},
  {id:'root_elma',word:'elma',meaning:{en:'apple',id:'apel'},audio:'audio/pronunciation_tr_elma.mp3',image:'images/elma.png',fallback:'🍎'},
  {id:'root_kopek',word:'köpek',meaning:{en:'dog',id:'anjing'},audio:'audio/pronunciation_tr_kopek.mp3',image:'images/kopek.png',fallback:'🐶'},
  {id:'root_goz',word:'göz',meaning:{en:'eye',id:'mata'},audio:'audio/pronunciation_tr_goz.mp3',image:'images/goz.png',fallback:'👁️'},
  {id:'root_masa',word:'masa',meaning:{en:'table',id:'meja'},audio:'audio/pronunciation_tr_masa.mp3',image:'images/masa.png',fallback:'TABLE'},
  {id:'root_araba',word:'araba',meaning:{en:'car',id:'mobil'},audio:'audio/pronunciation_tr_araba.mp3',image:'images/araba.png',fallback:'🚗'},
  {id:'root_su',word:'su',meaning:{en:'water',id:'air'},audio:'audio/pronunciation_tr_su.mp3',image:'images/su.png',fallback:'💧'},
  {id:'root_kalem',word:'kalem',meaning:{en:'pencil',id:'pensil'},audio:'audio/pronunciation_tr_kalem.mp3',image:'images/kalem.png',fallback:'✏️'}
];

export const MEANING_BUILDER = [
  {id:'meaning_evim',prompt:{en:'my house',id:'rumah saya'},answerParts:['ev','im'],options:['ev','im','de','in'],finalWord:'evim',audio:'audio/pronunciation_tr_evim.mp3',image:'images/ev.png',revealAfterCorrect:'ev + im = evim',explanationKey:'possessive_suffix_basic'},
  {id:'meaning_evde',prompt:{en:'at / in the house',id:'di rumah'},answerParts:['ev','de'],options:['ev','de','im','da'],finalWord:'evde',audio:'audio/pronunciation_tr_evde.mp3',image:'images/ev.png',revealAfterCorrect:'ev + de = evde',explanationKey:'locative_suffix_basic'},
  {id:'meaning_evimde',prompt:{en:'in my house',id:'di rumah saya'},answerParts:['ev','im','de'],options:['ev','im','de','in','da'],finalWord:'evimde',audio:'audio/pronunciation_tr_evimde.mp3',image:'images/ev.png',revealAfterCorrect:'ev + im + de = evimde',explanationKey:'safe_builder_order'},
  {id:'meaning_arabam',prompt:{en:'my car',id:'mobil saya'},answerParts:['araba','m'],options:['araba','m','da','im'],finalWord:'arabam',audio:'audio/pronunciation_tr_arabam.mp3',image:'images/araba.png',revealAfterCorrect:'araba + m = arabam',explanationKey:'possessive_after_vowel'},
  {id:'meaning_masamda',prompt:{en:'on / at my table',id:'di meja saya'},answerParts:['masa','m','da'],options:['masa','m','da','im','de'],finalWord:'masamda',audio:'audio/pronunciation_tr_masamda.mp3',image:'images/masa.png',revealAfterCorrect:'masa + m + da = masamda',explanationKey:'safe_builder_order'},
  {id:'meaning_kalemimde',prompt:{en:'in / on my pencil',id:'di pensil saya'},answerParts:['kalem','im','de'],options:['kalem','im','de','da','m'],finalWord:'kalemimde',audio:'audio/pronunciation_tr_kalemimde.mp3',image:'images/kalem.png',revealAfterCorrect:'kalem + im + de = kalemimde',explanationKey:'safe_builder_order'},
  {id:'meaning_parkta',prompt:{en:'at / in the park',id:'di taman'},answerParts:['park','ta'],options:['park','ta','da','de'],finalWord:'parkta',audio:'audio/pronunciation_tr_parkta.mp3',image:null,revealAfterCorrect:'park + ta = parkta',explanationKey:'locative_suffix_basic'},
  {id:'meaning_elimde',prompt:{en:'in my hand',id:'di tangan saya'},answerParts:['el','im','de'],options:['el','im','de','da','in'],finalWord:'elimde',audio:'audio/pronunciation_tr_elimde.mp3',image:null,revealAfterCorrect:'el + im + de = elimde',explanationKey:'safe_builder_order'},
  {id:'meaning_gozumde',prompt:{en:'in my eye',id:'di mata saya'},answerParts:['göz','üm','de'],options:['göz','üm','de','im','da'],finalWord:'gözümde',audio:'audio/pronunciation_tr_gozumde.mp3',image:'images/goz.png',revealAfterCorrect:'göz + üm + de = gözümde',explanationKey:'vowel_harmony_suffix_shape'},
  {id:'meaning_kitabimda',prompt:{en:'in my book',id:'di buku saya'},answerParts:['kitap','ım','da'],options:['kitap','ım','da','im','ta'],finalWord:'kitabımda',audio:'audio/pronunciation_tr_kitabimda.mp3',image:'images/kitap.png',revealAfterCorrect:'kitap + ım + da → kitabımda',explanationKey:'consonant_softening_p_b'}
];

export const PLURAL_BUILDER = [
  {id:'plural_evler',prompt:{en:'houses',id:'rumah-rumah'},answerParts:['ev','ler'],options:['ev','ler','lar'],finalWord:'evler',audio:'audio/pronunciation_tr_evler.mp3',image:'images/ev.png',revealAfterCorrect:'ev + ler = evler',explanationKey:'plural_basic'},
  {id:'plural_kitaplar',prompt:{en:'books',id:'buku-buku'},answerParts:['kitap','lar'],options:['kitap','lar','ler'],finalWord:'kitaplar',audio:'audio/pronunciation_tr_kitaplar.mp3',image:'images/kitap.png',revealAfterCorrect:'kitap + lar = kitaplar',explanationKey:'plural_basic'},
  {id:'plural_kopekler',prompt:{en:'dogs',id:'anjing-anjing'},answerParts:['köpek','ler'],options:['köpek','ler','lar'],finalWord:'köpekler',audio:'audio/pronunciation_tr_kopekler.mp3',image:'images/kopek.png',revealAfterCorrect:'köpek + ler = köpekler',explanationKey:'plural_basic'},
  {id:'plural_okullar',prompt:{en:'schools',id:'sekolah-sekolah'},answerParts:['okul','lar'],options:['okul','lar','ler'],finalWord:'okullar',audio:'audio/pronunciation_tr_okullar.mp3',image:'images/okul.png',revealAfterCorrect:'okul + lar = okullar',explanationKey:'plural_basic'},
  {id:'plural_arabalar',prompt:{en:'cars',id:'mobil-mobil'},answerParts:['araba','lar'],options:['araba','lar','ler'],finalWord:'arabalar',audio:'audio/pronunciation_tr_arabalar.mp3',image:'images/araba.png',revealAfterCorrect:'araba + lar = arabalar',explanationKey:'plural_basic'}
];

export const ACCUSATIVE_BUILDER = [
  {id:'acc_elmayi',prompt:{en:'the apple',id:'apel itu'},answerParts:['elma','yı'],options:['elma','yı','yi','ı'],finalWord:'elmayı',audio:'audio/pronunciation_tr_elmayi.mp3',image:'images/elma.png',revealAfterCorrect:'elma + yı = elmayı',explanationKey:'y_glide_accusative'},
  {id:'acc_gazeteyi',prompt:{en:'the newspaper',id:'koran itu'},answerParts:['gazete','yi'],options:['gazete','yi','yı','i'],finalWord:'gazeteyi',audio:'audio/pronunciation_tr_gazeteyi.mp3',image:null,revealAfterCorrect:'gazete + yi = gazeteyi',explanationKey:'y_glide_accusative'},
  {id:'acc_kitabi',prompt:{en:'the book',id:'buku itu'},answerParts:['kitap','ı'],options:['kitap','ı','i','yı'],finalWord:'kitabı',audio:'audio/pronunciation_tr_kitabi.mp3',image:'images/kitap.png',revealAfterCorrect:'kitap + ı → kitabı',explanationKey:'consonant_softening_p_b'},
  {id:'acc_kopegi',prompt:{en:'the dog',id:'anjing itu'},answerParts:['köpek','i'],options:['köpek','i','ı','yi'],finalWord:'köpeği',audio:'audio/pronunciation_tr_kopegi.mp3',image:'images/kopek.png',revealAfterCorrect:'köpek + i → köpeği',explanationKey:'consonant_softening_k_ğ'},
  {id:'acc_arabayi',prompt:{en:'the car',id:'mobil itu'},answerParts:['araba','yı'],options:['araba','yı','yi','ı'],finalWord:'arabayı',audio:'audio/pronunciation_tr_arabayi.mp3',image:'images/araba.png',revealAfterCorrect:'araba + yı = arabayı',explanationKey:'y_glide_accusative'}
];

export const EXPLANATIONS = {
  a_sound:{
    main:{en:'Turkish a is a clear, open a sound.',id:'Huruf a Turki adalah bunyi a yang jelas dan terbuka.'},
    hear:{en:'Hear it in araba. Keep the sound clean and open.',id:'Dengarkan dalam kata araba. Bunyi tetap jelas dan terbuka.'},
    mouth:{en:'Open the mouth naturally. Do not turn it into English “ey”.',id:'Buka mulut secara alami. Jangan ubah menjadi bunyi seperti “ey”.'},
    mistake:{en:'Do not read araba like “areyba”.',id:'Jangan membaca araba seperti “areyba”.'},
    practice:{en:['Listen to the main sound.','Listen to araba.','Say a — araba slowly.'],id:['Dengarkan bunyi utama.','Dengarkan araba.','Ucapkan a — araba perlahan.']}
  },
  e_i_contrast:{
    main:{en:'Turkish e and i are separate sounds.',id:'Huruf e dan i dalam bahasa Turki adalah bunyi yang berbeda.'},
    hear:{en:'e is the sound in ev. i is the sound in iki. ev must not become iv.',id:'e adalah bunyi dalam ev. i adalah bunyi dalam iki. ev tidak boleh menjadi iv.'},
    mouth:{en:'For e, the mouth is slightly open and relaxed. For i, the lips stretch more and the sound is higher.',id:'Untuk e, mulut sedikit terbuka dan rileks. Untuk i, bibir lebih melebar dan bunyinya lebih tinggi.'},
    mistake:{en:'Common mistake: reading ev as if it starts with i.',id:'Kesalahan umum: membaca ev seolah-olah dimulai dengan i.'},
    practice:{en:['Play Main sound: e.','Play Example word: ev.','Play Contrast sound: i.','Repeat: e — ev, then i — iki.'],id:['Putar Bunyi utama: e.','Putar Contoh kata: ev.','Putar Bunyi pembanding: i.','Ulangi: e — ev, lalu i — iki.']}
  },
  i_ı_contrast:{
    main:{en:'Dotted i and dotless ı are two different Turkish vowels.',id:'i bertitik dan ı tanpa titik adalah dua vokal Turki yang berbeda.'},
    hear:{en:'i is heard in iki. ı is heard in altı. Do not replace ı with i.',id:'i terdengar dalam iki. ı terdengar dalam altı. Jangan mengganti ı dengan i.'},
    mouth:{en:'i is higher and brighter. ı is deeper and more central.',id:'i lebih tinggi dan terang. ı lebih dalam dan berada di tengah.'},
    mistake:{en:'Common mistake: reading altı like alti.',id:'Kesalahan umum: membaca altı seperti alti.'},
    practice:{en:['Listen to ı.','Listen to altı.','Compare with i and iki.'],id:['Dengarkan ı.','Dengarkan altı.','Bandingkan dengan i dan iki.']}
  },
  o_ö_contrast:{
    main:{en:'Turkish o and ö are separate vowels.',id:'o dan ö adalah vokal Turki yang berbeda.'},
    hear:{en:'o is in on. ö is in öğretmen. Do not read ö as o.',id:'o ada dalam on. ö ada dalam öğretmen. Jangan membaca ö sebagai o.'},
    mouth:{en:'For ö, keep the lips rounded but move the tongue forward.',id:'Untuk ö, bibir tetap membulat tetapi lidah lebih ke depan.'},
    mistake:{en:'Common mistake: reading öğretmen as ogretmen with plain o.',id:'Kesalahan umum: membaca öğretmen dengan o biasa.'},
    practice:{en:['Listen to o.','Listen to ö.','Compare: on — öğretmen.'],id:['Dengarkan o.','Dengarkan ö.','Bandingkan: on — öğretmen.']}
  },
  u_ü_contrast:{
    main:{en:'Turkish u and ü are separate vowels.',id:'u dan ü adalah vokal Turki yang berbeda.'},
    hear:{en:'u is in su. ü is in üzgünüm. Do not read ü as u.',id:'u ada dalam su. ü ada dalam üzgünüm. Jangan membaca ü sebagai u.'},
    mouth:{en:'For ü, keep the lips rounded but the tongue is forward.',id:'Untuk ü, bibir membulat tetapi lidah maju.'},
    mistake:{en:'Common mistake: reading üzgünüm with plain u sounds.',id:'Kesalahan umum: membaca üzgünüm dengan bunyi u biasa.'},
    practice:{en:['Listen to u.','Listen to ü.','Say su, then üzgünüm slowly.'],id:['Dengarkan u.','Dengarkan ü.','Ucapkan su, lalu üzgünüm perlahan.']}
  },
  c_ç_contrast:{
    main:{en:'Turkish c and ç are different letters.',id:'c dan ç adalah huruf Turki yang berbeda.'},
    hear:{en:'Turkish ç is like the sound in çok. Turkish c is different from Indonesian c.',id:'ç Turki seperti bunyi dalam çok. c Turki berbeda dari c Indonesia.'},
    mouth:{en:'First listen. Do not guess from English or Indonesian spelling.',id:'Dengarkan dulu. Jangan menebak dari ejaan Inggris atau Indonesia.'},
    mistake:{en:'Common mistake: treating Turkish c and ç as the same sound.',id:'Kesalahan umum: menganggap c Turki dan ç sama.'},
    practice:{en:['Listen to c.','Listen to ç in çok.','Repeat both slowly.'],id:['Dengarkan c.','Dengarkan ç dalam çok.','Ulangi keduanya perlahan.']}
  },
  ş_ç_contrast:{
    main:{en:'Turkish ş and ç are different sounds.',id:'ş dan ç adalah bunyi yang berbeda.'},
    hear:{en:'ş is in şeker. ç is in çok / ağaç.',id:'ş ada dalam şeker. ç ada dalam çok / ağaç.'},
    mouth:{en:'ş is a soft sh-like sound. ç is a sharper ch-like sound.',id:'ş mirip bunyi sh yang lembut. ç lebih tajam seperti ch.'},
    mistake:{en:'Common mistake: replacing ş with ç or ç with ş.',id:'Kesalahan umum: menukar ş dengan ç atau ç dengan ş.'},
    practice:{en:['Listen to ş.','Listen to ç.','Repeat: şeker — ağaç.'],id:['Dengarkan ş.','Dengarkan ç.','Ulangi: şeker — ağaç.']}
  },
  safe_ğ_explanation:{
    main:{en:'ğ is not a hard g and it does not begin Turkish words.',id:'ğ bukan g keras dan tidak muncul di awal kata Turki.'},
    hear:{en:'Learn ğ only inside real words: dağ, ağaç, soğuk.',id:'Pelajari ğ hanya di dalam kata nyata: dağ, ağaç, soğuk.'},
    mouth:{en:'Do not force a hard g sound. Listen to how the word flows.',id:'Jangan memaksa bunyi g keras. Dengarkan aliran katanya.'},
    mistake:{en:'Common mistake: pronouncing dağ with a strong final g.',id:'Kesalahan umum: mengucapkan dağ dengan g keras di akhir.'},
    practice:{en:['Listen to dağ.','Listen to ağaç.','Listen to soğuk.','Do not practice isolated ğ.'],id:['Dengarkan dağ.','Dengarkan ağaç.','Dengarkan soğuk.','Jangan berlatih ğ sendirian.']}
  },
  possessive_suffix_basic:{main:{en:'Turkish can add “my” by attaching a suffix after the word.',id:'Bahasa Turki dapat menambahkan arti “milik saya” dengan akhiran setelah kata.'}},
  possessive_after_vowel:{main:{en:'After a word ending in a vowel, the possessive block can be shorter.',id:'Setelah kata yang berakhir dengan vokal, blok kepemilikan bisa lebih pendek.'}},
  locative_suffix_basic:{main:{en:'The place suffix means in, on, or at. Choose the root first, then the place suffix.',id:'Akhiran tempat berarti di, pada, atau dalam. Pilih kata dasar dulu, lalu akhiran tempat.'}},
  safe_builder_order:{main:{en:'Build from left to right: root first, then meaning blocks. The final answer appears only after you solve it.',id:'Susun dari kiri ke kanan: kata dasar dulu, lalu blok makna. Jawaban akhir muncul hanya setelah kamu menyelesaikannya.'}},
  vowel_harmony_suffix_shape:{main:{en:'Suffixes can change sound to match the word. Choose the suffix that sounds right with the root.',id:'Akhiran dapat berubah bunyi agar cocok dengan kata. Pilih akhiran yang cocok dengan kata dasar.'}},
  consonant_softening_p_b:{main:{en:'Some final sounds soften before a vowel suffix, such as kitap becoming kitabı.',id:'Beberapa bunyi akhir melembut sebelum akhiran vokal, misalnya kitap menjadi kitabı.'}},
  consonant_softening_k_ğ:{main:{en:'Some final k sounds soften before a vowel suffix, such as köpek becoming köpeği.',id:'Beberapa bunyi akhir k melembut sebelum akhiran vokal, misalnya köpek menjadi köpeği.'}},
  y_glide_accusative:{main:{en:'When a word ends with a vowel, Turkish may add y before the object suffix.',id:'Jika kata berakhir dengan vokal, bahasa Turki dapat menambahkan y sebelum akhiran objek.'}},
  plural_basic:{main:{en:'Turkish uses -lar or -ler for plural words. Choose by the sound of the root word.',id:'Bahasa Turki memakai -lar atau -ler untuk bentuk jamak. Pilih sesuai bunyi kata dasar.'}}
};

export function datasetFor(topicId){
  if(topicId==='alphabet') return ALPHABET_PRO;
  if(topicId==='root_words') return ROOT_WORDS;
  if(topicId==='meaning_builder') return MEANING_BUILDER;
  if(topicId==='plural_builder') return PLURAL_BUILDER;
  if(topicId==='accusative_builder') return ACCUSATIVE_BUILDER;
  return [];
}
export function topicById(id){ return TOPICS.find(t=>t.id===id) || null; }
export function allLessonItems(){ return TOPICS.flatMap(topic => datasetFor(topic.id).map(item => ({...item, topicId:topic.id, topicType:topic.type}))); }
