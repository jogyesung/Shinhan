# Shinhan Financial Group — Design System

A reference design system for designing assets, slides, and prototypes that fit the visual & verbal identity of **Shinhan Financial Group** (신한금융그룹) and its subsidiaries — particularly **Shinhan Investment Securities** (신한투자증권), **Shinhan Premier** (private wealth), and the group's flagship financial super-app **superSOL** (슈퍼쏠).

---

## 1. Company context

Shinhan Financial Group is one of South Korea's "big four" financial holding groups. The group operates a federation of subsidiaries:

- **Shinhan Bank** — retail & corporate banking
- **Shinhan Card** — credit cards
- **Shinhan Investment Securities** (신한투자증권) — brokerage / wealth
- **Shinhan Life** — insurance
- **Shinhan Capital, Asset Management, Savings Bank, Asset Trust, DS, Fund Partners, REITs, Venture Investment, EZ General Insurance, Jeju Bank, Scholarship Foundation** — supporting affiliates

The group's outward brand promise is *"More Friendly, More Secure, More Creative."* The core CI symbol — a stylised blue compass / orbit — appears on all subsidiary lockups (`logo SUBSIDIARY-NAME`).

### Products represented in this design system

| Product | What it is | Source materials |
|---|---|---|
| **Shinhan Group corporate site** | Public-facing IR/ESG/governance website (`shinhangroup.com`) | `uploads/Shinhan Financial Group-CI.html` (CI guidelines page, scraped) |
| **superSOL** (슈퍼쏠) | Group-wide consumer "super app" — combines bank / card / securities / life into one mobile app. Currently being rebuilt as **"New superSOL"** for a 2026/06/16 grand-open. | `uploads/New 슈퍼SOL_양식.pptx` — internal Shinhan Investment Securities planning deck for the New superSOL launch (Premier Division HQ Workshop, Feb 2025) |
| **Shinhan Premier** | Private-banking / high-net-worth wealth brand inside Shinhan Investment Securities. Has its own gold/cream sub-palette. | Same deck — Premier Division branding, watermarks, wordmark |

### Sources

- **CI guidelines (public):** https://shinhangroup.com/en/about/identity/ci — saved at `uploads/Shinhan Financial Group-CI.html`
- **Typeface page:** https://shinhangroup.com/en/about/identity/typeface — references the proprietary **OneShinhan / 원신한** typeface family (4 weights: Light / Regular / Medium / Bold)
- **Internal deck (private):** `uploads/New 슈퍼SOL_양식.pptx` — extracted to `pptx_extract/` (slides + media)
- **Logo zips (public):** signature_AI.zip / signature_PNG.zip (linked from CI page; not downloaded into project)

> ⚠ The brief promised an `OneShinhanFontFile.rar` upload but the file did not arrive. **Pretendard** (Korean) and **Inter** (Latin) are stand-ins until the real OneShinhan TTF/OTF files are dropped into `fonts/`. See "Type" below.

---

## 2. Index — what's in this folder

```
README.md                  ← you are here
SKILL.md                   ← agent skill manifest (Claude Code compatible)
colors_and_type.css        ← design tokens (CSS vars) + semantic styles
fonts/                     ← (empty — pending OneShinhan delivery)
assets/                    ← logos, app icons, app-screen reference, watermarks
pptx_extract/              ← raw extraction from the superSOL deck (do not edit)
preview/                   ← preview cards rendered in the Design System tab
slides/                    ← reusable 16:9 slide templates (Premier / superSOL deck)
ui_kits/
  supersol/                ← UI kit: superSOL mobile app screens (iOS, KR)
  shinhan-group-web/       ← UI kit: corporate website
```

---

## 3. CONTENT FUNDAMENTALS — voice, tone, copy

### Languages
- **Korean is primary.** All consumer-facing copy in superSOL and the Premier deck is Korean (한글). English appears only as second-tier IR/ESG content on the corporate site, and as inline brand terms ("SOL", "Premier", "OPEN", "FGI", "TF", "AI").
- Mixed Korean/English run-on labels are normal: `'25.7월`, `New 슈퍼SOL`, `슈퍼Lite 이벤트`, `Open 금융서비스`. Don't translate or insert spaces — keep the original mixed-script run.

