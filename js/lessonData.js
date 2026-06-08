export const TOPICS = [
  { id:'alphabet', type:'alphabet', title:{en:'Alphabet Pro', id:'Alfabet Turki'}, sub:{en:'Sounds and contrasts', id:'Bunyi dan perbandingan'} },
  { id:'root_words', type:'root', title:{en:'Root Words', id:'Kata Dasar'}, sub:{en:'Concrete starter words', id:'Kata awal yang nyata'} },
  { id:'meaning_builder', type:'builder', title:{en:'Meaning Builder', id:'Penyusun Makna'}, sub:{en:'Root + meaning blocks', id:'Kata dasar + blok makna'} },
  { id:'whose_builder', type:'builder', title:{en:'Whose? Builder', id:'Punya Siapa? Builder'}, sub:{en:'my, your, his/her, our, their', id:'punya saya, kamu, dia, kita, mereka'} },
  { id:'plural_builder', type:'builder', title:{en:'More Than One Builder', id:'Pembuat Lebih Dari Satu'}, sub:{en:'ev → evler, kitap → kitaplar', id:'ev → evler, kitap → kitaplar'} },
  { id:'accusative_builder', type:'builder', title:{en:'Object Builder', id:'Pembuat Objek'}, sub:{en:'Build the object form', id:'Susun bentuk objek'} },
  { id:'dative_builder', type:'builder', title:{en:'To Where? Builder', id:'Ke Mana? Builder'}, sub:{en:'eve, okula — the “to” form', id:'eve, okula — bentuk “ke”'} },
  { id:'combo_builder', type:'builder', title:{en:'Suffix Stack Builder', id:'Susun Banyak Imbuhan'}, sub:{en:'evler + imiz + de = evlerimizde', id:'evler + imiz + de = evlerimizde'} },
  { id:'greetings', type:'vocab', title:{en:'Greetings', id:'Salam'}, sub:{en:'merhaba, günaydın, teşekkürler', id:'merhaba, günaydın, teşekkürler'} },
  { id:'colors', type:'vocab', title:{en:'Colors', id:'Warna'}, sub:{en:'kırmızı, mavi, sarı…', id:'kırmızı, mavi, sarı…'} },
  { id:'family', type:'vocab', title:{en:'Family', id:'Keluarga'}, sub:{en:'anne, baba, çocuk…', id:'anne, baba, çocuk…'} },
  { id:'deconstruct', type:'deconstruct', title:{en:'What Does It Mean?', id:'Apa Artinya?'}, sub:{en:'Turkish word → meaning', id:'kata Turki → arti'} },
  { id:'review', type:'review', title:{en:'Mixed Review', id:'Ulang Campur'}, sub:{en:'Practice everything · no score', id:'Latih semua · tanpa skor'} }
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
  {id:'alpha_c',letter:'c',target:{en:'Turkish c; not English c / Indonesian c',id:'huruf c Turki; bukan c Indonesia'},mainAudio:'audio/pronunciation_tr_c.mp3',exampleWord:'cam',exampleAudio:'audio/pronunciation_tr_cam.mp3',contrast:'ç',contrastAudio:'audio/pronunciation_tr_cok.mp3',explanationKey:'c_ç_contrast'},
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
  {id:'meaning_kitabimda',prompt:{en:'in my book',id:'di buku saya'},answerParts:['kitab','ım','da'],options:['kitab','ım','da','im','ta'],finalWord:'kitabımda',audio:'audio/pronunciation_tr_kitabimda.mp3',image:'images/kitap.png',revealAfterCorrect:'kitap changes to kitab here: kitab + ım + da = kitabımda',explanationKey:'softened_book_builder'},
  {id:'meaning_yolculukta',prompt:{en:'on the journey',id:'dalam perjalanan'},answerParts:['yolculuk','ta'],options:['yolculuk','ta','da','te'],finalWord:'yolculukta',audio:'audio/pronunciation_tr_yolculukta.mp3',image:null,revealAfterCorrect:'yolculuk + ta = yolculukta',explanationKey:'locative_suffix_basic'}
];

export const WHOSE_BUILDER = [
  {id:'whose_benim',prompt:{en:'mine / my',id:'punya saya'},answerParts:['ben','im'],options:['ben','im','in','nun'],finalWord:'benim',audio:'audio/pronunciation_tr_benim.mp3',image:null,revealAfterCorrect:'ben + im = benim',explanationKey:'whose_benim_story'},
  {id:'whose_senin',prompt:{en:'yours / your',id:'punya kamu'},answerParts:['sen','in'],options:['sen','in','im','nun'],finalWord:'senin',audio:'audio/pronunciation_tr_senin.mp3',image:null,revealAfterCorrect:'sen + in = senin',explanationKey:'whose_senin_story'},
  {id:'whose_onun',prompt:{en:'his / her / its',id:'punya dia'},answerParts:['o','nun'],options:['o','nun','im','in'],finalWord:'onun',audio:'audio/pronunciation_tr_onun.mp3',image:null,revealAfterCorrect:'o + nun = onun',explanationKey:'whose_onun_story'},
  {id:'whose_bizim',prompt:{en:'ours / our',id:'punya kami / kita'},answerParts:['biz','im'],options:['biz','im','in','nun'],finalWord:'bizim',audio:'audio/pronunciation_tr_bizim.mp3',image:null,revealAfterCorrect:'biz + im = bizim',explanationKey:'whose_bizim_story'},
  {id:'whose_sizin',prompt:{en:'yours / your',id:'punya kalian / Anda'},answerParts:['siz','in'],options:['siz','in','im','nun'],finalWord:'sizin',audio:'audio/pronunciation_tr_sizin.mp3',image:null,revealAfterCorrect:'siz + in = sizin',explanationKey:'whose_sizin_story'},
  {id:'whose_onlarin',prompt:{en:'theirs / their',id:'punya mereka'},answerParts:['onlar','ın'],options:['onlar','ın','in','im'],finalWord:'onların',audio:'audio/pronunciation_tr_onlarin.mp3',image:null,revealAfterCorrect:'onlar + ın = onların',explanationKey:'whose_onlarin_story'},
  {id:'whose_arabam',prompt:{en:'my car',id:'mobil saya'},answerParts:['araba','m'],options:['araba','m','n','sı'],finalWord:'arabam',audio:'audio/pronunciation_tr_arabam.mp3',image:'images/araba.png',revealAfterCorrect:'araba + m = arabam',explanationKey:'whose_arabam_story'},
  {id:'whose_araban',prompt:{en:'your car',id:'mobil kamu'},answerParts:['araba','n'],options:['araba','n','m','sı'],finalWord:'araban',audio:'audio/pronunciation_tr_araban.mp3',image:'images/araba.png',revealAfterCorrect:'araba + n = araban',explanationKey:'whose_araban_story'},
  {id:'whose_arabasi',prompt:{en:'his / her car',id:'mobil dia'},answerParts:['araba','sı'],options:['araba','sı','m','n'],finalWord:'arabası',audio:'audio/pronunciation_tr_arabasi.mp3',image:'images/araba.png',revealAfterCorrect:'araba + sı = arabası',explanationKey:'whose_arabasi_story'},
  {id:'whose_arabamiz',prompt:{en:'our car',id:'mobil kami / kita'},answerParts:['araba','mız'],options:['araba','mız','nız','ları'],finalWord:'arabamız',audio:'audio/pronunciation_tr_arabamiz.mp3',image:'images/araba.png',revealAfterCorrect:'araba + mız = arabamız',explanationKey:'whose_arabamiz_story'},
  {id:'whose_arabaniz',prompt:{en:'your car',id:'mobil kalian / Anda'},answerParts:['araba','nız'],options:['araba','nız','mız','ları'],finalWord:'arabanız',audio:'audio/pronunciation_tr_arabaniz.mp3',image:'images/araba.png',revealAfterCorrect:'araba + nız = arabanız',explanationKey:'whose_arabaniz_story'},
  {id:'whose_arabalari',prompt:{en:'their car',id:'mobil mereka'},answerParts:['araba','ları'],options:['araba','ları','mız','nız'],finalWord:'arabaları',audio:'audio/pronunciation_tr_arabalari.mp3',image:'images/araba.png',revealAfterCorrect:'araba + ları = arabaları',explanationKey:'whose_arabalari_story'}
];

