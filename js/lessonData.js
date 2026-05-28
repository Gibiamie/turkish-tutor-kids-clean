export const TOPICS = [
  { id:'alphabet', type:'alphabet', title:{en:'Alphabet Pro', id:'Alfabet Turki'}, sub:{en:'Sounds and contrasts', id:'Bunyi dan perbandingan'} },
  { id:'root_words', type:'root', title:{en:'Root Words', id:'Kata Dasar'}, sub:{en:'Concrete starter words', id:'Kata awal yang nyata'} },
  { id:'meaning_builder', type:'builder', title:{en:'Meaning Builder', id:'Penyusun Makna'}, sub:{en:'Root + meaning blocks', id:'Kata dasar + blok makna'} },
  { id:'plural_builder', type:'builder', title:{en:'More Than One Builder', id:'Pembuat Lebih Dari Satu'}, sub:{en:'ev → evler, kitap → kitaplar', id:'ev → evler, kitap → kitaplar'} },
  { id:'accusative_builder', type:'builder', title:{en:'Object Builder', id:'Pembuat Objek'}, sub:{en:'Build the object form', id:'Susun bentuk objek'} }
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
  {id:'meaning_gozumde',prompt:{en:'in my eye',id:'di mata saya'},answerParts:['göz','üm','de'],options:['göz','üm','de','im','da'],finalWord:'gözümde',audio:'audio/pronunciation_tr_gozumde.mp3',image:'images/goz.png',revealAfterCorrect:'göz + üm + de = gözümde',explanationKey:'safe_sound_match'},
  {id:'meaning_kitabimda',prompt:{en:'in my book',id:'di buku saya'},answerParts:['kitab','ım','da'],options:['kitab','ım','da','im','ta'],finalWord:'kitabımda',audio:'audio/pronunciation_tr_kitabimda.mp3',image:'images/kitap.png',revealAfterCorrect:'kitap changes to kitab here: kitab + ım + da = kitabımda',explanationKey:'softened_book_builder'}
];

export const PLURAL_BUILDER = [
  {id:'plural_evler',prompt:{en:'houses',id:'rumah-rumah'},answerParts:['ev','ler'],options:['ev','ler','lar'],finalWord:'evler',audio:'audio/pronunciation_tr_evler.mp3',image:'images/ev.png',revealAfterCorrect:'One house is ev. More than one is evler.',explanationKey:'plural_evler_story'},
  {id:'plural_kitaplar',prompt:{en:'books',id:'buku-buku'},answerParts:['kitap','lar'],options:['kitap','lar','ler'],finalWord:'kitaplar',audio:'audio/pronunciation_tr_kitaplar.mp3',image:'images/kitap.png',revealAfterCorrect:'One book is kitap. More than one is kitaplar.',explanationKey:'plural_kitaplar_story'},
  {id:'plural_kopekler',prompt:{en:'dogs',id:'anjing-anjing'},answerParts:['köpek','ler'],options:['köpek','ler','lar'],finalWord:'köpekler',audio:'audio/pronunciation_tr_kopekler.mp3',image:'images/kopek.png',revealAfterCorrect:'One dog is köpek. More than one is köpekler.',explanationKey:'plural_kopekler_story'},
  {id:'plural_okullar',prompt:{en:'schools',id:'sekolah-sekolah'},answerParts:['okul','lar'],options:['okul','lar','ler'],finalWord:'okullar',audio:'audio/pronunciation_tr_okullar.mp3',image:'images/okul.png',revealAfterCorrect:'One school is okul. More than one is okullar.',explanationKey:'plural_okullar_story'},
  {id:'plural_arabalar',prompt:{en:'cars',id:'mobil-mobil'},answerParts:['araba','lar'],options:['araba','lar','ler'],finalWord:'arabalar',audio:'audio/pronunciation_tr_arabalar.mp3',image:'images/araba.png',revealAfterCorrect:'One car is araba. More than one is arabalar.',explanationKey:'plural_arabalar_story'}
];