### Tone
- **Authoritative, terse, operational.** Internal decks read like consulting slides: numbered headings (`Ⅲ-1.`), short noun-phrase titles (`전략적 목표 / Strategic objectives`), heavy use of arrows, asterisked footnotes, and tables.
- **Customer-facing copy is warm but efficient.** superSOL screens use short imperative sentences ("매달 150,000원 자동이체 할까요?" — *Shall we set up the 150,000 won auto-transfer?*) and a recommending second-person ("쏠리님" — addressing the customer by their handle).
- The corporate brand tagline is `"More friendly, More Secure, More Creative."` — Title-cased trio, three M-words, comma-separated.

### Casing
- Korean titles use no casing convention (no concept of casing).
- English titles inside Korean copy: **Title Case** for proper nouns and product names ("Shinhan Premier", "Open Banking", "Value-up Plan"); **ALL CAPS** for acronyms and short stamps (`OPEN`, `FGI`, `TF`, `MGM`, `KPI`).
- IR pages title in Title Case ("Investor Presentations", "Financial Statements").

### Pronouns / addressing
- Customer is addressed as **고객님** (formal "customer-sama") in serious flows, or by their nickname `쏠리님` in social/playful flows.
- Internal decks use **당사** (our company), **그룹사** (group affiliates), **은행/증권/카드/라이프** (bank/securities/card/life — the four-letter group shorthand).

### Numerals, dates, money
- Years are abbreviated with a leading apostrophe + tick: `'25.1월` = January 2025; `'27.2월`. Months and dates use `MM/DD` ranges: `5/18~6/12`.
- Korean-unit money: **원** for KRW; comma-separated digits; counts in **억원** (100M KRW) for budgets, **만원/만명/만좌** for tens-of-thousands of users/accounts. e.g. `300억`, `1,300만명`, `50만좌`.
- Stock screens show `+1,231,541,515원 (234%)` — sign in front, percentage in parens. **Up = red, down = blue** (KR finance convention; opposite of US).

### Emoji & ornament
- **No emoji** in any official content. The deck and the website both avoid them entirely.
- Decks lean on **3D Aero-style illustrations** (single-user / users-group / share / cycle iconography rendered with glossy Windows-Vista-era shading). These are first-party assets, not emoji — see `assets/icon-3d-*`.
- Bullet ornaments are very Korean-corporate: `■`, `▶`, `※` (footnote), `*` (footnote), `①②③`. Use sparingly.
- Dividers: a thin blue rule with a script `P` glyph anchored at the right (Premier brand) — see `assets/divider-premier.png`.

### Sample phrasings to mimic

| Context | Korean | English equivalent |
|---|---|---|
| Section header | `Ⅲ-1. 본부장워크샵 논의 _New 슈퍼SOL - 2. 전략적 목표` | "III-1. Division Heads' Workshop Discussion / New superSOL — 2. Strategic Objectives" |
| Strategy keyword | `"토스를 뛰어넘는 고객경험"` | "A customer experience that surpasses Toss" |
| App nudge | `매달 150,000원 자동이체 할까요?` | "Shall we set up your monthly 150,000-won auto-transfer?" |
| App nudge | `주식을 화면 제일 위로 올릴까요?` | "Move stocks to the top of your home screen?" |
| Budget footnote | `*예산은 광고비 제외한 경품 비용이며, 세부사항은 변동 가능` | "*Budget is prize cost excluding ad spend; details may change." |
| CTA labels | `이체 / 조회 / 설정 / 접속 / 올리기 / 다음에 할게요` | "Transfer / View / Settings / Connect / Move up / Maybe later" |

---

## 4. VISUAL FOUNDATIONS

