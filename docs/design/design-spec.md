# Orbit — Design Spec

**Product:** Orbit — a versatile Astro starter template for blogs, portfolios, and landing pages.
**Personality:** Playful / pop, but trustworthy. Space-and-launch metaphor (Astro → orbit, rockets, stars) used lightly, never cheesy.
**Language:** English.

---

## 1. Color system

Balanced navy + orange (roughly 50/50 across the page — navy owns structure & dark sections, orange owns energy & CTAs).

| Token | Hex | Use |
|---|---|---|
| `--navy` | `#1e3a8a` | Primary brand, dark section backgrounds, headings on light |
| `--navy-deep` | `#152a63` | Deep gradients, footer |
| `--navy-ink` | `#0f1e42` | Text on light where near-black is needed |
| `--orange` | `#f97316` | Primary accent, CTA buttons, highlights |
| `--orange-soft` | `#ffedd5` | Tinted backgrounds, chips |
| `--sky` | `#dbeafe` | Soft blue tints, section bands |
| `--paper` | `#fbfaf7` | Warm off-white page background (never pure #fff) |
| `--cloud` | `#ffffff` | Cards on paper |
| `--line` | `rgba(15,30,66,.10)` | Hairline borders |

**Rule:** accents share tone. Orange and navy are the only saturated colors; everything else is a tint of one of them or warm neutral. No third hue.

## 2. Typography

- **Display / headings:** Space Grotesk (600–700). Tight tracking, big scale, occasional word highlighted in orange.
- **Body / UI:** Manrope (400–600).
- Scale (desktop): Hero 72px · H2 44px · H3 22px · body 17px · caption 13px.
- `text-wrap: balance` on headings, `pretty` on paragraphs.

## 3. Playful-pop devices

- **Sticker shapes:** small rotated squares, circles, and 4-point sparkles in orange/navy scattered behind headings.
- **Rotated cards:** feature/testimonial cards tilt ±1.5° and straighten on hover.
- **Thick outlines + hard offset shadows** (`box-shadow: 6px 6px 0` in navy or orange) instead of soft blur — comic/pop feel.
- **Pill buttons**, chunky radii (14–20px on cards, 999px on buttons).
- Big animated **orbit ring** motif in hero.

## 4. Layout & sections

1. **Sticky nav** — logo (orbit mark), links, ghost + solid CTA.
2. **Hero** — oversized headline, subhead, dual CTA, orbit graphic with floating stickers, trust row.
3. **Logo / social-proof strip.**
4. **Features** — 6 cards in a 3-col grid, alternating navy/orange icon chips, hard-shadow cards.
5. **Showcase band** (navy) — “built for anything” with 3 use-case tiles (blog / portfolio / LP), image placeholders.
6. **Pricing** — 3 tiers, middle featured (orange), pill toggle monthly/yearly.
7. **Testimonials** — tilted quote cards, avatars as placeholders.
8. **FAQ** — accordion, navy on paper.
9. **Final CTA** — full navy band with orange button and orbit motif.
10. **Footer** — 4 columns, dark navy.

## 5. Interaction

- Nav shrinks/gains border on scroll.
- Pricing toggle switches prices with a quick transition.
- FAQ items expand one at a time (accordion).
- Cards straighten + lift on hover.
- Sticker shapes drift subtly (CSS keyframes).

## 6. Imagery

No hand-drawn illustrations. Use striped SVG placeholders labelled in monospace (“screenshot — dashboard”, “template preview”) where real product shots go. Avatars are initial-circles.

## 7. Accessibility

- Orange text only at large sizes or on navy; body copy uses navy-ink on paper for contrast.
- Focus rings visible (orange 2px).
- Hit targets ≥ 44px.