export const PLURAL_BUILDER = [
  {id:'plural_evler',prompt:{en:'houses',id:'rumah-rumah'},answerParts:['ev','ler'],options:['ev','ler','lar'],finalWord:'evler',audio:'audio/pronunciation_tr_evler.mp3',image:'images/ev.png',revealAfterCorrect:'ev + ler = evler',explanationKey:'plural_evler_story'},
  {id:'plural_kitaplar',prompt:{en:'books',id:'buku-buku'},answerParts:['kitap','lar'],options:['kitap','lar','ler'],finalWord:'kitaplar',audio:'audio/pronunciation_tr_kitaplar.mp3',image:'images/kitap.png',revealAfterCorrect:'kitap + lar = kitaplar',explanationKey:'plural_kitaplar_story'},
  {id:'plural_kopekler',prompt:{en:'dogs',id:'anjing-anjing'},answerParts:['köpek','ler'],options:['köpek','ler','lar'],finalWord:'köpekler',audio:'audio/pronunciation_tr_kopekler.mp3',image:'images/kopek.png',revealAfterCorrect:'köpek + ler = köpekler',explanationKey:'plural_kopekler_story'},
  {id:'plural_okullar',prompt:{en:'schools',id:'sekolah-sekolah'},answerParts:['okul','lar'],options:['okul','lar','ler'],finalWord:'okullar',audio:'audio/pronunciation_tr_okullar.mp3',image:'images/okul.png',revealAfterCorrect:'okul + lar = okullar',explanationKey:'plural_okullar_story'},
  {id:'plural_arabalar',prompt:{en:'cars',id:'mobil-mobil'},answerParts:['araba','lar'],options:['araba','lar','ler'],finalWord:'arabalar',audio:'audio/pronunciation_tr_arabalar.mp3',image:'images/araba.png',revealAfterCorrect:'araba + lar = arabalar',explanationKey:'plural_arabalar_story'}
];

export const ACCUSATIVE_BUILDER = [
  {id:'acc_elmayi',prompt:{en:'the apple',id:'apel itu'},answerParts:['elma','yı'],options:['elma','yı','yi','ı'],finalWord:'elmayı',audio:'audio/pronunciation_tr_elmayi.mp3',image:'images/elma.png',revealAfterCorrect:'elma + yı = elmayı',explanationKey:'y_glide_accusative'},
  {id:'acc_gazeteyi',prompt:{en:'the newspaper',id:'koran itu'},answerParts:['gazete','yi'],options:['gazete','yi','yı','i'],finalWord:'gazeteyi',audio:'audio/pronunciation_tr_gazeteyi.mp3',image:null,revealAfterCorrect:'gazete + yi = gazeteyi',explanationKey:'y_glide_accusative'},
  {id:'acc_kitabi',prompt:{en:'the book',id:'buku itu'},answerParts:['kitab','ı'],options:['kitab','ı','i','yı'],finalWord:'kitabı',audio:'audio/pronunciation_tr_kitabi.mp3',image:'images/kitap.png',revealAfterCorrect:'kitap changes to kitab here: kitab + ı = kitabı',explanationKey:'softened_book_builder'},
  {id:'acc_kopegi',prompt:{en:'the dog',id:'anjing itu'},answerParts:['köpeğ','i'],options:['köpeğ','i','ı','yi'],finalWord:'köpeği',audio:'audio/pronunciation_tr_kopegi.mp3',image:'images/kopek.png',revealAfterCorrect:'köpek changes to köpeğ here: köpeğ + i = köpeği',explanationKey:'softened_k_builder'},
  {id:'acc_arabayi',prompt:{en:'the car',id:'mobil itu'},answerParts:['araba','yı'],options:['araba','yı','yi','ı'],finalWord:'arabayı',audio:'audio/pronunciation_tr_arabayi.mp3',image:'images/araba.png',revealAfterCorrect:'araba + yı = arabayı',explanationKey:'y_glide_accusative'}
];

// Dative case (“to / toward”). Audio is owner-recorded and verified.
export const DATIVE_BUILDER = [
  {id:'dat_eve',prompt:{en:'to the house',id:'ke rumah'},answerParts:['ev','e'],options:['ev','e','a','ye'],finalWord:'eve',audio:'audio/pronunciation_tr_eve.mp3',image:'images/ev.png',revealAfterCorrect:'ev + e = eve',explanationKey:'dative_basic'},
  {id:'dat_okula',prompt:{en:'to school',id:'ke sekolah'},answerParts:['okul','a'],options:['okul','a','e','ya'],finalWord:'okula',audio:'audio/pronunciation_tr_okula.mp3',image:'images/okul.png',revealAfterCorrect:'okul + a = okula',explanationKey:'dative_basic'},
  {id:'dat_kaleme',prompt:{en:'to the pencil',id:'ke pensil'},answerParts:['kalem','e'],options:['kalem','e','a','ye'],finalWord:'kaleme',audio:'audio/pronunciation_tr_kaleme.mp3',image:'images/kalem.png',revealAfterCorrect:'kalem + e = kaleme',explanationKey:'dative_basic'},
  {id:'dat_arabaya',prompt:{en:'to the car',id:'ke mobil'},answerParts:['araba','ya'],options:['araba','ya','a','e'],finalWord:'arabaya',audio:'audio/pronunciation_tr_arabaya.mp3',image:'images/araba.png',revealAfterCorrect:'araba + ya = arabaya',explanationKey:'dative_y_glide'},
  {id:'dat_suya',prompt:{en:'to the water',id:'ke air'},answerParts:['su','ya'],options:['su','ya','a','e'],finalWord:'suya',audio:'audio/pronunciation_tr_suya.mp3',image:'images/su.png',revealAfterCorrect:'su + ya = suya',explanationKey:'dative_y_glide'},
  {id:'dat_kitaba',prompt:{en:'to the book',id:'ke buku'},answerParts:['kitab','a'],options:['kitab','a','e','ya'],finalWord:'kitaba',audio:'audio/pronunciation_tr_kitaba.mp3',image:'images/kitap.png',revealAfterCorrect:'kitap changes to kitab here: kitab + a = kitaba',explanationKey:'dative_softened_kitap'},
  {id:'dat_kopege',prompt:{en:'to the dog',id:'ke anjing'},answerParts:['köpeğ','e'],options:['köpeğ','e','a','ye'],finalWord:'köpeğe',audio:'audio/pronunciation_tr_kopege.mp3',image:'images/kopek.png',revealAfterCorrect:'köpek changes to köpeğ here: köpeğ + e = köpeğe',explanationKey:'dative_softened_kopek'}
];

