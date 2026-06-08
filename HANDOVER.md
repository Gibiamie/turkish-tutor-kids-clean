# Turkish Meaning Builder — Project Handover

**Repo:** https://github.com/Gibiamie/turkish-tutor-kids-clean
**Live:** https://gibiamie.github.io/turkish-tutor-kids-clean/
**QA mode:** add `?qa=1` to the URL
**Version:** RC9 · **Branch:** `main` (single working branch) · **Last commit at handover:** `1b3dff8`
**Author identity for commits:** `Mert Alkan <mertalkaneng@gmail.com>`

This document is the single source of truth for handover. It lists every frozen decision,
non‑negotiable rule, the file structure, all approved content, open issues, and the exact
next step. Nothing previously approved is omitted.

---

## 1. What the app is

A static, dependency‑free, mobile‑first web app that teaches Turkish to **kids and adults**,
bilingual UI (**English** and **Bahasa Indonesia**). Pure vanilla JS ES modules + CSS, hosted
on GitHub Pages. No build step, no backend (local‑storage progress, "backend‑ready").

Teaching method: **meaning building with blocks** — learners assemble Turkish words from
root + suffix blocks (builders), plus recognition/recall vocab, a reverse "deconstruction"
mode, and a no‑score mixed review. A guide character (**Laya**, a dolphin) explains rules
**on demand**.

---

## 2. How to run / develop

- **No build.** Open `index.html` via any static server. Local: `python -m http.server 8765` then `http://127.0.0.1:8765/`.
- **Deploy:** push to `main` → GitHub Pages rebuilds in ~1–3 min. Always **hard‑refresh** (or close/reopen tab) — assets cache aggressively.
- **Node** (only needed for `node --check` syntax checks / headless QA): installed admin‑free as portable at `%LOCALAPPDATA%\node-portable\node-v22.14.0-win-x64`, already on Git Bash PATH (`~/.bashrc`) and user PATH.
- **Assets workflow:** the owner produces audio/images and uploads them (GitHub web or local copy into `audio/` and `images/`). The agent then wires them into `js/lessonData.js`, cleans/optimizes images, verifies, and pushes. Owner‑uploaded audio is treated as **User Approved + Uploaded** (verified).
- **Mobile control:** to drive a running local Claude Code session from a phone, run `/remote-control` (`/rc`) in the desktop terminal, then open `claude.ai/code` or the Claude mobile app **signed into the same account**. The desktop must stay awake, online, and the process running.

---

## 3. Current file structure

```
index.html                      # loads css/styles.css, css/typography.css, js/app.js (module)
README.md                       # RC9 overview
HANDOVER.md                     # this file
project-constitution.md         # governance (binding)
docs/RC9_ADMIN_ARCHITECTURE_SPEC.md
qa/known-critical-rules.md      # binding red‑lines (see §5)
qa/regression-checklist.md
qa/release-gate.md
css/
  styles.css                    # all layout/theme incl. adult-mode overrides, butterflies, hero
  typography.css                # Turkish-safe typography
js/
  app.js                        # entire UI: state, render, all topic renderers, click handler
  lessonData.js                 # TOPICS + all datasets + EXPLANATIONS + datasetFor/reviewDataset
  i18n.js                       # LANGS + DICT (en/id) + t()/localized()
  profiles.js                   # PROFILES (bella/ayza/adult/guest) + storage key
  progressStore.js              # Local progress + real day-streak; CloudProgressStore stub
  uiComponents.js               # esc, pct, progressBar, visual, explanationSheet
  audioRegistry.js              # USER_VERIFIED_AUDIO set + audio audit for QA panel
  qaPanel.js                    # ?qa=1 developer panel
assets/laya_dolphin_3d_transparent.png
images/  ev,okul,kitap,elma,kopek,goz,masa,araba,su,kalem .png   (10, transparent clay icons)
audio/   184 × pronunciation_tr_*.mp3
```
`.gstack/` is local tooling output and is **git‑ignored** — never commit it (it can contain session tokens).

---

## 4. Frozen decisions (approved this project — do not regress)

**Architecture / platform**
- Static modular app on GitHub Pages, no backend; progress in `localStorage`, schema `rc6.1`, key `tmb_rc6_progress__<profile>__<lang>__<mode>`.
- `js/app.js` is the whole app; never replace it with a placeholder/stub ("// temporary" once wiped the app — never again).
- Single deploy branch `main`. `.gstack/` git‑ignored.

