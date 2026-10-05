# QR Menu Design System

Design system for a digital QR menu service for small cafés and restaurants in Almaty. Product name is **TBD** — "QR Menu" is a neutral placeholder wordmark set in plain type. No logo exists; do not draw one.

## Sources
- `uploads/qr-menu-brief.md` — the design brief (only source). No Figma, codebase, screenshots, photos or logos were provided. Everything here is derived from that brief.

## Products
1. **Guest menu** — public mobile web page opened from a table QR code. No install. Photo-led, calm, fast. 4 languages: Қазақша (KZ), Русский (RU), English (EN), 中文 (ZH); **Kazakh is the default**; the phone language is honoured if it is one of the four, otherwise KZ. Choice is remembered.
2. **Owner admin** — mobile PWA for café owners/managers: menu items, photos, prices, sold-out toggles, categories, café profile + accent color, QR code export (one menu code, no table numbers). UI in Kazakh by default, Russian as secondary. Practical, big targets, one-handed.

Out of scope: ordering, payments, booking, analytics, desktop.

Sample café used everywhere: **Жеті Дән**, Abay Ave 52, Almaty, 08:00–23:00.

---

## Content fundamentals

**Voice.** Plain, short, helpful. The guest menu barely speaks — dish names, descriptions, prices. The admin talks to a busy non-technical owner: concrete verbs, no jargon, no exclamation marks.

- **Default language:** Kazakh (KZ) for both guest menu and admin. Component default labels are Kazakh (Таусылды, Ашық/Жабық, Артқа, Жабу). Other languages are passed in via props.
- **Address:** formal-neutral, «Сіз» form in Kazakh. Russian uses imperatives without pronouns ("Введите код", "Выберите категорию"), "вы" if a pronoun is needed. Never "ты". English uses "you" sparingly.
- **Casing:** sentence case everywhere (buttons, titles, tabs). Uppercase only for language codes (KZ RU EN ZH) and small admin section labels (letter-spaced 0.04em).
- **Buttons:** verb first, 1–3 words: "Сохранить", "Получить код", "Открыть в 2GIS", "Добавить блюдо", "Автоперевод".
- **Descriptions:** ingredient lists, comma-separated, no marketing: "Рис, говядина, морковь, нут, зира". 1–2 lines.
- **Prices:** always `2 500 ₸` — thin grouping with non-breaking spaces, symbol after, no decimals. Never "тг" or "KZT".
- **Weights:** `350 г`, `400 мл` (`g/ml`, `克/毫升`).
- **Status strings** (verbatim from brief): Мәзір / Меню / Menu / 菜单 · Таусылды / Нет в наличии / Sold out / 已售罄 · Ашық / Открыто / Open / 营业中 · Жабық / Закрыто / Closed / 已打烊.
- **Confirmations** name the object and the consequence: "Удалить блюдо?" — "«Лагман» исчезнет из меню. Это нельзя отменить."
- **Languages** are always listed by native name (Қазақша, not "Kazakh").
- **Emoji:** never. Tags use Lucide glyphs instead.
- **Length:** KZ/RU run 30–40% longer than EN; copy is never shortened to fit — layouts wrap (dish names up to 3 lines).

## Visual foundations

**Mood.** A warm paper table-top: off-white surfaces, warm-grey ink, one café accent. Food photos are the only saturated imagery; UI stays quiet around them.

**Color.** `tokens/colors.css`.
- Neutrals: `--paper-0…300` (warm whites, hue ~80) and `--ink-400…900` (warm greys). Page `--surface-page` is paper-50; cards are pure white on top of it.
- Accent is a theme slot (`--accent`, `--accent-hover`, `--accent-soft`, `--accent-ink`, `--on-accent`). Default template = terracotta. Owners choose from curated presets via `data-accent="terracotta|steppe|saffron|plum|teal|charcoal"` on the menu root. Presets keep ≥4.5:1 for `--on-accent` text. New templates = new preset blocks; components only ever read semantic tokens.
- Accent is used sparingly: primary buttons, active tab underline, FAB, café logo fallback, focus rings. Never for large backgrounds.
- Status: green open, red closed/danger. Tag pairs `--tag-*-bg/-fg` (soft tint + strong hue). Sold-out = paper-200 / ink-500.
- Prices use `--text-price` (ink-900) — darkest thing on the card, never accent-coloured, so they're always easy to spot.

