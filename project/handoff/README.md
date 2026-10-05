# QR Menu — Developer handoff

Product: digital QR menu for small cafés in Almaty. Two mobile web surfaces sharing one backend.
Sample café: **Жеті Дән**. Default language **Kazakh (kz)**; menu content in kz · ru · en · zh.

This project contains **working prototypes and a design system**, not production code. Rebuild in your stack (React/Next or similar recommended); use the prototypes as the visual + behavioural spec.

---

## 1. What to open

| File | What it is |
|---|---|
| `Guest.html` | Guest menu prototype, full-screen, fluid (320–560px, centred column on desktop) |
| `Owner.html` | Owner admin PWA prototype, same layout rules |
| `ui_kits/guest-menu/index.html` | Guest menu with state switcher (language, loading, closed, empty, accent) |
| `ui_kits/admin/index.html` | Admin with screen switcher (login, list, edit, categories, QR, settings, profile) |
| `readme.md` | Design guide: content rules, visual foundations, iconography, component index |
| `styles.css` → `tokens/*.css`, `components/components.css` | All tokens and component CSS |
| `components/**` | 35 React primitives; each has `.jsx`, `.d.ts` (props contract), `.prompt.md` (usage) |
| `assets/photos/` | Stand-in food photos (replace with café's own; cheesecake has a watermark) |

Prototype source of truth for behaviour: `ui_kits/guest-menu/*.jsx`, `ui_kits/admin/*.jsx`, sample data `ui_kits/guest-menu/data.js`.

---

## 2. Layout rules
- Mobile-first, fluid width. Root container: `width:100%; max-width:560px; height:100dvh; margin:0 auto`.
- Respect safe areas: `viewport-fit=cover`, pad with `env(safe-area-inset-*)`.
- Body text ≥14px, tap targets ≥44px (admin primary 52px, FAB 56px).
- Kazakh/Russian strings run 30–40% longer than English: wrap, never truncate dish names (max 3 lines on cards).
- Set `lang="kk"` / `"ru"` / `"en"` / `"zh"` on the menu root. `[lang="zh"]` swaps to Noto Sans SC and opens line-height.
- Sheets and dialogs are contained in the app root (`position:relative` + `data-qm-root`); pickers portal into it.

---

## 3. Guest menu — screens & states

| Screen | Source | Notes |
|---|---|---|
| Menu | `MenuScreen.jsx` | CafeHeader (cover, logo, name → info, StatusPill, LangSwitcher), sticky CategoryTabs with tap-to-scroll + scroll-spy, sections of ItemCard (photo left) |
| Item detail | `ItemSheet.jsx` | BottomSheet: 4:3 photo, name, tags, description, weight/volume, price |
| Café info | `CafeInfoScreen.jsx` | Address + «2GIS-те ашу», weekly HoursTable (today highlighted), Call / WhatsApp / Instagram |

States: loading skeleton · café closed (StatusPill red + Banner, menu still browsable) · empty category (EmptyState) · sold out (greyed card, «Таусылды» tag, stays visible) · missing photo (text-only card) · ZH full screen.

Language: default = phone language if one of the 4, else **kz**. Persist choice (localStorage `qm-guest-lang`).
Open/closed: computed from today's hours in the café's timezone (Asia/Almaty).

## 4. Owner admin — screens & states

Bottom nav: Мәзір · Санаттар · QR · Баптаулар.

| Screen | Source | Key behaviour |
|---|---|---|
| Login | `AdminLogin.jsx` | Phone (+7, auto-spaced) → 4-digit SMS code (auto-submit, `autocomplete="one-time-code"`), resend timer, language pill |
| Menu list | `AdminMenu.jsx` | Search, grouped by category with "N тағам · M таусылды", one-tap availability Switch (no save step — live), drag to reorder within category, FAB «Тағам қосу», «Қонақ көзімен» |
| Add/Edit dish | `DishEdit.jsx` | Photo (camera / gallery → fixed 4:3 crop), LangTabs with status dots (green filled · amber AI-unreviewed · hollow empty), name/description per language, dark auto-translate card listing missing languages, «Қайта аудару», price auto-formatted `2 500 ₸`, category picker (bottom sheet), weight + г/мл, tag chips (green outline when on), availability, Save, delete dialog offering «Таусылды» as the safer action |
| Categories | `AdminCategories.jsx` | Reorder (drag), counts, full-screen editor with 4 language fields + «Қазақшадан аудару»; delete asks where to move dishes (first remaining pre-selected) |
| QR | `AdminQr.jsx` | One menu QR (no table numbers), size Стикер 8×8 см (6/A4) or Тұғыр A6 (4/A4), PDF / PNG |
| Settings | `AdminSettings.jsx` | Café row (logo + name) → profile, phone, interface language KZ/RU/EN/ZH (admin only), logout |
| Café profile | `AdminProfile.jsx` | Cover, logo, name, accent ColorPicker with live preview + contrast note, address, 2GIS link, phone, WhatsApp, Instagram, hours per day + copy to all days, open guest menu |

Toasts: «Сақталды», «Тағам жойылды», «Таусылды деп белгіленді».

---

## 5. Data model (suggested)

```ts
type Lang = 'kz' | 'ru' | 'en' | 'zh';
type L10n = Record<Lang, string>;
type TransStatus = 'filled' | 'auto' | 'empty';   // per language, drives LangTabs dots

interface Cafe {
  id: string; slug: string;              // slug → public menu URL
  name: string; logoUrl?: string; coverUrl?: string;
  accent: 'terracotta'|'steppe'|'saffron'|'plum'|'teal'|'charcoal';
  address: L10n; gisUrl?: string;
  phone?: string; whatsapp?: string; instagram?: string;
  timezone: 'Asia/Almaty';
  hours: { day: 0|1|2|3|4|5|6; open: boolean; from: 'HH:mm'; to: 'HH:mm' }[]; // 0 = Monday
}
interface Category { id: string; cafeId: string; name: L10n; sort: number; }
interface Dish {
  id: string; cafeId: string; categoryId: string; sort: number;
  name: L10n; description: L10n; translation: Record<Lang, TransStatus>; sourceLang: Lang;
  priceKzt: number;                       // integer tenge
  size?: number; unit?: 'g' | 'ml';
  tags: ('spicy'|'veg'|'new'|'popular')[];
  available: boolean;
  photoUrl?: string;                      // 4:3, compressed client-side before upload
}
interface Owner { id: string; phone: string; cafeId: string; uiLang: Lang; }
```

## 6. API (suggested REST)

Public (cache aggressively, CDN):
- `GET /m/:slug` → `{ cafe, categories, dishes }` (only fields guests need)

Auth:
- `POST /auth/sms` `{ phone }` → sends code
- `POST /auth/verify` `{ phone, code }` → session token

Owner (auth required):
- `GET/PATCH /cafe`
- `GET/POST /categories`, `PATCH/DELETE /categories/:id` (DELETE body `{ moveTo }` when dishes exist), `POST /categories/reorder` `{ ids[] }`
- `GET/POST /dishes`, `PATCH/DELETE /dishes/:id`, `POST /dishes/reorder` `{ categoryId, ids[] }`
- `PATCH /dishes/:id/availability` `{ available }` (one-tap toggle, optimistic UI)
- `POST /uploads` → signed URL for photo/logo/cover
- `POST /translate` `{ text: { name, description }, from: Lang, to: Lang[] }` → AI translation (mark result `auto`)
- `GET /qr?size=sticker|stand&format=pdf|png` → print file (QR encodes the permanent `/m/:slug` URL)

Realtime nice-to-have: guest menu reflects availability changes without reload.

---

## 7. Design system mapping

Tokens: `tokens/colors.css` (paper/ink neutrals, accent slot + `[data-accent]` presets, status, tags, warning), `typography.css` (Onest + Noto Sans SC, 12–30px scale), `spacing.css` (4px scale, radii 6/8/12/16/24/pill, tap sizes, shadows, motion, z-index).

Components by screen:
- Guest: CafeHeader, CafeLogo, StatusPill, LangSwitcher, CategoryTabs, SectionHeader, ItemCard, Tag, Price, PhotoPlaceholder, Skeleton, BottomSheet, Banner, EmptyState, AppBar, HoursTable, Button, Icon
- Admin: AppBar, BottomNav, TextField, Select (custom sheet picker), CodeInput, Switch, Segmented, RadioList, LangTabs, Tag (toggle), ListGroup, SettingRow, MenuRow, Fab, Dialog, Toast, Banner, ColorPicker, QrCode, Button, IconButton

Icons: Lucide (2px stroke) via CSS mask; brand logos (WhatsApp, Telegram, 2GIS) via Simple Icons with `brand:` prefix. No emoji.

---

## 8. Open items before build
1. Product name + logo (placeholder "QR Menu").
2. Real café address, WhatsApp, Instagram.
3. Native-speaker review of all Kazakh strings.
4. Real food photography (replace stand-ins; watermark on cheesecake).
5. Confirm fonts (Onest + Noto Sans SC are a substitution, not supplied).
6. Choose SMS provider and AI translation provider.
7. Production domain → regenerate QR.

## 9. Prototype shortcuts (do not ship)
- Data persists in `localStorage` (`qm-data-v1`) and is shared only within one browser.
- Any 4-digit code logs in; translation uses a tiny fake dictionary.
- QR image comes from api.qrserver.com; PDF is a browser print sheet.
- React + Babel run in-browser from CDN.
