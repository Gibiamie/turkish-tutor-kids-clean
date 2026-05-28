# Turkish Meaning Builder — RC6 Professional

This package replaces the previous single-file prototype with a GitHub Pages compatible modular app.

## RC6 Scope
- Profile-based learner flow: Bella, Ayza, Adult, Guest
- Separate progress scope by profile + language + mode
- Backend-ready progress store with local fallback
- Clean i18n layer for English and Bahasa Indonesia
- No final answer reveal before solving builder lessons
- Audio QA distinction: expected route vs human pronunciation verification
- Special rule for ğ: no isolated ğ audio; teach only through real word examples

## Deployment
Upload all files and folders in this package to the GitHub repository root.
Open:
- Normal app: https://gibiamie.github.io/turkish-tutor-kids-clean/
- QA mode: https://gibiamie.github.io/turkish-tutor-kids-clean/?qa=1

## Backend note
RC6 is backend-ready but still uses local fallback because Supabase keys/database are not connected yet.
RC7 should connect Supabase tables: profiles, progress, lesson_attempts, audio_verification.