**Type.** `tokens/typography.css`. **Onest** (UI, Latin + full Cyrillic including Kazakh ә ғ қ ң ө ұ ү һ і) + **Noto Sans SC** (Chinese). Both via Google Fonts. Scale 12/14/16/18/20/24/30; body never below 14px. Weights 400/500/600/700. Prices 700 with tabular figures and slight negative tracking. Under `:lang(zh)` the font stack swaps to CJK and line-heights open up (body 1.7). Set `lang="kk"`/`"zh"` on the menu root.

**Spacing & layout.** 4px base (`--space-*`), 16px screen gutter, 12px gap between cards, 20px above section titles. Mobile-only, 375px reference width, fluid. Fixed elements: sticky category tabs (guest), bottom nav + FAB (admin), sticky Save bar on edit screens.

**Corner radii.** 8 thumbnails · 12 inputs, buttons, media · 16 cards and grouped lists · 24 sheets, dialogs · pill for tags, chips, FAB, language button.

**Cards.** White, radius 16, no border, soft warm two-layer shadow (`--shadow-card`). Sold-out cards drop the shadow, get a 1px subtle outline, and grey the photo (grayscale + 50% opacity). Admin lists are white grouped containers with 1px `--border-subtle` dividers.

**Shadows.** Four levels, all warm-tinted, low alpha: `xs` (segmented active, overlay buttons), `card`, `raised` (menus, FAB, dialogs), `sheet` (upward). No inner shadows.

**Borders.** 1px `--border-strong` for inputs and secondary buttons; `--border-subtle` for dividers. Dashed only for empty states and the QR placeholder.

**Backgrounds & imagery.** No gradients, textures or illustrations. Imagery = owner-uploaded food photos: warm, natural light, top-down or 45°, cropped 4:3 (feature/sheet) or centre-cropped 1:1 (row card). Optional cover image at top of menu. Missing photo → hatched `PhotoPlaceholder` or a text-only card.

**Transparency & blur.** Only two uses: the sheet/dialog scrim (`--surface-scrim`, ink @ 48%) and frosted white overlay buttons on top of photos (`--surface-overlay` + 8px backdrop blur).

**Motion.** Quiet and quick. Ease-out `cubic-bezier(.22,.8,.24,1)`; 120ms press/hover, 200ms toggles and tab underline, 320ms sheet slide + scrim fade. No bounces, no parallax. Skeleton shimmer; disabled under `prefers-reduced-motion`.

**Press / hover.** Press = scale (.97 buttons, .92 icon buttons, .985 cards). Hover (desktop preview only) = accent darkens to `--accent-hover`; neutral buttons get `--surface-sunken`. Focus = 2px accent outline, 2px offset; fields get accent border + 3px `--accent-soft` ring.

**Tap targets.** 44px minimum everywhere (`--tap-min`); 52px admin fields and primary actions (`--tap-lg`); 56px FAB.

## Iconography

