# Turkish Meaning Builder — RC9

A GitHub Pages compatible, modular Turkish learning app for kids and adults.

## Scope
- Profile-based learner flow: Bella, Ayza, Adult, Guest
- Separate progress scope by profile + language + mode
- Real day-streak tracking per profile (local storage)
- Backend-ready progress store with local fallback
- Clean i18n layer for English and Bahasa Indonesia
- No final answer reveal before solving builder lessons
- Audio QA distinction: expected route vs human pronunciation verification
- Special rule for ğ: no isolated ğ audio; teach only through real word examples
- Turkish-safe typography system (css/typography.css)

## Deployment
Upload all files and folders in this package to the GitHub repository root.
Open:
- Normal app: https://gibiamie.github.io/turkish-tutor-kids-clean/
- QA mode: https://gibiamie.github.io/turkish-tutor-kids-clean/?qa=1

## Backend note
RC9 is backend-ready but still uses local fallback because Supabase keys/database are not connected yet.
A future release should connect Supabase tables: profiles, progress, lesson_attempts, audio_verification.

## Governance
See `project-constitution.md` and the `qa/` folder (`known-critical-rules.md`,
`regression-checklist.md`, `release-gate.md`) before any release statement.
