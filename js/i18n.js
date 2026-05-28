export const LANGS = {
  en: { code: 'en', native: 'English', uiName: 'English' },
  id: { code: 'id', native: 'Bahasa Indonesia', uiName: 'Indonesian' }
};

const DICT = {
  en: {
    appTitle: 'Turkish Meaning Builder',
    version: 'v1 Release Candidate 6',
    selectProfile: 'Choose learner profile',
    selectProfileSub: 'Each learner has a separate language, mode, and progress record.',
    profileBella: 'Bella', profileBellaSub: 'English guidance · Kids mode',
    profileAyza: 'Ayza', profileAyzaSub: 'Bahasa Indonesia · Mode anak',
    profileAdult: 'Adult', profileAdultSub: 'Choose English or Indonesian',
    profileGuest: 'Guest', profileGuestSub: 'Temporary local progress',
    language: 'Language', learnerMode: 'Learner mode', kids: 'Kids', family: 'Family', adult: 'Adult',
    homeTitle: 'Build Turkish step by step',
    homeSub: 'Five clean starter topics with safe audio, separate progress, and no answer reveal before solving.',
    changeProfile: 'Change profile', settings: 'Settings', close: 'Close', save: 'Save', back: 'Back', home: 'Home',
    start: 'Start', continue: 'Continue', completed: 'Completed', reset: 'Delete this profile progress',
    item: 'Item', of: 'of', previous: 'Previous', next: 'Next', mainPage: 'Main page',
    listen: 'Listen', mainSound: 'Main sound', exampleWord: 'Example word', contrastSound: 'Contrast sound',
    extraExample: 'Extra example', know: 'I know this', answerHere: 'Build your answer here', clear: 'Clear', check: 'Check',
    correct: 'Correct. Great work.', wrong: 'Try again. Build from left to right.',
    audioLocked: 'Audio unlocks after the correct answer.', audioMissing: 'Audio file not configured.', audioLoading: 'Loading sound…', audioPlaying: 'Playing…', audioReady: 'Ready to replay.', audioError: 'Audio file could not be loaded.', audioTapAgain: 'Tap again to play sound.',
    layaGuide: 'Laya guide', learnWhy: 'Learn why', keyRule: 'Key rule', whatHear: 'What should I hear?', mouthTip: 'Mouth / sound tip', commonMistake: 'Common mistake', miniPractice: 'Mini practice', contrast: 'Contrast',
    progressSavedFor: 'Progress saved for', noFinalAnswer: 'Final answer is hidden until you solve it.',
    qaMode: 'QA Mode', qaSub: 'Developer-only checks. Open with ?qa=1.', qaAudioStatus: 'Audio verification', qaProgressStatus: 'Progress scope', qaRouteExpected: 'Expected in repo', qaVerified: 'Pronunciation verified', qaNotVerified: 'Needs human pronunciation approval', qaIntentionalNoAudio: 'Intentional: no isolated sound. Teach through real words.', qaImage: 'Image', qaPath: 'Path', qaItem: 'Item'
  },
  id: {
    appTitle: 'Penyusun Makna Bahasa Turki',
    version: 'v1 Kandidat Rilis 6',
    selectProfile: 'Pilih profil pelajar',
    selectProfileSub: 'Setiap pelajar memiliki bahasa, mode, dan progres yang terpisah.',
    profileBella: 'Bella', profileBellaSub: 'Panduan bahasa Inggris · Mode anak',
    profileAyza: 'Ayza', profileAyzaSub: 'Bahasa Indonesia · Mode anak',
    profileAdult: 'Dewasa', profileAdultSub: 'Pilih bahasa Inggris atau Indonesia',
    profileGuest: 'Tamu', profileGuestSub: 'Progres lokal sementara',
    language: 'Bahasa', learnerMode: 'Mode pelajar', kids: 'Anak', family: 'Keluarga', adult: 'Dewasa',
    homeTitle: 'Bangun bahasa Turki langkah demi langkah',
    homeSub: 'Lima topik awal yang rapi, audio aman, progres terpisah, dan tanpa membocorkan jawaban sebelum selesai.',
    changeProfile: 'Ganti profil', settings: 'Pengaturan', close: 'Tutup', save: 'Simpan', back: 'Kembali', home: 'Beranda',
    start: 'Mulai', continue: 'Lanjutkan', completed: 'Selesai', reset: 'Hapus progres profil ini',
    item: 'Nomor', of: 'dari', previous: 'Sebelumnya', next: 'Berikutnya', mainPage: 'Halaman utama',
    listen: 'Dengarkan', mainSound: 'Bunyi utama', exampleWord: 'Contoh kata', contrastSound: 'Bunyi pembanding',
    extraExample: 'Contoh lain', know: 'Saya sudah tahu', answerHere: 'Susun jawaban di sini', clear: 'Hapus', check: 'Periksa',
    correct: 'Benar. Bagus sekali.', wrong: 'Coba lagi. Susun dari kiri ke kanan.',
    audioLocked: 'Audio terbuka setelah jawaban benar.', audioMissing: 'File audio belum dikonfigurasi.', audioLoading: 'Memuat suara…', audioPlaying: 'Memutar…', audioReady: 'Siap diputar lagi.', audioError: 'File audio tidak dapat dimuat.', audioTapAgain: 'Ketuk lagi untuk memutar suara.',
    layaGuide: 'Panduan Laya', learnWhy: 'Pelajari alasannya', keyRule: 'Aturan utama', whatHear: 'Apa yang harus saya dengar?', mouthTip: 'Petunjuk mulut / bunyi', commonMistake: 'Kesalahan umum', miniPractice: 'Latihan kecil', contrast: 'Perbandingan',
    progressSavedFor: 'Progres tersimpan untuk', noFinalAnswer: 'Jawaban akhir disembunyikan sampai kamu menyelesaikannya.',
    qaMode: 'Mode QA', qaSub: 'Pemeriksaan khusus pengembang. Buka dengan ?qa=1.', qaAudioStatus: 'Verifikasi audio', qaProgressStatus: 'Ruang progres', qaRouteExpected: 'Diharapkan ada di repo', qaVerified: 'Pelafalan sudah diverifikasi', qaNotVerified: 'Perlu persetujuan pelafalan manusia', qaIntentionalNoAudio: 'Sengaja: tidak ada bunyi terpisah. Ajarkan melalui kata nyata.', qaImage: 'Gambar', qaPath: 'Jalur', qaItem: 'Item'
  }
};

export function t(lang, key){ return (DICT[lang] && DICT[lang][key]) || DICT.en[key] || key; }
export function localized(value, lang){
  if(value == null) return '';
  if(typeof value === 'string') return value;
  return value[lang] || value.en || value.id || '';
}
