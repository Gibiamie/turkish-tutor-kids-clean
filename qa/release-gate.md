# RC9 Release Gate

Status: mandatory before any final release or final code response.

No code, CSS, data, audio, UI, admin, route or content change may be called final unless this gate is completed.

## A. Constitution Impact Check

Before changing anything, answer these questions:

| Check | Pass rule |
|---|---|
| Does the change affect Turkish pronunciation, spelling, sound behavior or meaning? | If yes, Pedagogical QA is mandatory. |
| Does the change affect UI, CSS, font, size, color, animation or layout? | If yes, treat it as a pedagogical change. |
| Does the change affect EN or ID learner path? | If yes, both Bella EN and Ayza ID screens must be checked. |
| Does the change affect progress or learner actions? | If yes, Practice done / I already know this / Needs more practice rules must be checked. |
| Does the change add a button, menu, route or card? | It must work or be explicitly locked/hidden with owner approval. |
| Does the change affect audio? | MP3 path and owner approval status must be checked. |
| Does the change affect admin or content editing? | It must follow the `/_studio` and backend role-control architecture. |

## B. Mandatory Regression Checks

These checks are required because they have failed before:

| Area | Required check |
|---|---|
| Turkish glyphs | `ğ, ş, ç, ı, İ, ö, ü` render consistently. |
| Soft g | `ğ` is not isolated, exaggerated, randomly bold, red or shown as a hard sound. |
| Known words | Check `dağ`, `ağaç`, `soğuk`, `öğretmen`, `köpeğ`, `köpeği`, `kitab`, `kitabım`. |
| U sound | `u` uses `audio/pronunciation_tr_u.mp3`. |
| C sound | `c` example uses approved `cam` audio. |
| Builder forms | `kitab + ım`, `köpeğ + i`, `araba + sı`, `araba + mız`, `araba + nız`, `araba + ları` are correct. |
| EN/ID separation | Ayza/ID has no English UI labels. Bella/EN has no Indonesian UI labels unless deliberately in ID content. |
| Learn Why | No weak one-line explanation in final release. |
| Navigation | No fixed nav covers content. |
| Buttons | No non-functional visible button. |
| Settings | No filler content or confusing language switch behavior. |
| Answer reveal | Final answer stays hidden until solved. |
| Wrong answer | Correct answer is not revealed immediately. |
| Audio unlock | Builder audio unlocks only after correct answer unless a lesson rule says otherwise. |

## C. Screen QA Matrix

Every release must check the following screens where relevant:

1. Profile select.
2. Bella dashboard EN.
3. Ayza dashboard ID.
4. Settings/Profile modal.
5. Alphabet Pro.
6. Root Words.
7. Meaning Builder.
8. Whose Builder.
9. More Than One Builder.
10. Object Builder.
11. Audio QA behavior.
12. Progress logic.
13. Mobile layout.
14. Laptop/desktop layout.

## D. Release Decision

A release may be accepted only if all of these are true:

- No constitution rule is violated.
- No known regression returns.
- No unimplemented learner-facing feature is visible.
- Audio status is not guessed.
- EN/ID paths remain separate.
- Turkish character and typography QA passed.
- User-approved decisions were not changed.

If any item fails, the release is blocked and must be fixed before moving forward.