// Multi-suffix stacking (plural + possessive + case). Most long forms have no
// recorded audio yet (text+blocks only); gecelerimizde is owner-voiced.
export const COMBO_BUILDER = [
  {id:'cmb_evlerim',prompt:{en:'my houses',id:'rumah-rumah saya'},answerParts:['ev','ler','im'],options:['ev','ler','im','lar','ım','de'],finalWord:'evlerim',audio:null,image:'images/ev.png',revealAfterCorrect:'ev + ler + im = evlerim',explanationKey:'multi_suffix_basic'},
  {id:'cmb_arabalarim',prompt:{en:'my cars',id:'mobil-mobil saya'},answerParts:['araba','lar','ım'],options:['araba','lar','ım','ler','im','da'],finalWord:'arabalarım',audio:null,image:'images/araba.png',revealAfterCorrect:'araba + lar + ım = arabalarım',explanationKey:'multi_suffix_basic'},
  {id:'cmb_gozlerim',prompt:{en:'my eyes',id:'mata saya'},answerParts:['göz','ler','im'],options:['göz','ler','im','lar','üm','ım'],finalWord:'gözlerim',audio:null,image:'images/goz.png',revealAfterCorrect:'göz + ler + im = gözlerim',explanationKey:'multi_suffix_basic'},
  {id:'cmb_evlerimiz',prompt:{en:'our houses',id:'rumah-rumah kami'},answerParts:['ev','ler','imiz'],options:['ev','ler','imiz','lar','ımız','im'],finalWord:'evlerimiz',audio:null,image:'images/ev.png',revealAfterCorrect:'ev + ler + imiz = evlerimiz',explanationKey:'multi_suffix_basic'},
  {id:'cmb_okullarimiz',prompt:{en:'our schools',id:'sekolah-sekolah kami'},answerParts:['okul','lar','ımız'],options:['okul','lar','ımız','ler','imiz','da'],finalWord:'okullarımız',audio:null,image:'images/okul.png',revealAfterCorrect:'okul + lar + ımız = okullarımız',explanationKey:'multi_suffix_basic'},
  {id:'cmb_evlerimizde',prompt:{en:'in our houses',id:'di rumah-rumah kami'},answerParts:['ev','ler','imiz','de'],options:['ev','ler','imiz','de','da','im'],finalWord:'evlerimizde',audio:null,image:'images/ev.png',revealAfterCorrect:'ev + ler + imiz + de = evlerimizde',explanationKey:'multi_suffix_case'},
  {id:'cmb_arabalarimda',prompt:{en:'in my cars',id:'di mobil-mobil saya'},answerParts:['araba','lar','ım','da'],options:['araba','lar','ım','da','de','ımız'],finalWord:'arabalarımda',audio:null,image:'images/araba.png',revealAfterCorrect:'araba + lar + ım + da = arabalarımda',explanationKey:'multi_suffix_case'},
  {id:'cmb_gecelerimizde',prompt:{en:'in our nights',id:'di malam-malam kami'},answerParts:['gece','ler','imiz','de'],options:['gece','ler','imiz','de','da','im'],finalWord:'gecelerimizde',audio:'audio/pronunciation_tr_gecelerimizde.mp3',image:null,revealAfterCorrect:'gece + ler + imiz + de = gecelerimizde',explanationKey:'multi_suffix_case'}
];

export const GREETINGS = [
  {id:'gr_merhaba',word:'merhaba',meaning:{en:'hello',id:'halo'},audio:'audio/pronunciation_tr_merhaba.mp3',emoji:'👋'},
  {id:'gr_gunaydin',word:'günaydın',meaning:{en:'good morning',id:'selamat pagi'},audio:'audio/pronunciation_tr_gunaydin.mp3',emoji:'🌅'},
  {id:'gr_iyigeceler',word:'iyi geceler',meaning:{en:'good night',id:'selamat malam'},audio:'audio/pronunciation_tr_iyi_geceler.mp3',emoji:'🌙'},
  {id:'gr_tesekkurler',word:'teşekkürler',meaning:{en:'thank you',id:'terima kasih'},audio:'audio/pronunciation_tr_tesekkurler.mp3',emoji:'🙏'},
  {id:'gr_ricaederim',word:'rica ederim',meaning:{en:'you’re welcome',id:'sama-sama'},audio:'audio/pronunciation_tr_rica_ederim.mp3',emoji:'😊'},
  {id:'gr_lutfen',word:'lütfen',meaning:{en:'please',id:'tolong'},audio:'audio/pronunciation_tr_lutfen.mp3',emoji:'🥺'},
  {id:'gr_evet',word:'evet',meaning:{en:'yes',id:'ya'},audio:'audio/pronunciation_tr_evet.mp3',emoji:'✅'},
  {id:'gr_hayir',word:'hayır',meaning:{en:'no',id:'tidak'},audio:'audio/pronunciation_tr_hayir.mp3',emoji:'❌'},
  {id:'gr_hoscakal',word:'hoşça kal',meaning:{en:'goodbye',id:'selamat tinggal'},audio:'audio/pronunciation_tr_hoscakal.mp3',emoji:'🚪'},
  {id:'gr_gorusuruz',word:'görüşürüz',meaning:{en:'see you',id:'sampai jumpa'},audio:'audio/pronunciation_tr_gorusuruz.mp3',emoji:'🔜'}
];