### 4.1 Color
- **Primary is "Shinhan Blue"** — `#0046ff` (Pantone 2388 C). It anchors EVERY brand surface. Do not substitute.
- A deeper variant `#0023b3` is used for headings inside slide decks (more legible at body sizes).
- A four-step **secondary blue ladder** — `#8cd2f5 → #4baff5 → #2878f5 → #00236e` — covers data-vis, illustration washes, and non-primary CTAs. The lightest and the deepest are the workhorses.
- **Premier sub-brand** uses warm **gold** (`#b18a3a` / `#c9a35a`) on **cream** (`#faf6ec`) — a complete identity inversion when in Premier context. Do not mix Shinhan-blue and Premier-gold in the same composition without intent.
- Neutrals are **cool greys** (slight blue cast). Avoid warm/sepia greys.
- **No emoji-pastel palettes**, no purple-to-pink gradients, no warm corals. The brand is overwhelmingly cool, blue-on-white.

### 4.2 Type
- **OneShinhan** (원신한) — proprietary humanist sans, four weights. Looks like a slightly geometricised Pretendard / Apple SD Gothic Neo. Wide, even strokes; modest aperture; round terminals.
- For Latin display in mixed runs the brand uses the same OneShinhan glyphs (the family covers Latin); a clean grotesk like Inter is the safest substitute.
- **Hierarchy is built with weight contrast more than size**. Body 15–17 px Regular, headings 24–40 px Bold. The deck almost never uses italics.
- Number-heavy screens (stock, dashboards) use **tabular figures** when available — important for column alignment.

### 4.3 Layout & spacing
- Mobile (superSOL): **24 px outer gutter**, **16 px between cards**, **20 px card radius**. Cards are flat-white on a `#f5f7fb` page background.
- Slide decks: **96 px x 720 px–wide content area** on a 1280×720 canvas, with a Premier divider rule near the top and `Ⅲ-1.` style chapter tag in the very top-left at 12 px Bold deep-blue (`#0023b3`).
- Heavy use of **two-column comparison tables** (As-is / To-be) and **multi-column "segment" matrices** — these are core Shinhan-corporate layouts.