**Profiles & language**
- Profiles: **Bella** (EN, kids) default, **Ayza** (ID, kids), **Adult** (EN, adult), **Guest** (EN, family).
- EN and ID are **separate paths**; ID path must **never** show English UI labels.
- `<html lang>` is set dynamically per profile.

**Learning model**
- Real **day‑streak** per profile (continues if active yesterday, resets after a missed day). No fake/hardcoded streak numbers.
- Three learning actions remain distinct: **Practice done**, **I already know this**, **Needs more practice**. "I already know" is blocked until ≥1 practice action.
- **Next** is enabled once the item is practiced (a correct answer, or listening); pressing Next then marks the item complete. Trying to advance with **no** practice shows a warning. (Builders: a correct build already completes the item.)
- **Laya is an on‑demand teacher.** Every builder shows a tappable Laya card with **"Learn why"** opening the full explanation sheet (Key idea · What should I hear? · Common mistake · Mini practice).
- **Hybrid explanations:** the sheet shows the item’s own formula at the top ("This word: kalem + e = kaleme") **plus** the general rule. Driven by each item’s `revealAfterCorrect`, so it scales without per‑word duplication.
- Explanations must **teach the rule**, never hand‑wave ("sounds natural" is banned). See §6 for the exact rules taught.
- **Butterfly celebration** (🦋) plays over the buttons on a correct answer (kids/family; hidden in adult mode).
- **Root Words** is two‑step: Learn (word+image+meaning+audio) → Recall mini‑test (hide word, pick the Turkish word for the picture/meaning, distractors from the same topic).
- **Deconstruction** mode ("What Does It Mean?"): show a Turkish word, pick its meaning.
- **Mixed Review**: 12 randomly mixed recall questions across vocab; **no score**; excluded from the dashboard total and audio audit so it never double‑counts.

**Content scope (approved)**
- Numbers **0–10** (sıfır included), numeral shown as the cue.
- Colors = **16**: the basic 11 (kırmızı, turuncu, sarı, yeşil, mavi, mor, pembe, kahverengi, gri, siyah, beyaz) + lacivert, turkuaz, bej, altın, gümüş.
- Animals = **8** (köpek, kedi, balık, kuş, at, inek, aslan, tavşan) — currently **emoji cues**; clay images pending (see §8).
- göz/plural image mismatch: **decision (A) = keep the single concept icon** (one image per noun, reused for all forms). Not a bug.
- Pronoun genitives (benim, senin, onun, bizim, sizin, onların) are taught as **fixed/irregular** forms (intentional, not rule‑derived).
- First plural lesson uses **only fully regular** examples (no saat/harf/kalp exceptions).

**Visual / UX**
- Object images must be **truly transparent** (real alpha) — never a baked checkerboard or solid background. Images are auto‑cleaned (flood‑fill) on upload, recentered to ~80% with even margins, resized to 768px, optimized.
- Image display uses `object-fit: contain` (whole object, no crop).
- Builder prompt = **frameless "hero"**: word leads on a soft gradient, the transparent image bleeds large from the bottom‑right corner (no thumbnail box).
- Per‑topic module card colors (each topic a distinct pastel tone).
- Success‑panel button sizes to content (e.g., "Dengarkan" must not clip).
- **Adult theme** (mode = adult): hide Laya mascot + butterflies, mute card/hero colors, relabel "Laya guide" → "Guide". Kids/family unchanged. Mode‑scoped via `<html data-mode="adult">`.

**Tooling / process**
- Audio/image filename convention (ASCII fold of Turkish): ç→c, ğ→g, ı→i, ö→o, ş→s, ü→u, İ→i, space→`_`. Audio: `audio/pronunciation_tr_<word>.mp3`. Image: `images/<word>.png`.
- Owner‑uploaded audio is added to `USER_VERIFIED_AUDIO` in `js/audioRegistry.js`.

---

## 5. Non‑negotiable rules (binding red‑lines)

From `qa/known-critical-rules.md` (authoritative) + decisions above. **Do not violate:**

1. **Pronunciation accuracy is the #1 priority.** Never teach a wrong sound, spelling, or meaning.
2. **Never fake audio.** If a form has no recorded audio, ship it **silent** (no Listen button, no "audio unlocks" hint) rather than reuse a different word’s sound. Report missing MP3s; never guess audio QA.
3. **Do not reveal the final answer before the learner solves it.**
4. **Do not mix EN and ID paths.** ID must not show English labels.
5. **Do not show unimplemented learner‑facing features** (this is why fake streaks were removed).
6. **No temporary runtime patches as final architecture** (no stub `app.js`).
7. **`ğ`:** not taught as an isolated sound; never word‑initial; taught only inside real words (dağ, ağaç, soğuk, öğretmen, köpeği); never a hard/stressed sound.
8. **`c` example:** use `cam` (approved audio). Do **not** use `eczane` as the core `c` example (c can drop in speech).
9. **Builder spelling (consonant softening before a vowel block):**
   - `kitap` → `kitab` (e.g., kitabı, kitabımda). Do **not** show `kitap + ı`.
   - `köpek` → `köpeğ` (köpeği, köpeğe). Do **not** show `köpek + i`.
   - Correct: `araba + sı/mız/nız/ları`.