export const COLORS = [
  {id:'cl_kirmizi',word:'kırmızı',meaning:{en:'red',id:'merah'},audio:'audio/pronunciation_tr_kirmizi.mp3',swatch:'#e23b3b'},
  {id:'cl_turuncu',word:'turuncu',meaning:{en:'orange',id:'oranye'},audio:'audio/pronunciation_tr_turuncu.mp3',swatch:'#ff6a00'},
  {id:'cl_sari',word:'sarı',meaning:{en:'yellow',id:'kuning'},audio:'audio/pronunciation_tr_sari.mp3',swatch:'#ffe000'},
  {id:'cl_yesil',word:'yeşil',meaning:{en:'green',id:'hijau'},audio:'audio/pronunciation_tr_yesil.mp3',swatch:'#2e9e4f'},
  {id:'cl_mavi',word:'mavi',meaning:{en:'blue',id:'biru'},audio:'audio/pronunciation_tr_mavi.mp3',swatch:'#2f6fe0'},
  {id:'cl_mor',word:'mor',meaning:{en:'purple',id:'ungu'},audio:'audio/pronunciation_tr_mor.mp3',swatch:'#8e24aa'},
  {id:'cl_pembe',word:'pembe',meaning:{en:'pink',id:'merah muda'},audio:'audio/pronunciation_tr_pembe.mp3',swatch:'#ff7ab0'},
  {id:'cl_kahverengi',word:'kahverengi',meaning:{en:'brown',id:'cokelat'},audio:'audio/pronunciation_tr_kahverengi.mp3',swatch:'#8b5a2b'},
  {id:'cl_gri',word:'gri',meaning:{en:'gray',id:'abu-abu'},audio:'audio/pronunciation_tr_gri.mp3',swatch:'#9aa3ad'},
  {id:'cl_siyah',word:'siyah',meaning:{en:'black',id:'hitam'},audio:'audio/pronunciation_tr_siyah.mp3',swatch:'#1c1c1c'},
  {id:'cl_beyaz',word:'beyaz',meaning:{en:'white',id:'putih'},audio:'audio/pronunciation_tr_beyaz.mp3',swatch:'#ffffff'}
];

// Deconstruction: show a Turkish word, choose its meaning. Words are already
// taught elsewhere; all have audio for support.
export const DECONSTRUCT = [
  {id:'dc_ev',word:'ev',meaning:{en:'house',id:'rumah'},audio:'audio/pronunciation_tr_ev.mp3'},
  {id:'dc_okul',word:'okul',meaning:{en:'school',id:'sekolah'},audio:'audio/pronunciation_tr_okul.mp3'},
  {id:'dc_kitap',word:'kitap',meaning:{en:'book',id:'buku'},audio:'audio/pronunciation_tr_kitap.mp3'},
  {id:'dc_su',word:'su',meaning:{en:'water',id:'air'},audio:'audio/pronunciation_tr_su.mp3'},
  {id:'dc_anne',word:'anne',meaning:{en:'mother',id:'ibu'},audio:'audio/pronunciation_tr_anne.mp3'},
  {id:'dc_merhaba',word:'merhaba',meaning:{en:'hello',id:'halo'},audio:'audio/pronunciation_tr_merhaba.mp3'},
  {id:'dc_kirmizi',word:'kırmızı',meaning:{en:'red',id:'merah'},audio:'audio/pronunciation_tr_kirmizi.mp3'},
  {id:'dc_kopek',word:'köpek',meaning:{en:'dog',id:'anjing'},audio:'audio/pronunciation_tr_kopek.mp3'},
  {id:'dc_evde',word:'evde',meaning:{en:'at home',id:'di rumah'},audio:'audio/pronunciation_tr_evde.mp3'},
  {id:'dc_evler',word:'evler',meaning:{en:'houses',id:'rumah-rumah'},audio:'audio/pronunciation_tr_evler.mp3'}
];

export const FAMILY = [
  {id:'fm_anne',word:'anne',meaning:{en:'mother',id:'ibu'},audio:'audio/pronunciation_tr_anne.mp3',emoji:'🤱'},
  {id:'fm_baba',word:'baba',meaning:{en:'father',id:'ayah'},audio:'audio/pronunciation_tr_baba.mp3',emoji:'🧔'},
  {id:'fm_bebek',word:'bebek',meaning:{en:'baby',id:'bayi'},audio:'audio/pronunciation_tr_bebek.mp3',emoji:'👶'},
  {id:'fm_cocuk',word:'çocuk',meaning:{en:'child',id:'anak'},audio:'audio/pronunciation_tr_cocuk.mp3',emoji:'🧒'},
  {id:'fm_kadin',word:'kadın',meaning:{en:'woman',id:'wanita'},audio:'audio/pronunciation_tr_kadin.mp3',emoji:'👩'},
  {id:'fm_erkek',word:'erkek',meaning:{en:'man',id:'pria'},audio:'audio/pronunciation_tr_erkek.mp3',emoji:'👨'},
  {id:'fm_arkadas',word:'arkadaş',meaning:{en:'friend',id:'teman'},audio:'audio/pronunciation_tr_arkadas.mp3',emoji:'👫'},
  {id:'fm_aile',word:'aile',meaning:{en:'family',id:'keluarga'},audio:'audio/pronunciation_tr_aile.mp3',emoji:'👨‍👩‍👧‍👦'}
];

const whosePeople = {
  benim:{base:'ben',block:'im',en:'Start with ben. When it means mine or my, Turkish says benim.',id:'Mulai dari ben. Saat artinya punya saya, bahasa Turki mengatakan benim.',hearEn:'ben is I. benim is my or mine.',hearId:'ben berarti saya. benim berarti punya saya.',mistakeEn:'Do not choose in or nun here. The small sound is im.',mistakeId:'Jangan pilih in atau nun di sini. Bunyi kecilnya im.'},
  senin:{base:'sen',block:'in',en:'Start with sen. When it means yours or your, Turkish says senin.',id:'Mulai dari sen. Saat artinya punya kamu, bahasa Turki mengatakan senin.',hearEn:'sen is you. senin is your or yours.',hearId:'sen berarti kamu. senin berarti punya kamu.',mistakeEn:'Do not choose im here. The small sound is in.',mistakeId:'Jangan pilih im di sini. Bunyi kecilnya in.'},
  onun:{base:'o',block:'nun',en:'Start with o. When it means his, her, or its, Turkish says onun.',id:'Mulai dari o. Saat artinya punya dia, bahasa Turki mengatakan onun.',hearEn:'o is he, she, or it. onun is his, her, or its.',hearId:'o berarti dia. onun berarti punya dia.',mistakeEn:'Do not drop the small nun sound.',mistakeId:'Jangan hilangkan bunyi kecil nun.'},
  bizim:{base:'biz',block:'im',en:'Start with biz. When it means our or ours, Turkish says bizim.',id:'Mulai dari biz. Saat artinya punya kami atau kita, bahasa Turki mengatakan bizim.',hearEn:'biz is we. bizim is our or ours.',hearId:'biz berarti kami atau kita. bizim berarti punya kami atau kita.',mistakeEn:'Do not use sen or siz when the meaning is our.',mistakeId:'Jangan gunakan sen atau siz saat artinya punya kami atau kita.'},
  sizin:{base:'siz',block:'in',en:'Start with siz. When it means your or yours for you all or polite you, Turkish says sizin.',id:'Mulai dari siz. Saat artinya punya kalian atau Anda, bahasa Turki mengatakan sizin.',hearEn:'siz is you all or polite you. sizin is your or yours.',hearId:'siz berarti kalian atau Anda. sizin berarti punya kalian atau Anda.',mistakeEn:'Do not use bizim when the meaning is your.',mistakeId:'Jangan gunakan bizim saat artinya punya kalian atau Anda.'},
  onlarin:{base:'onlar',block:'ın',en:'Start with onlar. When it means their or theirs, Turkish says onların.',id:'Mulai dari onlar. Saat artinya punya mereka, bahasa Turki mengatakan onların.',hearEn:'onlar is they. onların is their or theirs.',hearId:'onlar berarti mereka. onların berarti punya mereka.',mistakeEn:'Use the Turkish dotless ı sound in ın.',mistakeId:'Gunakan bunyi ı Turki dalam ın.'}
};

