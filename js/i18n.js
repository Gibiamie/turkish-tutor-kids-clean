export const LANGS = {
  en: { code: 'en', native: 'English', uiName: 'English' },
  id: { code: 'id', native: 'Bahasa Indonesia', uiName: 'Indonesia' }
};

const DICT = {
  en: {
    appTitle: 'Turkish Meaning Builder', version: 'v1 Release Candidate 9',
    selectProfile: 'Choose learner profile', selectProfileSub: 'Each learner has a separate language, mode, and progress record.',
    profileBella: 'Bella', profileBellaSub: 'English guidance · Kids mode', profileAyza: 'Ayza', profileAyzaSub: 'Bahasa Indonesia · Kids mode',
    profileAdult: 'Adult', profileAdultSub: 'Adult learning path', profileGuest: 'Guest', profileGuestSub: 'Temporary local progress',
    language: 'Language', learnerMode: 'Learner mode', kids: 'Kids', family: 'Family', adult: 'Adult',
    changeProfile: 'Change profile', settings: 'Settings', close: 'Close', save: 'Save', back: 'Back', home: 'Home', dashboard: 'Dashboard', profile: 'Profile', learningPath: 'Learning path', resetProgress: 'Reset progress',
    start: 'Start', continue: 'Continue', completed: 'Completed', complete: 'Complete', lessons: 'Lessons', done: 'Done', dayStreak: 'Day streak',
    item: 'Item', of: 'of', previous: 'Previous', next: 'Next', finishTopic: 'Finish topic', mainPage: 'Dashboard',
    listen: 'Listen', mainSound: 'Main sound', exampleWord: 'Example word', contrastSound: 'Contrast sound', extraExample: 'Extra example',
    practiceDone: 'Practice done', alreadyKnow: 'I already know this', needsMorePractice: 'Needs more practice', startPractice: 'Start practice',
    practiceRule: 'Listen or practice first. Then choose one learning action.', practiceFirstWarning: 'Please listen or practice this item once before moving forward or marking it known.', practiceBeforeNext: 'This item is not complete yet. Listen or practice once, then press Practice done.', practiceSaved: 'Practice saved. You can continue.', alreadyKnowSaved: 'Marked as already known after practice.', needsMoreSaved: 'Saved for extra practice.',
    answerHere: 'Build your answer here', clear: 'Clear', check: 'Check', correct: 'Correct. Great work.', wrong: 'Try again. Build from left to right.', tryAgain: 'Not quite — listen again and try.',
    audioLocked: 'Audio unlocks after the correct answer.', audioMissing: 'Audio file not configured.', audioLoading: 'Loading sound…', audioPlaying: 'Playing…', audioReady: 'Ready to replay.', audioError: 'Audio file could not be loaded.', audioTapAgain: 'Tap again to play sound.',
    layaGuide: 'Laya guide', learnWhy: 'Learn why', thisWord: 'This word', keyRule: 'Key idea', whatHear: 'What should I hear?', mouthTip: 'Mouth / sound tip', commonMistake: 'Common mistake', miniPractice: 'Mini practice', contrast: 'Contrast',
    progressSavedFor: 'Progress saved for', noFinalAnswer: 'Final answer is hidden until you solve it.', greetingPraise: 'Great job!', greetingProgress: 'You’re doing amazing!', buildPrompt: 'Choose the blocks in the correct order.', builtMeaning: 'Great job! You built the meaning!', successTitle: 'Great!',
    qaMode: 'QA Mode', qaSub: 'Developer-only checks. Open with ?qa=1.', qaAudioStatus: 'Audio verification', qaProgressStatus: 'Progress scope', qaRouteExpected: 'Expected in repo', qaVerified: 'Pronunciation verified', qaNotVerified: 'Needs human pronunciation approval', qaIntentionalNoAudio: 'Intentional: no isolated sound. Teach through real words.', qaImage: 'Image', qaPath: 'Path', qaItem: 'Item'
  },
  id: {
    appTitle: 'Penyusun Makna Bahasa Turki', version: 'v1 Kandidat Rilis 9',
    selectProfile: 'Pilih profil pelajar', selectProfileSub: 'Setiap pelajar memiliki bahasa, mode, dan progres yang terpisah.',
    profileBella: 'Bella', profileBellaSub: 'Panduan bahasa Inggris · Mode anak', profileAyza: 'Ayza', profileAyzaSub: 'Bahasa Indonesia · Mode anak',
    profileAdult: 'Dewasa', profileAdultSub: 'Jalur belajar dewasa', profileGuest: 'Tamu', profileGuestSub: 'Progres lokal sementara',
    language: 'Bahasa', learnerMode: 'Mode pelajar', kids: 'Anak', family: 'Keluarga', adult: 'Dewasa',
    changeProfile: 'Ganti profil', settings: 'Pengaturan', close: 'Tutup', save: 'Simpan', back: 'Kembali', home: 'Beranda', dashboard: 'Beranda', profile: 'Profil', learningPath: 'Jalur belajar', resetProgress: 'Hapus progres',
    start: 'Mulai', continue: 'Lanjutkan', completed: 'Selesai', complete: 'Selesai', lessons: 'Pelajaran', done: 'Dikerjakan', dayStreak: 'Hari beruntun',
    item: 'Nomor', of: 'dari', previous: 'Sebelumnya', next: 'Berikutnya', finishTopic: 'Selesaikan topik', mainPage: 'Beranda',
    listen: 'Dengarkan', mainSound: 'Bunyi utama', exampleWord: 'Contoh kata', contrastSound: 'Bunyi pembanding', extraExample: 'Contoh lain',
    practiceDone: 'Latihan selesai', alreadyKnow: 'Saya sudah tahu', needsMorePractice: 'Perlu latihan lagi', startPractice: 'Mulai latihan',
    practiceRule: 'Dengarkan atau latihan dulu. Setelah itu pilih satu aksi belajar.', practiceFirstWarning: 'Dengarkan atau latih item ini satu kali dulu sebelum lanjut atau menandai sudah tahu.', practiceBeforeNext: 'Item ini belum selesai. Dengarkan atau latihan satu kali, lalu tekan Latihan selesai.', practiceSaved: 'Latihan tersimpan. Kamu bisa lanjut.', alreadyKnowSaved: 'Ditandai sudah tahu setelah latihan.', needsMoreSaved: 'Disimpan untuk latihan tambahan.',
    answerHere: 'Susun jawaban di sini', clear: 'Hapus', check: 'Periksa', correct: 'Benar. Bagus sekali.', wrong: 'Coba lagi. Susun dari kiri ke kanan.', tryAgain: 'Belum tepat — dengarkan lagi lalu coba.',
    audioLocked: 'Audio terbuka setelah jawaban benar.', audioMissing: 'File audio belum dikonfigurasi.', audioLoading: 'Memuat suara…', audioPlaying: 'Memutar…', audioReady: 'Siap diputar lagi.', audioError: 'File audio tidak dapat dimuat.', audioTapAgain: 'Ketuk lagi untuk memutar suara.',
    layaGuide: 'Panduan Laya', learnWhy: 'Pelajari alasannya', thisWord: 'Kata ini', keyRule: 'Ide utama', whatHear: 'Apa yang perlu didengar?', mouthTip: 'Petunjuk mulut / bunyi', commonMistake: 'Kesalahan umum', miniPractice: 'Latihan kecil', contrast: 'Perbandingan',
    progressSavedFor: 'Progres tersimpan untuk', noFinalAnswer: 'Jawaban akhir disembunyikan sampai kamu menyelesaikannya.', greetingPraise: 'Hebat!', greetingProgress: 'Kamu semakin maju.', buildPrompt: 'Pilih blok dalam urutan yang benar.', builtMeaning: 'Hebat! Kamu berhasil menyusun maknanya!', successTitle: 'Hebat!',
    qaMode: 'Mode QA', qaSub: 'Pemeriksaan khusus pengembang. Buka dengan ?qa=1.', qaAudioStatus: 'Verifikasi audio', qaProgressStatus: 'Ruang progres', qaRouteExpected: 'Diharapkan ada di repo', qaVerified: 'Pelafalan sudah diverifikasi', qaNotVerified: 'Perlu persetujuan pelafalan manusia', qaIntentionalNoAudio: 'Sengaja: tidak ada bunyi terpisah. Ajarkan melalui kata nyata.', qaImage: 'Gambar', qaPath: 'Jalur', qaItem: 'Item'
  }
};

export function t(lang, key){ return (DICT[lang] && DICT[lang][key]) || DICT.en[key] || key; }
export function localized(value, lang){
  if(value == null) return '';
  if(typeof value === 'string') return value;
  return value[lang] || value.en || value.id || '';
}