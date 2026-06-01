# Turkish Meaning Builder — Project Constitution

Status: binding project governance document.  
Applies to all code, CSS, data, content, audio, UI, admin, QA and release changes.  
Change rule: this document may only be changed with explicit written approval from the project owner.

## 1. Core product red lines

1. Never teach wrong Turkish pronunciation, spelling, sound behavior or meaning.
2. Never reveal the final answer before the learner solves the exercise.
3. Never mark audio as verified unless the project owner has listened to and approved it.
4. Never rely on TTS as verified Turkish pronunciation.
5. Never silently disable an item because MP3 is missing. First report the missing word and ask whether to provide MP3, replace the item or remove it from scope.
6. Never mix English and Indonesian learner paths on the learner screen.
7. Never show unimplemented buttons, inactive routes or fake features to learners.
8. Never use runtime patch files or temporary workaround scripts as release solutions without explicit owner approval.
9. Never call code final unless the release gate and regression checklist have passed.

## 2. Language path rules

1. Bella is the default English learner path.
2. Ayza is the default Indonesian learner path.
3. English path screens must use English UI labels and English guidance.
4. Indonesian path screens must use Bahasa Indonesia UI labels and Bahasa Indonesia guidance.
5. Indonesian screens must not contain English UI labels such as Complete, Lessons, Done, Day Streak, Dashboard, Profile, Builder, Continue, Settings or Great job.
6. If language is changed in the future, it must not corrupt the profile path. Language/profile behavior requires explicit owner approval.

## 3. Pedagogy rules

1. Learner screens must avoid grammar jargon such as possessive, suffix, pronoun, vowel harmony, consonant mutation, iyelik eki, zamir and ozne.
2. Grammar terms may exist only in admin/backend notes or optional adult/deeper explanation sections approved by the owner.
3. Use natural learning: sound, image, meaning, context and guided comparison.
4. Learn Why must not be a weak one-line explanation. It must include meaningful guidance such as key idea, what to hear, common mistake and mini practice where relevant.
5. The learner must solve before the final answer is revealed.
6. Wrong answers must not immediately expose the correct answer.
7. Builder intermediate forms must be correct. Do not show `kitap + im` for `kitabim`; use `kitab + im`. Do not show `kopek + i` for `kopegi`; use `kopeg + i` in the safe ASCII note and the proper Turkish spelling in the actual app.
8. Changed intermediate forms such as `kitab` and `köpeğ` may be shown only as correct building forms and must not visually imply a wrong pronunciation.

## 4. Turkish character and typography rules

1. Turkish characters `ğ, ş, ç, ı, İ, ö, ü` must render consistently in the same font family.
2. `ğ` must not appear as an isolated sound lesson.
3. `ğ` must not be visually exaggerated, randomly bolded, red, enlarged or made to look like a hard pronounced sound.
4. Words such as `dağ`, `ağaç`, `soğuk`, `öğretmen`, `köpeğ`, `köpeği`, `kitab`, `kitabım` must pass visual QA after any CSS/UI change.
5. Any UI/CSS change is treated as a pedagogical change because font weight, size, color, icon, animation and layout can change learning behavior.

## 5. Progress and learner action rules

1. Progress must reflect real learning actions or completed exercises.
2. `I already know this` is not a direct substitute for lesson progress.
3. The learner must complete at least one practice action before `I already know this` can mark an item as known/skipped.
4. `Needs more practice` must record the item for extra practice and make it appear more frequently in review.
5. `Practice done`, `I already know this` and `Needs more practice` must remain conceptually separate.

## 6. Audio QA rules

1. Audio files must exist at the declared path.
2. Human approval by the project owner is required before audio is marked approved.
3. Approved audio must be logged as User Approved and Uploaded.
4. Missing or problematic audio blocks release for that item.
5. Audio should unlock only after the correct answer in builder-style exercises unless a specific lesson type requires listening first and this is owner-approved.

## 7. UI/UX rules

1. Mobile-first clean UX is mandatory.
2. Desktop/laptop layout must not appear as a giant blown-up mobile screen.
3. Fixed navigation must not cover content.
4. Decorative icons, butterflies and mascot elements must never cover text.
5. Settings must not be filled with unnecessary placeholder content.
6. Buttons must have clear meaning. `Home` should be avoided where `Dashboard` or `Beranda` is clearer.
7. Fun Zone, Rewards, Learn or any other navigation item may only appear if it works or is explicitly displayed as unavailable/locked with owner approval.

## 8. Admin and access-control rules

1. `/admin` will not be used as the admin route.
2. The approved admin route name is `/_studio`.
3. `/_studio` is only a visibility choice, not an access-control mechanism.
4. Real admin protection must use backend authentication and role-based authorization.
5. Only users with `role = admin` may access admin functions.
6. Admin write permissions must be enforced by backend policy, not frontend-only code.
7. Normal users must not see admin buttons, admin links, admin routes, publish controls or QA controls.
8. Unauthorized access should behave like `404 Not Found` where possible.
9. GitHub Pages must not contain a hidden local-password admin panel.

## 9. Release rule

No change may be called final unless:

1. Constitution Impact Check is completed.
2. Regression Checklist is completed.
3. EN path and ID path are both checked.
4. Turkish character visual QA is completed.
5. Audio path QA is completed where relevant.
6. No unimplemented button is visible.
7. Previously approved owner decisions are not changed.

If any requirement fails, the release is blocked.