### 4.4 Backgrounds & imagery
- Most surfaces are **flat white or `#f5f7fb`**. No textures, no noise.
- Premier slides feature an oversized translucent script **"P" watermark** in the bottom-right at ~6% opacity on cream — a single-letter brand stamp, not a repeating pattern.
- No full-bleed photography in the deck (it's all data + illustration). The corporate website does use full-bleed hero photography, but tinted blue.
- Decorative **chevron / arrow ribbon** in light grey gradient is used as a footer separator — see `assets/divider-arrows.png`.

### 4.5 Iconography
- The deck uses **3D Aero-style glossy illustrations** for personas (single-user, users-group, user-share, user-cycle). These are intentionally retro-3D, not flat. Treat them as illustrations, not generic "icons."
- The superSOL app uses **flat 2-color icons** in the bottom nav (home / 금융 / 상품 / 혜택 / 주식) — solid blue when active, grey outline when idle. Stock-symbol logos (Samsung, SK Innovation, Hyundai) are fetched as small circular brand marks.
- The corporate website uses Material-style outline icons (24×24, 1.5 px stroke).
- **No emoji**, **no Unicode symbol icons** (e.g. no ✓, ★ as primary indicators).
- See `ICONOGRAPHY` section below for substitution rules.

### 4.6 Animation, hover, press
- Hover: `opacity: 0.85` or shift to a darker shade of the same blue. Avoid scale-up on hover.
- Press: scale **0.97** + brief darken. Used on big primary CTAs in superSOL.
- Page transitions in the app are short slides (~220 ms) with a soft `cubic-bezier(0.32, 0.72, 0.0, 1)` curve. No bounce, no overshoot.

### 4.7 Borders & shadows
- Hairlines: 1 px `#e1e5ee`. Reserved for input fields, list separators, and table cells.
- Card shadow: very soft — `0 4px 14px rgba(15, 20, 38, 0.08)`. Cards are mostly demarcated by **background contrast**, not shadow.
- Primary CTA shadow: a tinted blue glow `0 12px 30px rgba(0, 70, 255, 0.22)` — used only on the marquee CTA (e.g. "올리기" in superSOL).
- Inner shadows / inset effects are not part of the system.

### 4.8 Corner radii
- **Pills** for primary buttons (`9999px`) — the dominant button shape in superSOL.
- **20–24 px** for cards.
- **8–12 px** for inputs and small chips.
- **4 px** for tags inside dense tables (slides).
- Sharp corners on the corporate website's hero blocks and its IR tables.

### 4.9 Transparency & blur
- Used sparingly. The superSOL home has a translucent banner overlay (`rgba(255,255,255,0.75)` with `backdrop-filter: blur(12px)`) above the bottom nav.
- No frosted-glass component panels. No glassmorphism cards.

### 4.10 Cards
- White surface, 20 px radius, 16–20 px inner padding, soft shadow, no border. Repeating cards in superSOL are visually separated by **8 px of `#f5f7fb` background between them**, not by dividers.

---

## 5. ICONOGRAPHY

### What's actually used in the source materials
1. **3D Aero-style persona illustrations** in slide decks. Stored in `assets/icon-3d-*`. These are PNGs, not vectors. **Use them as-is**; do not redraw as flat icons.
2. **superSOL bottom-nav icons** (5 glyphs: 홈/금융/상품/혜택/주식). 2-color (blue active, grey idle), filled style, ~28 px target. We do not have the source vectors — they are baked into the screenshot at `assets/screen-supersol-home.jpg`. For new mocks of superSOL, **substitute Phosphor Icons "fill" style** at the same approximate visual weight, and flag the substitution.
3. **Subsidiary lockup logos** — wordmark + symbol composites. Available officially at https://shinhangroup.com/resources/publish/en/resource/signature_AI.zip and signature_PNG.zip. We have one variant in `assets/logo-shinhan-securities.png` and the Premier variant in `assets/logo-shinhan-premier.png`.
4. **Tiny brand-glyph footer marks** — the script "P" for Premier (`assets/divider-premier.png`).

### Substitution rules
- For UI icons inside a Shinhan-style mock: use **Phosphor Icons** (`https://unpkg.com/@phosphor-icons/web`) — fill style for active, regular style for idle. Phosphor's stroke weight (1.5 px @ 24 px) and cap-style match the corporate site.
- **Never** draw bespoke SVG icons by hand for filler. **Never** use emoji. **Never** use Material Icons round-style (too geometric / heavy for this brand).
- Chart marks and stock logos: substitute with neutral first-letter circles at the right brand color when not available.

### Logos
| File | Use |
|---|---|
| `assets/logo-shinhan-securities.png` | Shinhan Investment Securities lockup (KR). Use bottom-right of slides. |
| `assets/logo-shinhan-premier.png` | Shinhan Premier wordmark. Use as the headline mark on Premier-branded materials. |
| `assets/logo-supersol.png` | superSOL app icon (rounded square, blue gradient, white wordmark). |
| `assets/divider-premier.png` | Premier section divider rule with script-P at the right. |
| `assets/divider-arrows.png` | Greyscale chevron ribbon — slide footer ornament. |
| `assets/bg-watermark-p.png` | Oversized translucent "P" watermark for Premier slide backgrounds. |

---

## 6. Design system tab

Cards in `preview/` are registered as assets and surface in the project's Design System tab. Each card targets ~700 px wide and renders a single sub-concept (one palette, one type style, one component). See the tab for the full overview.

---

## 7. Caveats & open work

- **OneShinhan font files are not present** in the project despite the brief promising them. Pretendard is substituted; production renders should drop the real `.otf` / `.ttf` files into `fonts/` and the CSS will pick them up via the `OneShinhan` family in the stack. **Action for user: please re-attach `OneShinhanFontFile.rar` (or extracted .ttfs).**
- The deck contains internal-confidential numbers (budgets, customer segment counts). Treat the deck content as a *layout reference*, not as approved messaging.
- The corporate website source HTML is a single archived page. Component-level code wasn't accessible. The `shinhan-group-web` UI kit is therefore a **visual reconstruction**, not a code copy.
- We have no design token export from Shinhan internal Figma. Color names + radii + spacing in `colors_and_type.css` are inferred from the CI page + deck XML + screenshots, then named consistently here.