10. **Progress actions** Practice done / I already know / Needs more practice stay separate; "Needs more practice" records the item for more review and must not silently mark mastery.
11. **Admin:** `/admin` rejected; approved route name is `/_studio`; route name alone is **not** protection (real auth required); learners must never see admin UI; no local‑only passcode gate on GitHub Pages.
12. **UI:** desktop must not look like an oversized mobile app; bottom nav must not cover content; mascot/butterflies must not cover text; no unimplemented "Fun Zone/Rewards/Learn" entries.
13. **Release discipline:** before any "done/release" claim, re‑read `project-constitution.md`, `qa/release-gate.md`, `qa/regression-checklist.md`, `qa/known-critical-rules.md`, apply the checks, and state honestly what was vs wasn’t live‑verified.

---

## 6. Approved grammar rules (exact wording taught)

These are baked into `EXPLANATIONS` and must stay rule‑based (no "sounds natural"):

- **Plural −ler/−lar:** last vowel `a, ı, o, u → −lar`; `e, i, ö, ü → −ler`. Caveat: works for most words; a few borrowed words are exceptions.
- **Possessive "my":** after a consonant `−im/−ım/−um/−üm` by last vowel (e/i→im, a/ı→ım, o/u→um, ö/ü→üm); after a vowel just `−m` (araba→arabam).
- **Locative "in/on/at":** vowel `a,ı,o,u → −da`, `e,i,ö,ü → −de`; if the word ends in a voiceless consonant (p, ç, t, k, …) the `d` hardens to `t` (park→parkta).
- **Accusative (object):** `−ı/−i/−u/−ü` by last vowel; after a vowel insert a `y` bridge (elma→elmayı).
- **Dative "to":** `−e/−a` by last vowel; `y` bridge after a vowel (araba→arabaya); softening (kitap→kitaba, köpek→köpeğe).
- **Softening rule (general):** final `p, ç, t, k → b, c, d, ğ` before a vowel block.
- **Suffix stacking order:** word → plural → possessive → case (ev + ler + imiz + de = evlerimizde); the possessive vowel harmonizes to the plural’s vowel.

---

## 7. Approved content inventory (15 topics, 133 non‑review items)

| Topic (id) | Type | Items |
|---|---|---|
| Alphabet Pro (`alphabet`) | alphabet | a, e, ı, i, o, ö, u, ü, c, ç, ş, ğ (12) |
| Root Words (`root_words`) | root | ev, okul, kitap, elma, köpek, göz, masa, araba, su, kalem (10) |
| Meaning Builder (`meaning_builder`) | builder | evim, evde, evimde, arabam, masamda, kalemimde, parkta, elimde, gözümde, kitabımda, yolculukta (11) |
| Whose? Builder (`whose_builder`) | builder | benim, senin, onun, bizim, sizin, onların, arabam, araban, arabası, arabamız, arabanız, arabaları (12) |
| More Than One (`plural_builder`) | builder | evler, kitaplar, köpekler, okullar, arabalar (5) |
| Object Builder (`accusative_builder`) | builder | elmayı, gazeteyi, kitabı, köpeği, arabayı (5) |
| To Where? Builder (`dative_builder`) | builder | eve, okula, kaleme, arabaya, suya, kitaba, köpeğe (7) |
| Suffix Stack (`combo_builder`) | builder | evlerim, arabalarım, gözlerim, evlerimiz, okullarımız, evlerimizde, arabalarımda, gecelerimizde (8) |
| Greetings (`greetings`) | vocab/emoji | merhaba, günaydın, iyi geceler, teşekkürler, rica ederim, lütfen, evet, hayır, hoşça kal, görüşürüz (10) |
| Colors (`colors`) | vocab/swatch | kırmızı, turuncu, sarı, yeşil, mavi, mor, pembe, kahverengi, gri, siyah, beyaz, lacivert, turkuaz, bej, altın, gümüş (16) |
| Numbers (`numbers`) | vocab/digit | sıfır…on, 0–10 (11) |
| Family (`family`) | vocab/emoji | anne, baba, bebek, çocuk, kadın, erkek, arkadaş, aile (8) |
| Animals (`animals`) | vocab/emoji | köpek, kedi, balık, kuş, at, inek, aslan, tavşan (8) |
| What Does It Mean? (`deconstruct`) | deconstruct | ev, okul, kitap, su, anne, merhaba, kırmızı, köpek, evde, evler (10) |
| Mixed Review (`review`) | review | 12 random items from root+colors+numbers+family+animals+greetings; no score |

