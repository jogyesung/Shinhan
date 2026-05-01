---
name: shinhan-design
description: Use this skill to generate well-branded interfaces and assets for Shinhan Financial Group (신한금융그룹) — including Shinhan Bank, Shinhan Investment Securities, Shinhan Premier, Shinhan Card, and the group's superSOL super-app. Contains essential design guidelines, colors, type, fonts, assets, and UI-kit components for prototyping or production.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files (`colors_and_type.css`, `assets/`, `slides/`, `ui_kits/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out of `assets/` and `slides/` and create static HTML files for the user to view. If working on production code, you can copy the assets and read the rules in `README.md` to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design. Confirm:
1. **Which surface?** superSOL mobile app, Shinhan Group corporate web, Shinhan Premier deck, Shinhan Investment Securities slide, or something else.
2. **Korean or English?** Korean is primary for consumer/internal materials; English for IR/ESG.
3. **Premier or core Shinhan-Blue context?** Premier means gold-on-cream; everything else is blue-on-white.
4. **Variations / tweaks** they'd like to explore.

Then act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need. Always prefer real assets from `assets/` over hand-drawn SVG. Never use emoji. Use Pretendard as the substitute for OneShinhan unless the real font is dropped into `fonts/`.