const whoseCars = {
  arabam:{block:'m',en:'Start with araba. To say my car, add the small m sound.',id:'Mulai dari araba. Untuk mengatakan mobil saya, tambahkan bunyi kecil m.',hearEn:'araba means car. arabam means my car.',hearId:'araba berarti mobil. arabam berarti mobil saya.',mistakeEn:'Do not add a full extra word. Build the meaning inside the word.',mistakeId:'Jangan tambahkan kata panjang baru. Susun makna di dalam kata.'},
  araban:{block:'n',en:'Start with araba. To say your car, add the small n sound.',id:'Mulai dari araba. Untuk mengatakan mobil kamu, tambahkan bunyi kecil n.',hearEn:'araba means car. araban means your car.',hearId:'araba berarti mobil. araban berarti mobil kamu.',mistakeEn:'Do not choose m when the meaning is your car.',mistakeId:'Jangan pilih m saat artinya mobil kamu.'},
  arabasi:{block:'sı',en:'Start with araba. To say his or her car, add the small sı sound.',id:'Mulai dari araba. Untuk mengatakan mobil dia, tambahkan bunyi kecil sı.',hearEn:'araba means car. arabası means his or her car.',hearId:'araba berarti mobil. arabası berarti mobil dia.',mistakeEn:'Write and choose sı, not si.',mistakeId:'Tulis dan pilih sı, bukan si.'},
  arabamiz:{block:'mız',en:'Start with araba. To say our car, add the small mız sound.',id:'Mulai dari araba. Untuk mengatakan mobil kami atau kita, tambahkan bunyi kecil mız.',hearEn:'araba means car. arabamız means our car.',hearId:'araba berarti mobil. arabamız berarti mobil kami atau kita.',mistakeEn:'Write and choose mız with Turkish ı.',mistakeId:'Tulis dan pilih mız dengan ı Turki.'},
  arabaniz:{block:'nız',en:'Start with araba. To say your car for you all or polite you, add nız.',id:'Mulai dari araba. Untuk mengatakan mobil kalian atau Anda, tambahkan nız.',hearEn:'araba means car. arabanız means your car.',hearId:'araba berarti mobil. arabanız berarti mobil kalian atau Anda.',mistakeEn:'Write and choose nız with Turkish ı.',mistakeId:'Tulis dan pilih nız dengan ı Turki.'},
  arabalari:{block:'ları',en:'Start with araba. To say their car, add ları.',id:'Mulai dari araba. Untuk mengatakan mobil mereka, tambahkan ları.',hearEn:'araba means car. arabaları means their car.',hearId:'araba berarti mobil. arabaları berarti mobil mereka.',mistakeEn:'Write and choose ları with Turkish ı.',mistakeId:'Tulis dan pilih ları dengan ı Turki.'}
};

