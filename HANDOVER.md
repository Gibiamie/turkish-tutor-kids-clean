# Turkish Meaning Builder — Project Handover

**Repo:** https://github.com/Gibiamie/turkish-tutor-kids-clean
**Live:** https://gibiamie.github.io/turkish-tutor-kids-clean/
**QA mode:** add `?qa=1` to the URL
**Version:** RC9 · **Branch:** `main` (single working branch) · **Last update commit:** `3671e36`
**Author identity for commits:** `Mert Alkan <mertalkaneng@gmail.com>`

This document is the single source of truth for handover. It lists every frozen decision,
non‑negotiable rule, the file structure, all approved content, open issues, and the exact
next step. Nothing previously approved is omitted. (Rev 2 — adds uploaded image inventory,
food/body/people group specs, adult‑theme clarification.)

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
- **Node** (only for `node --check` syntax checks / headless QA): installed admin‑free as portable at `%LOCALAPPDATA%\node-portable\node-v22.14.0-win-x64`, on Git Bash PATH (`~/.bashrc`) and user PATH.
- **Image cleaning (required for every uploaded image):** owner images arrive with a baked grey **checkerboard** or a **solid magenta** background (alpha is fully opaque — the "transparent" is fake). Clean with the flood‑fill script: detect grey‑checker (neutral, `(max−min)≤16 & min≥185`) **or** magenta (`R−G≥25 & B−G≥25 & R,B≥90`), flood‑fill from the border to real alpha, recenter to ~80% of a square frame with even margins, resize to 768px, optimize. (Reference implementations are in the session history; the logic is deterministic.)
- **Assets workflow:** owner produces audio/images and uploads them (GitHub web or local copy into `audio/` and `images/`). Agent then cleans images, wires assets into `js/lessonData.js`, adds audio to `USER_VERIFIED_AUDIO`, verifies, pushes. Owner‑uploaded audio = **User Approved + Uploaded** (verified).
- **Mobile control:** run `/remote-control` (`/rc`) in the desktop terminal, then open `claude.ai/code` or the Claude mobile app **signed into the same account**. Desktop must stay awake, online, and running.
- **Merge note:** owner often pushes asset commits ("Add files via upload") while the agent also commits. Untracked local copies of the same images can block `--ff-only`. Safe recovery: confirm the agent’s commit is an ancestor of `origin/main` (`git merge-base --is-ancestor HEAD origin/main`), then `git reset --hard origin/main` and re‑apply code via cherry‑pick if needed.

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
  styles.css                    # layout/theme, adult-mode overrides, butterflies, hero, bignum
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
images/  *.png   (23 present — see §7.3: 10 integrated, 13 uploaded & pending)
audio/   184 × pronunciation_tr_*.mp3
```
`.gstack/` is local tooling output and is **git‑ignored** — never commit it (can contain session tokens).

---

## 4. Frozen decisions (approved — do not regress)

**Architecture / platform**
- Static modular app on GitHub Pages, no backend; progress in `localStorage`, schema `rc6.1`, key `tmb_rc6_progress__<profile>__<lang>__<mode>`.
- `js/app.js` is the whole app; never replace with a placeholder/stub.
- Single deploy branch `main`. `.gstack/` git‑ignored.

**Profiles & language**
- Profiles: **Bella** (EN, kids) default, **Ayza** (ID, kids), **Adult** (EN, adult), **Guest** (EN, family).
- EN and ID are **separate paths**; ID must **never** show English UI labels. `<html lang>` set per profile.

**Learning model**
- Real **day‑streak** per profile (continues if active yesterday, resets after a missed day). No fake numbers.
- Three distinct learning actions: **Practice done**, **I already know this**, **Needs more practice**. "I already know" blocked until ≥1 practice action.
- **Next** enabled once item is practiced (correct answer, or listening); pressing Next then completes the item. Advancing with no practice shows a warning. (Builders: a correct build already completes.)
- **Laya = on‑demand teacher.** Every builder has a tappable Laya card with **"Learn why"** opening the full sheet (Key idea · What should I hear? · Common mistake · Mini practice).
- **Hybrid explanations:** sheet shows the item’s own formula at top ("This word: kalem + e = kaleme") **plus** the general rule (driven by `revealAfterCorrect`).
- Explanations must **teach the rule**; "sounds natural" hand‑waving is banned (see §6).
- **Butterfly celebration** on correct answers (kids/family; hidden in adult).
- **Root Words** is two‑step: Learn → Recall mini‑test (hide word, pick the Turkish word; distractors from same topic).
- **Deconstruction** mode (word → meaning). **Mixed Review** (12 mixed recall, **no score**, excluded from totals/audit).

**Content scope (approved)**
- Numbers **0–10** (sıfır included), numeral as the cue.
- Colors = **16** (basic 11 + lacivert, turkuaz, bej, altın, gümüş).
- Animals = **8** (köpek, kedi, balık, kuş, at, inek, aslan, tavşan) — currently **emoji cues**; clay images uploaded & pending integration (§8/§9).
- göz/plural image: **decision (A) = keep the single concept icon** (one image per noun). Not a bug.
- Pronoun genitives (benim…onların) taught as **fixed/irregular** (intentional).
- First plural lesson uses **only fully regular** examples (no saat/harf/kalp exceptions).

**Visual / UX**
- Object images must be **truly transparent** (real alpha) — never a baked checkerboard/solid bg. Auto‑clean on upload (§2), recenter ~80%, 768px, optimized.
- Image display `object-fit: contain` (no crop). Builder prompt = **frameless "hero"** (word leads on a soft gradient; transparent image bleeds large from bottom‑right).
- Per‑topic module card colors. Success‑panel button sizes to content (e.g., "Dengarkan" must not clip).
- **Adult theme** (mode=adult): hide Laya mascot + butterflies, mute card/hero colors, relabel "Laya guide" → "Guide". Kids/family unchanged. Mode‑scoped via `<html data-mode="adult">`. **No new words/audio** — audio is language, shared across ages. An adult‑specific image set is optional only (§8.4).

**Tooling / process**
- Filename convention (ASCII fold): ç→c, ğ→g, ı→i, ö→o, ş→s, ü→u, İ→i, space→`_`. Audio `audio/pronunciation_tr_<word>.mp3`; image `images/<word>.png`.
- Owner‑uploaded audio added to `USER_VERIFIED_AUDIO`.

---

## 5. Non‑negotiable rules (binding red‑lines)

From `qa/known-critical-rules.md` + decisions above. **Do not violate:**

1. **Pronunciation accuracy is #1.** Never teach a wrong sound, spelling, or meaning.
2. **Never fake audio.** No recording → ship **silent** (no Listen button / no "audio unlocks" hint), never reuse another word’s sound. Report missing MP3s; never guess audio QA.
3. **Never reveal the final answer before solving.**
4. **Never mix EN and ID paths.** ID must not show English labels.
5. **Never show unimplemented learner‑facing features** (why fake streaks were removed).
6. **No temporary runtime patches as final architecture** (no stub `app.js`).
7. **`ğ`:** not an isolated sound; never word‑initial; taught only inside real words (dağ, ağaç, soğuk, öğretmen, köpeği); never hard/stressed.
8. **`c` example:** use `cam`; do **not** use `eczane` as the core `c` example.
9. **Builder softening:** `kitap→kitab` (kitabı, kitabımda), `köpek→köpeğ` (köpeği, köpeğe); `araba + sı/mız/nız/ları`. Never `kitap + ı` / `köpek + i`.
10. **Progress actions** stay separate; "Needs more practice" records for review, not mastery.
11. **Admin:** `/admin` rejected; `/_studio` is the route name but **not** protection (real auth required); learners never see admin UI; no local passcode gate on Pages.
12. **UI:** desktop not an oversized mobile app; bottom nav must not cover content; mascot/butterflies must not cover text; no unimplemented "Fun Zone/Rewards/Learn" entries.
13. **Release discipline:** before any "done/release" claim, re‑read `project-constitution.md`, `qa/release-gate.md`, `qa/regression-checklist.md`, `qa/known-critical-rules.md`; apply checks; state honestly what was vs wasn’t live‑verified.

---

## 6. Approved grammar rules (exact, rule‑based wording)

- **Plural −ler/−lar:** last vowel `a,ı,o,u → −lar`; `e,i,ö,ü → −ler`. Caveat: most words; a few borrowed words are exceptions.
- **Possessive "my":** after consonant `−im/−ım/−um/−üm` by last vowel; after vowel just `−m` (araba→arabam).
- **Locative "in/on/at":** `a,ı,o,u → −da`, `e,i,ö,ü → −de`; voiceless final consonant (p,ç,t,k,…) hardens `d→t` (park→parkta).
- **Accusative (object):** `−ı/−i/−u/−ü` by last vowel; `y` bridge after a vowel (elma→elmayı).
- **Dative "to":** `−e/−a` by last vowel; `y` bridge after vowel (araba→arabaya); softening (kitap→kitaba, köpek→köpeğe).
- **Softening (general):** final `p,ç,t,k → b,c,d,ğ` before a vowel block.
- **Suffix stacking order:** word → plural → possessive → case (ev+ler+imiz+de = evlerimizde); possessive vowel harmonizes to the plural’s vowel.

---

## 7. Approved content inventory

### 7.1 Topics (15 topics, 133 non‑review items)

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
| Numbers (`numbers`) | vocab/digit | sıfır…on (0–10) (11) |
| Family (`family`) | vocab/emoji | anne, baba, bebek, çocuk, kadın, erkek, arkadaş, aile (8) |
| Animals (`animals`) | vocab/emoji | köpek, kedi, balık, kuş, at, inek, aslan, tavşan (8) |
| What Does It Mean? (`deconstruct`) | deconstruct | ev, okul, kitap, su, anne, merhaba, kırmızı, köpek, evde, evler (10) |
| Mixed Review (`review`) | review | 12 random from root+colors+numbers+family+animals+greetings; no score |

### 7.2 Color swatches (hex)
kırmızı #e23b3b · turuncu #ff6a00 · sarı #ffe000 · yeşil #2e9e4f · mavi #2f6fe0 · mor #8e24aa · pembe #ff7ab0 · kahverengi #8b5a2b · gri #9aa3ad · siyah #1c1c1c · beyaz #ffffff · lacivert #1a237e · turkuaz #1abc9c · bej #d9c2a0 · altın #d4af37 · gümüş #b8bcc4

### 7.3 Image inventory (23 files in `images/`)
- **Integrated & live (10, transparent clay):** ev, okul, kitap, elma, kopek, goz, masa, araba, su, kalem.
- **Uploaded, NOT yet cleaned/integrated (13):** kedi, balik, kus, at, inek, tavsan, aslan (animals); cay, kahve, kafe (food/drink); ogrenci, ogretmen (people/jobs); aile (family). These still need the §2 cleaning pass before use and are not referenced by code yet.

---

## 8. Unresolved / open issues & backlog

### 8.1 Integrate uploaded ANIMAL images (ready now) — **the next step (§9)**
Animals currently use emoji. Images for kedi, balik, kus, at, inek, tavsan, aslan are uploaded (köpek already integrated). Action: clean each (§2), add an `image:` field to each `ANIMALS` item in `js/lessonData.js` (image overrides emoji), remove emoji, verify, push.

### 8.2 Food & Drink group (assets partly uploaded)
Proposed 8 items. Audio/image status at handover:

| TR | EN | audio file | image file | status |
|---|---|---|---|---|
| çay | tea | pronunciation_tr_cay.mp3 | cay.png | audio ✓ · image ✓ (uploaded) |
| kahve | coffee | pronunciation_tr_kahve.mp3 | kahve.png | audio ✓ · image ✓ (uploaded) |
| ekmek | bread | pronunciation_tr_ekmek.mp3 | ekmek.png | audio ✓ · image ✗ |
| süt | milk | pronunciation_tr_sut.mp3 | sut.png | audio ✓ · image ✗ |
| peynir | cheese | pronunciation_tr_peynir.mp3 | peynir.png | ✗ · ✗ |
| yumurta | egg | pronunciation_tr_yumurta.mp3 | yumurta.png | ✗ · ✗ |
| muz | banana | pronunciation_tr_muz.mp3 | muz.png | ✗ · ✗ |
| bal | honey | pronunciation_tr_bal.mp3 | bal.png | ✗ · ✗ |

Owner to record audio: peynir, yumurta, muz, bal · Owner to produce images: ekmek, süt, peynir, yumurta, muz, bal.

### 8.3 Body group (Vücut) — proposed 8 (göz already exists in Root Words, reuse)

| TR | EN | audio file | image file | status |
|---|---|---|---|---|
| el | hand | pronunciation_tr_el.mp3 | el.png | audio ✓ · image ✗ |
| ayak | foot | pronunciation_tr_ayak.mp3 | ayak.png | ✗ · ✗ |
| baş | head | pronunciation_tr_bas.mp3 | bas.png | ✗ · ✗ |
| burun | nose | pronunciation_tr_burun.mp3 | burun.png | ✗ · ✗ |
| ağız | mouth | pronunciation_tr_agiz.mp3 | agiz.png | ✗ · ✗ |
| kulak | ear | pronunciation_tr_kulak.mp3 | kulak.png | ✗ · ✗ |
| saç | hair | pronunciation_tr_sac.mp3 | sac.png | ✗ · ✗ |
| diş | tooth | pronunciation_tr_dis.mp3 | dis.png | ✗ · ✗ |

Owner to record audio: ayak, baş, burun, ağız, kulak, saç, diş · Owner to produce images: all 8.

### 8.4 People / Jobs group (proposed — images already uploaded)
`ogrenci.png` (student) and `ogretmen.png` (teacher) are uploaded; `aile.png` (family) too. A proposed "People/Jobs" group: öğrenci, öğretmen, doktor (audio exists), + others. Needs audio: pronunciation_tr_ogrenci.mp3, pronunciation_tr_ogretmen.mp3 (doktor exists). Define on request.

### 8.5 Shared image prompt (clay style — for all kid groups)
```
A single [OBJECT], soft rounded 3D clay/plasticine style, glossy, bright candy
colors matching a children's icon set, even soft lighting, centered, fills ~78%
of the frame with even margins, no text, no frame. Do NOT draw a checkerboard —
use a FLAT SOLID pure-magenta (#FF00FF) background (or true transparency),
square 1024x1024.
```

### 8.6 Adult theme (visual track) — clarification
Adult theme is **done as CSS** (mascot/butterflies hidden, muted palette, "Guide" label). It needs **no new words and no new audio** (audio = Turkish pronunciation, shared). The only *optional* asset is a separate **adult‑styled image set** (same object words, neutral style) under e.g. `images/adult/<name>.png` with a mode switch. Heavy/optional — recommended to defer. Adult restyle prompt:
```
A single [OBJECT], clean minimal flat vector icon, muted professional palette
(slate, navy, warm grey), subtle soft shadow, no childish faces, centered,
~78% of frame, no text, transparent background (PNG alpha), square 1024x1024.
```

### 8.7 Other
- No automated tests/CI; QA is manual (`node --check`, missing‑asset diff, headless smoke). Checklist in `qa/`.
- Backend not connected (Supabase planned; `CloudProgressStore` stub). Progress local‑only.
- GitHub Pages cache: instruct hard refresh after deploys.
- `family` mode currently behaves like kids (playful) by design.
- No known functional bugs / console errors at handover. All 15 topics render EN+ID; all referenced audio/images exist; builder answer‑parts ⊂ options; no duplicate ids.

---

## 9. THE EXACT NEXT STEP

**Integrate the uploaded animal images** (they are already in `images/`): `kedi, balik, kus, at, inek, tavsan, aslan` (+ existing `kopek`). Steps:
1. Clean each with the §2 flood‑fill pass (likely checker or magenta background) → true transparency, recenter ~80%, 768px, optimize.
2. In `js/lessonData.js` `ANIMALS`, add `image:'images/<name>.png'` to each item (image takes priority over emoji in `cueVisual`); remove the `emoji` field (or leave as harmless fallback).
3. Verify: `node --check`, zero missing assets, headless smoke (Animals topic EN+ID, no console errors), screenshot.
4. Commit (identity Mert Alkan <mertalkaneng@gmail.com>, Co‑Authored‑By trailer), push to `main`.

After animals: optionally do the same for Food/Drink using the uploaded `cay/kahve` (and define the group), then continue per §8.

---

## 10. Quick agent runbook

1. `git fetch origin`; reconcile (owner may have pushed asset commits; if `--ff-only` is blocked by untracked local copies, verify ancestry then `git reset --hard origin/main`, re‑apply code via cherry‑pick).
2. Clean any new images (§2). Wire assets into `js/lessonData.js` (+ `USER_VERIFIED_AUDIO` for audio).
3. Verify: `node --check js/*.js`; referenced‑vs‑present `audio/*.mp3` & `images/*.png` (zero missing); headless smoke (every topic EN+ID, no console errors); screenshots.
4. Commit (correct identity + Co‑Authored‑By), push to `main`, stop any local server.
5. Never commit `.gstack/`. Never fake audio. Re‑read §5 before claiming "done".