- **Lucide** (https://lucide.dev), loaded from CDN `unpkg.com/lucide-static@0.460.0/icons/<name>.svg`, rendered through the `Icon` component as a CSS mask so it inherits `currentColor`. 2px stroke, rounded joins — matches Onest's soft geometry.
- No codebase icons were provided, so this is a choice, not a copy. Swap the CDN path in `components/core/Icon.jsx` if the product adopts another set.
- Sizes: 12 in tags, 16–18 inline, 20 in buttons/fields, 24 in app bar and bottom nav.
- Core glyphs: globe (language), chevron-left/right/down, x, search, plus, info, clock, map-pin, map, phone, message-circle (WhatsApp), instagram, utensils (menu/placeholder), layout-list, qr-code, store, languages (auto-translate), sparkles, grip-vertical, camera, image, trash-2, eye, file-down, image-down.
- Tag glyphs: Spicy = flame, Vegetarian = leaf, New = sparkles, Popular = star. Extended dietary set for future tags: vegan, wheat-off (gluten-free), fish, beef, drumstick, egg, milk, nut, salad, soup, baby (kids).
- Food & drink glyphs (category icons if owners want them): coffee, cup-soda, wine, beer, martini, glass-water, pizza, sandwich, croissant, cake-slice, ice-cream-cone, cookie, apple, cherry, citrus, carrot.
- Full curated set (110 glyphs, grouped) lives in `guidelines/brand-icons.html`. Any other Lucide name also works with `<Icon name>`; prefer the curated set first.
- **Brand logos** (WhatsApp, Telegram, 2GIS) come from Simple Icons via `<Icon name="brand:whatsapp">`, shown in their brand colour (WhatsApp #25D366). Never redraw them.
- No emoji. No unicode symbols as icons (except `₸` which is a currency sign, and `·` separators).
- `assets/photos/` holds 9 placeholder food photos supplied by the user (cappuccino, tea with milk, caesar, cheesecake, plov, lagman, beshbarmak stand-in, shurpa, dapanji). Stand-ins only — replace with the café's own photography. No logo or illustrations were supplied.

---

## Index

- `styles.css` — entry point; `@import`s only.
- `tokens/` — `fonts.css`, `colors.css` (incl. `data-accent` presets), `typography.css`, `spacing.css` (space, radii, tap sizes, shadows, motion, z-index), `base.css`.
- `components/components.css` — class styles (`.qm-*`) used by the React components.
- `components/` — React primitives (each `Name.jsx` + `Name.d.ts` + `Name.prompt.md`, one `*.card.html` per folder).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `ui_kits/guest-menu/` — interactive guest menu.
- `ui_kits/admin/` — interactive owner admin.
- `Guest.html`, `Owner.html` — the working project pages (full apps built from the kits; full-screen and fluid on every phone, centred column on desktop).
- `handoff/README.md` — developer handoff: screens, states, data model, API, component mapping, open items.
- `templates/` — blank Guest and Owner page templates for consuming projects.
- `assets/photos/` — placeholder food photos.
- `thumbnail.html`, `SKILL.md`.

## Components

- **core/**: Icon, Button, IconButton, Tag, StatusPill, CafeLogo, Price
- **navigation/**: CategoryTabs, LangSwitcher, LangTabs, AppBar, BottomNav
- **menu/**: ItemCard, PhotoPlaceholder, Skeleton, BottomSheet
- **forms/**: TextField, Select, Switch, CodeInput, Segmented, RadioList
- **admin/**: MenuRow, Fab, Dialog, ColorPicker, QrCode (illustrative, not scannable)
- **feedback/**: Banner, EmptyState, Toast
- **layout/**: SectionHeader, ListGroup, SettingRow
- **menu/** (added): CafeHeader, HoursTable

No source component inventory existed; this set is authored from the brief's screens and its component-sheet list (buttons, tabs, item card variants, tags, toggles, inputs, color tokens).

**Intentional additions** beyond the brief's sheet: Icon (Lucide wrapper), Price (enforces `2 500 ₸` formatting), CafeLogo (owner logo + initial fallback), StatusPill, PhotoPlaceholder, Skeleton, BottomSheet, AppBar, BottomNav, CodeInput, MenuRow, Fab, Dialog, ColorPicker, Banner, EmptyState, Toast, SectionHeader, ListGroup, SettingRow, CafeHeader, HoursTable — each maps to a screen requirement in the brief.

`BottomSheet` and `Dialog` fill the nearest `position:relative` ancestor (so they stay inside a phone frame).

## UI kits

- **Guest menu** — menu (RU/KZ/EN/ZH), sticky tabs + scroll-spy, item sheet, café info, loading / closed / empty-category / sold-out / missing-photo states.
- **Owner admin** — login, menu list with toggles, add/edit dish with auto-translate, categories, café profile with accent, QR codes.