function peopleStory(x){return {main:{en:x.en,id:x.id},hear:{en:x.hearEn,id:x.hearId},mistake:{en:x.mistakeEn,id:x.mistakeId},practice:{en:[`Say ${x.base}.`,`Add the small ${x.block} sound.`,`Build: ${x.base} + ${x.block}.`],id:[`Ucapkan ${x.base}.`,`Tambahkan bunyi kecil ${x.block}.`,`Susun: ${x.base} + ${x.block}.`]}};}
function carStory(x){return {main:{en:x.en,id:x.id},hear:{en:x.hearEn,id:x.hearId},mistake:{en:x.mistakeEn,id:x.mistakeId},practice:{en:['Say araba.',`Add the small ${x.block} sound.`,`Build: araba + ${x.block}.`],id:['Ucapkan araba.',`Tambahkan bunyi kecil ${x.block}.`,`Susun: araba + ${x.block}.`]}};}

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
    hear:{en:'Turkish c is heard in cam. Turkish ç is heard in çok. Do not guess from English or Indonesian spelling.',id:'c Turki terdengar dalam cam. ç Turki terdengar dalam çok. Jangan menebak dari ejaan Inggris atau Indonesia.'},
    mouth:{en:'First listen to cam, then compare it with çok.',id:'Dengarkan cam dulu, lalu bandingkan dengan çok.'},
    mistake:{en:'Common mistake: treating Turkish c and ç as the same sound.',id:'Kesalahan umum: menganggap c Turki dan ç sama.'},
    practice:{en:['Listen to c.','Listen to cam.','Listen to ç in çok.','Repeat both slowly.'],id:['Dengarkan c.','Dengarkan cam.','Dengarkan ç dalam çok.','Ulangi keduanya perlahan.']}
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
  possessive_suffix_basic:{
    main:{en:'To say “my”, Turkish glues a small block onto the end. After a consonant the block is -im/-ım/-um/-üm. Look at the last vowel: e/i → -im. So ev + im = evim.',id:'Untuk mengatakan “milik saya”, bahasa Turki menempelkan blok kecil di akhir. Setelah konsonan bloknya -im/-ım/-um/-üm. Lihat vokal terakhir: e/i → -im. Jadi ev + im = evim.'},
    hear:{en:'Last-vowel rule: e/i → -im, a/ı → -ım, o/u → -um, ö/ü → -üm. ev has e, so -im.',id:'Aturan vokal terakhir: e/i → -im, a/ı → -ım, o/u → -um, ö/ü → -üm. ev punya e, jadi -im.'},
    mistake:{en:'Not evım or evüm. The last vowel e takes -im.',id:'Bukan evım atau evüm. Vokal terakhir e memakai -im.'},
    practice:{en:['Find the last vowel: e.','e/i → -im.','Build: ev + im = evim.'],id:['Cari vokal terakhir: e.','e/i → -im.','Susun: ev + im = evim.']}
  },
  possessive_after_vowel:{
    main:{en:'When the word already ends in a vowel (like araba), there is no buffer vowel — the “my” block is just -m. araba + m = arabam (my car).',id:'Jika kata sudah berakhir dengan vokal (seperti araba), tidak ada vokal penyambung — blok “milik saya” cukup -m. araba + m = arabam (mobil saya).'},
    hear:{en:'After a vowel, “my” is only -m. araba → arabam.',id:'Setelah vokal, “milik saya” hanya -m. araba → arabam.'},
    mistake:{en:'Do not add -ım after araba. After a vowel use only -m.',id:'Jangan tambahkan -ım setelah araba. Setelah vokal gunakan hanya -m.'},
    practice:{en:['Say araba — it ends in a vowel.','So “my” is just -m.','Build: araba + m = arabam.'],id:['Ucapkan araba — berakhir vokal.','Jadi “milik saya” cukup -m.','Susun: araba + m = arabam.']}
  },
  locative_suffix_basic:{
    main:{en:'The place block means in/on/at. Look at the last vowel: e/i/ö/ü → -de; a/ı/o/u → -da. ev has e, so ev + de = evde.',id:'Blok tempat berarti di/pada/dalam. Lihat vokal terakhir: e/i/ö/ü → -de; a/ı/o/u → -da. ev punya e, jadi ev + de = evde.'},
    hear:{en:'Vowel rule: a/ı/o/u → -da, e/i/ö/ü → -de.',id:'Aturan vokal: a/ı/o/u → -da, e/i/ö/ü → -de.'},
    mistake:{en:'If the word ends in a hard (voiceless) consonant like p, ç, t, k, the d hardens to t: park → parkta.',id:'Jika kata berakhir dengan konsonan keras (tak bersuara) seperti p, ç, t, k, maka d mengeras menjadi t: park → parkta.'},
    practice:{en:['Find the last vowel: e.','e → -de.','Build: ev + de = evde.'],id:['Cari vokal terakhir: e.','e → -de.','Susun: ev + de = evde.']}
  },
  safe_builder_order:{
    main:{en:'Build from left to right: the word first, then “my”, then the place block. ev + im + de = evimde (in my house).',id:'Susun dari kiri ke kanan: kata dulu, lalu “milik saya”, lalu blok tempat. ev + im + de = evimde (di rumah saya).'},
    hear:{en:'Keep the order: word, then “my”, then place. The final answer appears only after you solve it.',id:'Jaga urutannya: kata, lalu “milik saya”, lalu tempat. Jawaban akhir muncul hanya setelah kamu menyelesaikannya.'},
    mistake:{en:'Do not put the place block before “my”. The order is word + my + place.',id:'Jangan letakkan blok tempat sebelum “milik saya”. Urutannya kata + milik saya + tempat.'},
    practice:{en:['Start with the word: ev.','Add “my”: im.','Add place: de → evimde.'],id:['Mulai dari kata: ev.','Tambahkan “milik saya”: im.','Tambahkan tempat: de → evimde.']}
  },
  safe_sound_match:{
    main:{en:'The “my” block follows the last vowel: ö/ü → -üm. göz has ö, so göz + üm = gözüm (then + de = gözümde).',id:'Blok “milik saya” mengikuti vokal terakhir: ö/ü → -üm. göz punya ö, jadi göz + üm = gözüm (lalu + de = gözümde).'},
    hear:{en:'Last-vowel rule: e/i → -im, a/ı → -ım, o/u → -um, ö/ü → -üm. göz has ö → -üm.',id:'Aturan vokal terakhir: e/i → -im, a/ı → -ım, o/u → -um, ö/ü → -üm. göz punya ö → -üm.'},
    mistake:{en:'Not gözimde. The last vowel ö takes -üm.',id:'Bukan gözimde. Vokal terakhir ö memakai -üm.'},
    practice:{en:['Find the last vowel: ö.','ö/ü → -üm.','Build: göz + üm + de = gözümde.'],id:['Cari vokal terakhir: ö.','ö/ü → -üm.','Susun: göz + üm + de = gözümde.']}
  },
  softened_book_builder:{
    main:{en:'A final p, ç, t, or k softens before a vowel block: p→b, ç→c, t→d, k→ğ. So kitap → kitab-: kitabı, kitabımda.',id:'Konsonan akhir p, ç, t, k melunak sebelum blok vokal: p→b, ç→c, t→d, k→ğ. Jadi kitap → kitab-: kitabı, kitabımda.'},
    hear:{en:'Listen: kitap → kitabı / kitabımda. The p softens to b before the vowel.',id:'Dengarkan: kitap → kitabı / kitabımda. Bunyi p melunak menjadi b sebelum vokal.'},
    mistake:{en:'Do not keep the hard p: not kitapı / kitapımda. Use kitab-.',id:'Jangan pertahankan p keras: bukan kitapı / kitapımda. Gunakan kitab-.'},
    practice:{en:['See the final p in kitap.','Before a vowel block, p → b: kitab.','Build: kitab + ı = kitabı.'],id:['Lihat p akhir pada kitap.','Sebelum blok vokal, p → b: kitab.','Susun: kitab + ı = kitabı.']}
  },
  softened_k_builder:{
    main:{en:'A final k softens to ğ before a vowel block. köpek → köpeğ-: köpeğ + i = köpeği.',id:'Konsonan akhir k melunak menjadi ğ sebelum blok vokal. köpek → köpeğ-: köpeğ + i = köpeği.'},
    hear:{en:'Listen: köpek → köpeği. The k softens to ğ before the vowel.',id:'Dengarkan: köpek → köpeği. Bunyi k melunak menjadi ğ sebelum vokal.'},
    mistake:{en:'Not köpeki. Use köpeğ + i = köpeği.',id:'Bukan köpeki. Gunakan köpeğ + i = köpeği.'},
    practice:{en:['See the final k in köpek.','Before a vowel block, k → ğ: köpeğ.','Build: köpeğ + i = köpeği.'],id:['Lihat k akhir pada köpek.','Sebelum blok vokal, k → ğ: köpeğ.','Susun: köpeğ + i = köpeği.']}
  },
  y_glide_accusative:{
    main:{en:'The object block is -ı/-i/-u/-ü by the last vowel; after a vowel add a y bridge. elma (a) → elma + yı = elmayı.',id:'Blok objek adalah -ı/-i/-u/-ü menurut vokal terakhir; setelah vokal tambahkan jembatan y. elma (a) → elma + yı = elmayı.'},
    hear:{en:'Vowel rule: a/ı → -ı, e/i → -i, o/u → -u, ö/ü → -ü. elma has a → -ı, plus y after the vowel: -yı.',id:'Aturan vokal: a/ı → -ı, e/i → -i, o/u → -u, ö/ü → -ü. elma punya a → -ı, plus y setelah vokal: -yı.'},
    mistake:{en:'Do not say elmaı. After a vowel add the y bridge: elmayı.',id:'Jangan ucapkan elmaı. Setelah vokal tambahkan jembatan y: elmayı.'},
    practice:{en:['Last vowel a → -ı.','It ends in a vowel, so add y.','Build: elma + yı = elmayı.'],id:['Vokal terakhir a → -ı.','Berakhir vokal, jadi tambahkan y.','Susun: elma + yı = elmayı.']}
  },
  whose_benim_story:peopleStory(whosePeople.benim),
  whose_senin_story:peopleStory(whosePeople.senin),
  whose_onun_story:peopleStory(whosePeople.onun),
  whose_bizim_story:peopleStory(whosePeople.bizim),
  whose_sizin_story:peopleStory(whosePeople.sizin),
  whose_onlarin_story:peopleStory(whosePeople.onlarin),
  whose_arabam_story:carStory(whoseCars.arabam),
  whose_araban_story:carStory(whoseCars.araban),
  whose_arabasi_story:carStory(whoseCars.arabasi),
  whose_arabamiz_story:carStory(whoseCars.arabamiz),
  whose_arabaniz_story:carStory(whoseCars.arabaniz),
  whose_arabalari_story:carStory(whoseCars.arabalari),
  plural_evler_story:{
    main:{en:'One house is ev. The plural block is -ler or -lar. Look at the last vowel: e → -ler. So ev + ler = evler.',id:'Satu rumah adalah ev. Blok jamak adalah -ler atau -lar. Lihat vokal terakhir: e → -ler. Jadi ev + ler = evler.'},
    hear:{en:'Rule: a, ı, o, u → -lar; e, i, ö, ü → -ler. ev’s last vowel is e, so -ler. (Works for most words; a few borrowed words differ.)',id:'Aturan: a, ı, o, u → -lar; e, i, ö, ü → -ler. Vokal terakhir ev adalah e, jadi -ler. (Berlaku untuk hampir semua kata; sedikit kata serapan berbeda.)'},
    mistake:{en:'Not evlar. The last vowel e takes -ler.',id:'Bukan evlar. Vokal terakhir e memakai -ler.'},
    practice:{en:['Find the last vowel: e.','e → -ler.','Build: ev + ler = evler.'],id:['Cari vokal terakhir: e.','e → -ler.','Susun: ev + ler = evler.']}
  },
  plural_kitaplar_story:{
    main:{en:'One book is kitap. Look at the last vowel: a → -lar. So kitap + lar = kitaplar.',id:'Satu buku adalah kitap. Lihat vokal terakhir: a → -lar. Jadi kitap + lar = kitaplar.'},
    hear:{en:'Rule: a, ı, o, u → -lar; e, i, ö, ü → -ler. kitap’s last vowel is a, so -lar.',id:'Aturan: a, ı, o, u → -lar; e, i, ö, ü → -ler. Vokal terakhir kitap adalah a, jadi -lar.'},
    mistake:{en:'Not kitapler. The last vowel a takes -lar.',id:'Bukan kitapler. Vokal terakhir a memakai -lar.'},
    practice:{en:['Find the last vowel: a.','a → -lar.','Build: kitap + lar = kitaplar.'],id:['Cari vokal terakhir: a.','a → -lar.','Susun: kitap + lar = kitaplar.']}
  },
  plural_kopekler_story:{
    main:{en:'One dog is köpek. Look at the last vowel: e → -ler. So köpek + ler = köpekler.',id:'Satu anjing adalah köpek. Lihat vokal terakhir: e → -ler. Jadi köpek + ler = köpekler.'},
    hear:{en:'Rule: a, ı, o, u → -lar; e, i, ö, ü → -ler. köpek’s last vowel is e, so -ler.',id:'Aturan: a, ı, o, u → -lar; e, i, ö, ü → -ler. Vokal terakhir köpek adalah e, jadi -ler.'},
    mistake:{en:'Not köpeklar. The last vowel e takes -ler.',id:'Bukan köpeklar. Vokal terakhir e memakai -ler.'},
    practice:{en:['Find the last vowel: e.','e → -ler.','Build: köpek + ler = köpekler.'],id:['Cari vokal terakhir: e.','e → -ler.','Susun: köpek + ler = köpekler.']}
  },
  plural_okullar_story:{
    main:{en:'One school is okul. Look at the last vowel: u → -lar. So okul + lar = okullar.',id:'Satu sekolah adalah okul. Lihat vokal terakhir: u → -lar. Jadi okul + lar = okullar.'},
    hear:{en:'Rule: a, ı, o, u → -lar; e, i, ö, ü → -ler. okul’s last vowel is u, so -lar.',id:'Aturan: a, ı, o, u → -lar; e, i, ö, ü → -ler. Vokal terakhir okul adalah u, jadi -lar.'},
    mistake:{en:'Not okuller. The last vowel u takes -lar.',id:'Bukan okuller. Vokal terakhir u memakai -lar.'},
    practice:{en:['Find the last vowel: u.','u → -lar.','Build: okul + lar = okullar.'],id:['Cari vokal terakhir: u.','u → -lar.','Susun: okul + lar = okullar.']}
  },
  plural_arabalar_story:{
    main:{en:'One car is araba. Look at the last vowel: a → -lar. So araba + lar = arabalar.',id:'Satu mobil adalah araba. Lihat vokal terakhir: a → -lar. Jadi araba + lar = arabalar.'},
    hear:{en:'Rule: a, ı, o, u → -lar; e, i, ö, ü → -ler. araba’s last vowel is a, so -lar.',id:'Aturan: a, ı, o, u → -lar; e, i, ö, ü → -ler. Vokal terakhir araba adalah a, jadi -lar.'},
    mistake:{en:'Not arabaler. The last vowel a takes -lar.',id:'Bukan arabaler. Vokal terakhir a memakai -lar.'},
    practice:{en:['Find the last vowel: a.','a → -lar.','Build: araba + lar = arabalar.'],id:['Cari vokal terakhir: a.','a → -lar.','Susun: araba + lar = arabalar.']}
  },
  plural_basic:{main:{en:'For more than one, add -ler or -lar. Look at the last vowel: a, ı, o, u → -lar; e, i, ö, ü → -ler. This works for most Turkish words; a few borrowed words are exceptions.',id:'Untuk lebih dari satu, tambahkan -ler atau -lar. Lihat vokal terakhir: a, ı, o, u → -lar; e, i, ö, ü → -ler. Berlaku untuk hampir semua kata Turki; sedikit kata serapan adalah pengecualian.'}},
  dative_basic:{
    main:{en:'The “to” block is -e or -a, chosen to match the word’s vowels. ev → eve (to the house), okul → okula (to school).',id:'Blok “ke” adalah -e atau -a, dipilih agar cocok dengan vokal kata. ev → eve (ke rumah), okul → okula (ke sekolah).'},
    hear:{en:'Front-vowel words take -e (eve, kaleme); back-vowel words take -a (okula).',id:'Kata vokal depan memakai -e (eve, kaleme); kata vokal belakang memakai -a (okula).'},
    mistake:{en:'Do not use -a after ev. ev has the vowel e, so it takes -e: eve.',id:'Jangan gunakan -a setelah ev. ev punya vokal e, jadi memakai -e: eve.'},
    practice:{en:['Look at the word and its vowels.','Choose -e or -a to match.','Build: ev + e = eve.'],id:['Lihat kata dan vokalnya.','Pilih -e atau -a yang cocok.','Susun: ev + e = eve.']}
  },
  dative_y_glide:{
    main:{en:'When a word ends in a vowel, add a y bridge before the “to” block. araba → arabaya, su → suya.',id:'Jika kata berakhir vokal, tambahkan jembatan y sebelum blok “ke”. araba → arabaya, su → suya.'},
    hear:{en:'Listen: araba → arabaya. The y keeps two vowels from clashing.',id:'Dengarkan: araba → arabaya. Huruf y mencegah dua vokal bertabrakan.'},
    mistake:{en:'Do not say arabaa. Add the y bridge: arabaya.',id:'Jangan ucapkan arabaa. Tambahkan jembatan y: arabaya.'},
    practice:{en:['Say the word; it ends in a vowel.','Add y, then -a or -e.','Build: araba + ya = arabaya.'],id:['Ucapkan kata; berakhir vokal.','Tambahkan y, lalu -a atau -e.','Susun: araba + ya = arabaya.']}
  },
  dative_softened_kitap:{
    main:{en:'kitap becomes kitab before the “to” block, then add -a: kitab + a = kitaba (to the book).',id:'kitap menjadi kitab sebelum blok “ke”, lalu tambahkan -a: kitab + a = kitaba (ke buku).'},
    hear:{en:'Listen: kitap → kitaba. The p softens to b.',id:'Dengarkan: kitap → kitaba. Bunyi p melembut menjadi b.'},
    mistake:{en:'Do not build kitapa. Use kitab + a = kitaba.',id:'Jangan susun kitapa. Gunakan kitab + a = kitaba.'},
    practice:{en:['Look at kitap.','Soften p to b → kitab.','Build: kitab + a = kitaba.'],id:['Lihat kitap.','Lembutkan p menjadi b → kitab.','Susun: kitab + a = kitaba.']}
  },
  dative_softened_kopek:{
    main:{en:'köpek becomes köpeğ before the “to” block, then add -e: köpeğ + e = köpeğe (to the dog).',id:'köpek menjadi köpeğ sebelum blok “ke”, lalu tambahkan -e: köpeğ + e = köpeğe (ke anjing).'},
    hear:{en:'Listen: köpek → köpeğe. The k softens to ğ.',id:'Dengarkan: köpek → köpeğe. Bunyi k melembut menjadi ğ.'},
    mistake:{en:'Do not build köpeke. Use köpeğ + e = köpeğe.',id:'Jangan susun köpeke. Gunakan köpeğ + e = köpeğe.'},
    practice:{en:['Look at köpek.','Soften k to ğ → köpeğ.','Build: köpeğ + e = köpeğe.'],id:['Lihat köpek.','Lembutkan k menjadi ğ → köpeğ.','Susun: köpeğ + e = köpeğe.']}
  },
  multi_suffix_basic:{
    main:{en:'Stack blocks in order: word first, then plural (-ler/-lar), then “my/our”. ev + ler + im = evlerim (my houses).',id:'Susun blok berurutan: kata dulu, lalu jamak (-ler/-lar), lalu “milik saya/kami”. ev + ler + im = evlerim (rumah-rumah saya).'},
    hear:{en:'After the plural -ler, the “my” block becomes -im (matching the e), not -üm. Listen: evler → evlerim.',id:'Setelah jamak -ler, blok “milik saya” menjadi -im (cocok dengan e), bukan -üm. Dengarkan: evler → evlerim.'},
    mistake:{en:'Do not put “my” before the plural. The order is word + plural + my.',id:'Jangan letakkan “milik saya” sebelum jamak. Urutannya kata + jamak + milik saya.'},
    practice:{en:['Start with the word: ev.','Add plural: ler.','Add “my”: im → evlerim.'],id:['Mulai dari kata: ev.','Tambahkan jamak: ler.','Tambahkan “milik saya”: im → evlerim.']}
  },
  multi_suffix_case:{
    main:{en:'Add the place block (-de/-da) at the very end: ev + ler + imiz + de = evlerimizde (in our houses).',id:'Tambahkan blok tempat (-de/-da) di paling akhir: ev + ler + imiz + de = evlerimizde (di rumah-rumah kami).'},
    hear:{en:'Build left to right: word, plural, “our”, then place. Each block keeps its order.',id:'Susun dari kiri ke kanan: kata, jamak, “milik kami”, lalu tempat. Setiap blok menjaga urutannya.'},
    mistake:{en:'The place block comes last, after “our”. Do not put it earlier.',id:'Blok tempat datang terakhir, setelah “milik kami”. Jangan letakkan lebih awal.'},
    practice:{en:['Build plural + “our”: evlerimiz.','Add the place block: de.','Result: evlerimizde.'],id:['Susun jamak + “milik kami”: evlerimiz.','Tambahkan blok tempat: de.','Hasil: evlerimizde.']}
  }
};