**Color swatches (hex):** kırmızı #e23b3b, turuncu #ff6a00, sarı #ffe000, yeşil #2e9e4f, mavi #2f6fe0, mor #8e24aa, pembe #ff7ab0, kahverengi #8b5a2b, gri #9aa3ad, siyah #1c1c1c, beyaz #ffffff, lacivert #1a237e, turkuaz #1abc9c, bej #d9c2a0, altın #d4af37, gümüş #b8bcc4.

**Object images (10, transparent clay):** ev, okul, kitap, elma, köpek, göz, masa, araba, su, kalem. Used in Root Words (learn + recall cue), builder heroes, deconstruct cue.

---

## 8. Unresolved / open issues & backlog

1. **Animal clay images (pending owner assets).** Animals currently use emoji cues. To upgrade: produce clay icons matching the set and upload as `images/kedi.png, balik.png, kus.png, at.png, inek.png, tavsan.png, aslan.png` (köpek image already exists). Then the agent adds an `image:` field to each `ANIMALS` item (image overrides emoji) and removes the emoji.
   - **Image prompt:** "A single cute [ANIMAL], soft rounded 3D clay/plasticine style, glossy, bright candy colors matching a children's icon set, even soft lighting, centered, ~78% of frame with even margins, no text, no frame. Do NOT draw a checkerboard — use a FLAT SOLID pure‑magenta (#FF00FF) background (or true transparency), square 1024×1024." `[ANIMAL]` = cat/fish/bird/horse/cow/rabbit/lion.
2. **Adult theme polish (optional).** Adult mode hides mascot/butterflies and mutes colors, but the in‑content clay images and the playful "Merhaba, [name]! 👋" hero copy remain. Optional follow‑ups: a neutral hero line for adults and/or an adult‑specific (flat/photographic) image set. `family` mode currently behaves like kids (playful) by design.
3. **New word groups (not started):** e.g., food, body parts. Each needs audio (filename rule §4) + emoji or clay images; agent will produce the word list/prompts on request.
4. **No automated tests / CI.** QA is manual (static `node --check`, missing‑asset diff, headless browser smoke). A regression checklist exists in `qa/`.
5. **Backend not connected** (Supabase planned; `CloudProgressStore` is a stub). Progress is local‑only per device/profile.
6. **GitHub Pages cache:** users may see stale versions; instruct hard refresh after deploys.

No known functional bugs or console errors at handover. All 15 topics render in EN and ID; all referenced audio/images exist; all builder answer‑parts are within their options; no duplicate item ids.

---

## 9. THE EXACT NEXT STEP

**Produce and upload the 7 animal clay images** (`kedi, balik, kus, at, inek, tavsan, aslan` → `images/<name>.png`) using the clay‑style + magenta‑background prompt in §8.1. Upload them to the repo `images/` folder (GitHub web or local copy), then tell the agent "animal images uploaded."

The agent will then: clean each to true transparency, recenter/resize/optimize, add the `image:` field to each `ANIMALS` item in `js/lessonData.js` (replacing the emoji cue), verify in a headless browser, commit, and push.

If animal images are not desired right now, the alternative next step is to **pick the next word group** (food or body parts) and the agent will return the word list, audio filenames, and image prompts to produce.

---

## 10. Quick agent runbook (for whoever continues)

1. `git fetch origin && git merge --ff-only origin/main` (owner may have pushed assets; expect to rebase your local commits onto theirs — assets land as separate "Add files via upload" commits).
2. Wire new assets into `js/lessonData.js` (+ `USER_VERIFIED_AUDIO` for audio).
3. Verify: `node --check js/*.js`; diff referenced vs present `audio/*.mp3` and `images/*.png` (must be zero missing); headless smoke (open every topic EN+ID, check no console errors); screenshot key screens.
4. Commit (identity: Mert Alkan <mertalkaneng@gmail.com>; end message with the Co‑Authored‑By trailer), push to `main`, stop any local server.
5. Never commit `.gstack/`. Never fake audio. Re‑read §5 before claiming "done".
