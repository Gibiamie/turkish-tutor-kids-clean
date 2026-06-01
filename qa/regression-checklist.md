# Regression Checklist

Status: mandatory after every code, CSS, data, audio, UI, content or routing change.

This file exists to prevent repeated regressions and to stop the project from moving backward.

## 1. Previously failed critical items

| ID | Regression risk | Required result |
|---|---|---|
| REG-001 | `ğ` appears bold, different font, red, isolated or visually special | Must not happen. |
| REG-002 | `u` plays the wrong audio | `u` must use `audio/pronunciation_tr_u.mp3`. |
| REG-003 | `c` has no approved example audio | `c` must use approved `cam` example audio. |
| REG-004 | `kitap + ım` shown as builder form | Must use `kitab + ım` where required. |
| REG-005 | `köpek + i` shown as builder form | Must use `köpeğ + i` where required. |
| REG-006 | EN and ID UI labels are mixed | Must not happen. |
| REG-007 | Learn Why returns to one-line weak explanation | Must not happen in final release. |
| REG-008 | Fixed bottom navigation covers lesson content | Must not happen. |
| REG-009 | Fun Zone, Rewards, Learn, Play or other non-working buttons are visible | Must not happen. |
| REG-010 | Settings becomes filler or confusing | Must not happen. |
| REG-011 | Final answer appears before solving | Must not happen. |
| REG-012 | Wrong answer reveals the correct answer | Must not happen. |
| REG-013 | `I already know this` can be abused as progress without practice | Must not happen. |
| REG-014 | Runtime patch files are used as final architecture | Must not happen without explicit owner approval. |
| REG-015 | `/admin` route or frontend-only admin protection is introduced | Must not happen. |

## 2. Turkish typography QA

Check these strings visually in the live UI after any CSS or UI update:

- `ğ`
- `dağ`
- `ağaç`
- `soğuk`
- `öğretmen`
- `köpeğ`
- `köpeği`
- `kitab`
- `kitabım`
- `arabası`
- `arabamız`
- `arabanız`
- `arabaları`
- `şeker`
- `çok`
- `üzgünüm`
- `altı`
- `iki`

Required result:

- Same font family.
- No broken glyph fallback.
- No random bold character.
- No wrong visual emphasis.
- No text overlap.

## 3. EN path QA

Open Bella / EN and check:

- Dashboard labels are English.
- Continue button is English.
- Stats labels are English.
- Settings labels are English.
- Lesson labels are English.
- Learn Why content is English.
- No Indonesian UI label appears unexpectedly.

## 4. ID path QA

Open Ayza / ID and check:

- Dashboard labels are Bahasa Indonesia.
- Continue button is Bahasa Indonesia.
- Stats labels are Bahasa Indonesia.
- Settings labels are Bahasa Indonesia.
- Lesson labels are Bahasa Indonesia.
- Learn Why content is Bahasa Indonesia.
- No English UI label remains, including Complete, Lessons, Done, Day Streak, Dashboard, Profile, Builder, Continue, Settings or Great job.

## 5. Builder QA

For every builder topic:

- Prompt is shown.
- Final answer is hidden before solve.
- Options are pedagogically valid.
- Wrong answer does not reveal final answer.
- Correct answer reveals final answer.
- Audio unlocks only after correct answer unless owner-approved otherwise.
- Next item is blocked until the item is solved where required.
- Last item uses Finish Topic or equivalent, not misleading Next.

## 6. Navigation QA

- Dashboard route works.
- Profile/Settings works.
- Lesson previous works.
- Lesson next works according to progress rules.
- Lesson Dashboard returns to dashboard.
- No unimplemented visible route exists.
- No fixed navigation covers content.

## 7. Admin QA

- No `/admin` route is introduced.
- No hidden frontend password is used.
- No admin button appears for normal learners.
- Admin architecture follows `/_studio` plus backend role check.
- Unauthorized users should not be told that an admin panel exists.

## 8. Release status

If any item fails, mark release as blocked and fix before continuing.