let _reviewCache=null;
export function reviewDataset(){
  if(_reviewCache) return _reviewCache;
  const pool=[...ROOT_WORDS,...COLORS,...FAMILY,...GREETINGS];
  for(let i=pool.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [pool[i],pool[j]]=[pool[j],pool[i]]; }
  _reviewCache=pool.slice(0,12);
  return _reviewCache;
}
export function datasetFor(topicId){
  if(topicId==='alphabet') return ALPHABET_PRO;
  if(topicId==='root_words') return ROOT_WORDS;
  if(topicId==='meaning_builder') return MEANING_BUILDER;
  if(topicId==='whose_builder') return WHOSE_BUILDER;
  if(topicId==='plural_builder') return PLURAL_BUILDER;
  if(topicId==='accusative_builder') return ACCUSATIVE_BUILDER;
  if(topicId==='dative_builder') return DATIVE_BUILDER;
  if(topicId==='combo_builder') return COMBO_BUILDER;
  if(topicId==='greetings') return GREETINGS;
  if(topicId==='colors') return COLORS;
  if(topicId==='family') return FAMILY;
  if(topicId==='deconstruct') return DECONSTRUCT;
  if(topicId==='review') return reviewDataset();
  return [];
}
export function topicById(id){ return TOPICS.find(t=>t.id===id) || null; }
// Exclude the 'review' topic: it reuses other items, so it must not double-count in progress/audit.
export function allLessonItems(){ return TOPICS.filter(t=>t.type!=='review').flatMap(topic => datasetFor(topic.id).map(item => ({...item, topicId:topic.id, topicType:topic.type}))); }