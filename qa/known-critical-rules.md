# Known Critical Rules

Status: binding checklist of decisions that must not be forgotten.

## 1. Product red lines

- Pronunciation accuracy is the highest priority.
- Do not teach wrong sound, wrong spelling or wrong meaning.
- Do not reveal answers before solving.
- Do not mix EN and ID paths.
- Do not show unimplemented learner-facing features.
- Do not use temporary runtime patches as final architecture.

## 2. Profile and language decisions

- Bella is the default English path.
- Ayza is the default Indonesian path.
- EN path and ID path must remain separate.
- ID path must not show English UI labels.
- Future login/onboarding may introduce user-entered display names, but this requires separate approval.

## 3. Turkish sound and spelling decisions

- `ğ` is not taught as an isolated sound.
- `ğ` does not begin Turkish words.
- Teach `ğ` through real words such as `dağ`, `ağaç`, `soğuk`, `öğretmen`, `köpeği`.
- `ğ` must not be shown as a hard or stressed sound.
- `c` example must be clear; use `cam` when approved audio exists. Do not use `eczane` as the core c example because the c can disappear in common speech.
- `u` must use the corrected and owner-approved `pronunciation_tr_u.mp3`.

## 4. Builder spelling decisions

- Use correct intermediate builder forms.
- `kitap` may change to `kitab` before a vowel block.
- `köpek` may change to `köpeğ` before a vowel block.
- Do not show `kitap + ım = kitabım` as the builder construction.
- Do not show `köpek + i = köpeği` as the builder construction.
- Correct forms include:
  - `kitab + ım = kitabım`
  - `kitab + ım + da = kitabımda`
  - `köpeğ + i = köpeği`
  - `araba + sı = arabası`
  - `araba + mız = arabamız`
  - `araba + nız = arabanız`
  - `araba + ları = arabaları`

## 5. Progress decisions

- `Practice done`, `I already know this` and `Needs more practice` are separate actions.
- `I already know this` is blocked until the learner has completed at least one practice action.
- `I already know this` means known/skipped with future review, not proof of completed learning.
- `Needs more practice` must record the item for more frequent review.

## 6. Audio decisions

- Owner-approved audio may be treated as User Approved + Uploaded.
- Missing MP3 must be reported before disabling or replacing content.
- Audio QA must not be guessed.

## 7. Admin decisions

- `/admin` is rejected.
- `/_studio` is the approved admin route name.
- `/_studio` is not protection by itself.
- Real access control requires backend auth and role-based authorization.
- Normal learners must not see admin UI.
- GitHub Pages must not contain a local-only passcode gate for admin functions.

## 8. UI decisions

- Desktop/laptop must not look like an oversized mobile app.
- Bottom navigation must not cover content.
- Decorative butterflies and mascot elements must not cover text.
- Settings must remain functional and minimal.
- Fun Zone, Rewards, Learn and similar features must not be visible unless implemented or explicitly locked with owner approval.

## 9. Release discipline

Before any final release statement:

1. Open `project-constitution.md`.
2. Open `qa/release-gate.md`.
3. Open `qa/regression-checklist.md`.
4. Open this file.
5. Apply the checks.
6. State honestly what was checked and what still requires live/user verification.