export const ACCUSATIVE_BUILDER = [
  {id:'acc_elmayi',prompt:{en:'the apple',id:'apel itu'},answerParts:['elma','yı'],options:['elma','yı','yi','ı'],finalWord:'elmayı',audio:'audio/pronunciation_tr_elmayi.mp3',image:'images/elma.png',revealAfterCorrect:'elma + yı = elmayı',explanationKey:'y_glide_accusative'},
  {id:'acc_gazeteyi',prompt:{en:'the newspaper',id:'koran itu'},answerParts:['gazete','yi'],options:['gazete','yi','yı','i'],finalWord:'gazeteyi',audio:'audio/pronunciation_tr_gazeteyi.mp3',image:null,revealAfterCorrect:'gazete + yi = gazeteyi',explanationKey:'y_glide_accusative'},
  {id:'acc_kitabi',prompt:{en:'the book',id:'buku itu'},answerParts:['kitab','ı'],options:['kitab','ı','i','yı'],finalWord:'kitabı',audio:'audio/pronunciation_tr_kitabi.mp3',image:'images/kitap.png',revealAfterCorrect:'kitap changes to kitab here: kitab + ı = kitabı',explanationKey:'softened_book_builder'},
  {id:'acc_kopegi',prompt:{en:'the dog',id:'anjing itu'},answerParts:['köpeğ','i'],options:['köpeğ','i','ı','yi'],finalWord:'köpeği',audio:'audio/pronunciation_tr_kopegi.mp3',image:'images/kopek.png',revealAfterCorrect:'köpek changes to köpeğ here: köpeğ + i = köpeği',explanationKey:'softened_k_builder'},
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
  possessive_suffix_basic:{main:{en:'Turkish can add “my” by attaching a meaning block after the word.',id:'Bahasa Turki dapat menambahkan arti “milik saya” dengan blok makna setelah kata.'}},
  possessive_after_vowel:{main:{en:'After a word ending in a vowel, the “my” block can be shorter.',id:'Setelah kata yang berakhir dengan vokal, blok “milik saya” bisa lebih pendek.'}},
  locative_suffix_basic:{main:{en:'This place block means in, on, or at. Choose the word first, then the place block.',id:'Blok tempat ini berarti di, pada, atau dalam. Pilih kata dulu, lalu blok tempat.'}},
  safe_builder_order:{main:{en:'Build from left to right: word first, then meaning blocks. The final answer appears only after you solve it.',id:'Susun dari kiri ke kanan: kata dulu, lalu blok makna. Jawaban akhir muncul hanya setelah kamu menyelesaikannya.'}},
  safe_sound_match:{main:{en:'Some blocks change sound to fit the word. Trust the sound and choose the block that matches.',id:'Beberapa blok berubah bunyi agar cocok dengan kata. Dengarkan bunyinya dan pilih blok yang cocok.'}},
  softened_book_builder:{
    main:{en:'Here, kitap is shown as kitab before the next block. Build the spoken/written result as kitabımda.',id:'Di sini, kitap ditampilkan sebagai kitab sebelum blok berikutnya. Susun hasilnya menjadi kitabımda.'},
    hear:{en:'Listen for the softer ending: kitap → kitabı, kitabımda.',id:'Dengarkan bunyi akhirnya yang melembut: kitap → kitabı, kitabımda.'},
    mistake:{en:'Do not build kitapımda. Use kitab + ım + da.',id:'Jangan susun kitapımda. Gunakan kitab + ım + da.'},
    practice:{en:['Look at kitap.','When the next block starts with a vowel sound, use kitab.','Build: kitab + ım + da.'],id:['Lihat kitap.','Saat blok berikutnya mulai dengan bunyi vokal, gunakan kitab.','Susun: kitab + ım + da.']}
  },
  softened_k_builder:{
    main:{en:'Here, köpek is shown as köpeğ before the next block. Build the spoken/written result as köpeği.',id:'Di sini, köpek ditampilkan sebagai köpeğ sebelum blok berikutnya. Susun hasilnya menjadi köpeği.'},
    hear:{en:'Listen for the soft flow: köpek → köpeği.',id:'Dengarkan aliran bunyinya: köpek → köpeği.'},
    mistake:{en:'Do not build köpeki. Use köpeğ + i.',id:'Jangan susun köpeki. Gunakan köpeğ + i.'},
    practice:{en:['Look at köpek.','When the next block starts with i, use köpeğ.','Build: köpeğ + i.'],id:['Lihat köpek.','Saat blok berikutnya mulai dengan i, gunakan köpeğ.','Susun: köpeğ + i.']}
  },
  y_glide_accusative:{main:{en:'When a word ends with a vowel, Turkish may add y before the next sound.',id:'Jika kata berakhir dengan vokal, bahasa Turki dapat menambahkan y sebelum bunyi berikutnya.'}},
  plural_evler_story:{
    main:{en:'One house is ev. When there is more than one, Turkish says evler. Build ev + ler.',id:'Satu rumah adalah ev. Jika lebih dari satu, bahasa Turki mengatakan evler. Susun ev + ler.'},
    hear:{en:'Listen: ev, evler. The small block is ler.',id:'Dengarkan: ev, evler. Blok kecilnya ler.'},
    mistake:{en:'Do not choose lar here. evler sounds natural.',id:'Jangan pilih lar di sini. evler terdengar alami.'},
    practice:{en:['Say ev.','Now imagine many houses.','Tap ev + ler.'],id:['Ucapkan ev.','Sekarang bayangkan banyak rumah.','Ketuk ev + ler.']}
  },
  plural_kitaplar_story:{
    main:{en:'One book is kitap. When there is more than one, Turkish says kitaplar. Build kitap + lar.',id:'Satu buku adalah kitap. Jika lebih dari satu, bahasa Turki mengatakan kitaplar. Susun kitap + lar.'},
    hear:{en:'Listen: kitap, kitaplar. The small block is lar.',id:'Dengarkan: kitap, kitaplar. Blok kecilnya lar.'},
    mistake:{en:'Do not choose ler here. kitaplar sounds natural.',id:'Jangan pilih ler di sini. kitaplar terdengar alami.'},
    practice:{en:['Say kitap.','Now imagine many books.','Tap kitap + lar.'],id:['Ucapkan kitap.','Sekarang bayangkan banyak buku.','Ketuk kitap + lar.']}
  },
  plural_kopekler_story:{
    main:{en:'One dog is köpek. When there is more than one, Turkish says köpekler. Build köpek + ler.',id:'Satu anjing adalah köpek. Jika lebih dari satu, bahasa Turki mengatakan köpekler. Susun köpek + ler.'},
    hear:{en:'Listen: köpek, köpekler. The small block is ler.',id:'Dengarkan: köpek, köpekler. Blok kecilnya ler.'},
    mistake:{en:'Do not choose lar here. köpekler sounds natural.',id:'Jangan pilih lar di sini. köpekler terdengar alami.'},
    practice:{en:['Say köpek.','Now imagine many dogs.','Tap köpek + ler.'],id:['Ucapkan köpek.','Sekarang bayangkan banyak anjing.','Ketuk köpek + ler.']}
  },
  plural_okullar_story:{
    main:{en:'One school is okul. When there is more than one, Turkish says okullar. Build okul + lar.',id:'Satu sekolah adalah okul. Jika lebih dari satu, bahasa Turki mengatakan okullar. Susun okul + lar.'},
    hear:{en:'Listen: okul, okullar. The small block is lar.',id:'Dengarkan: okul, okullar. Blok kecilnya lar.'},
    mistake:{en:'Do not choose ler here. okullar sounds natural.',id:'Jangan pilih ler di sini. okullar terdengar alami.'},
    practice:{en:['Say okul.','Now imagine many schools.','Tap okul + lar.'],id:['Ucapkan okul.','Sekarang bayangkan banyak sekolah.','Ketuk okul + lar.']}
  },
  plural_arabalar_story:{
    main:{en:'One car is araba. When there is more than one, Turkish says arabalar. Build araba + lar.',id:'Satu mobil adalah araba. Jika lebih dari satu, bahasa Turki mengatakan arabalar. Susun araba + lar.'},
    hear:{en:'Listen: araba, arabalar. The small block is lar.',id:'Dengarkan: araba, arabalar. Blok kecilnya lar.'},
    mistake:{en:'Do not choose ler here. arabalar sounds natural.',id:'Jangan pilih ler di sini. arabalar terdengar alami.'},
    practice:{en:['Say araba.','Now imagine many cars.','Tap araba + lar.'],id:['Ucapkan araba.','Sekarang bayangkan banyak mobil.','Ketuk araba + lar.']}
  },
  plural_basic:{main:{en:'For more than one, Turkish adds a small block after the word. Listen and choose the block that sounds natural.',id:'Untuk lebih dari satu, bahasa Turki menambahkan blok kecil setelah kata. Dengarkan dan pilih blok yang terdengar alami.'}}
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