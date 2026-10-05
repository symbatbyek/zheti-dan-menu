# Owner admin UI kit

PWA the café owner saves to the home screen. UI language: Kazakh (switched from Russian on request; brief allows RU + KZ). 375px, one-handed, 44–56px targets.

- `index.html` — interactive demo; chips above the frame jump between screens. Bottom nav: Меню · Категории · QR-коды · Кафе.
- `AdminLogin.jsx` — phone (+7, auto-spaced) → 4-digit SMS code (auto-submits).
- `AdminMenu.jsx` — search, items grouped by category, one-tap availability Switch per row, drag to reorder within a category (HTML5 drag in the demo), floating "Добавить блюдо".
- `DishEdit.jsx` — photo (camera/gallery → 4:3 crop overlay), LangTabs with status dots, name/description, Auto-translate (fills other 3 languages, marks them "auto" until edited), price auto-formatted `2 500 ₸`, weight, category, tag chips, availability, Save, Delete with confirmation.
- `AdminCategories.jsx` — list with reorder/delete, rename sheet with 4 languages + auto-translate, delete dialog asking where to move existing dishes.
- `AdminProfile.jsx` — cover, logo, name, accent ColorPicker (re-themes the frame live), contacts, per-day hours, "Как видит гость" preview.
- `AdminQr.jsx` — sticker preview, print size (sticker / stand), PDF / PNG download. No table numbers (removed on request).

The QR graphic is a placeholder (Lucide `qr-code` glyph), not a scannable code. Kazakh strings are machine-quality — have a native speaker review.

## Revision (from uploaded Admin Panel exploration)
Adopted UX ideas, kept this system's visuals: language pill on login, café name above titles + «Қонақ көзімен», group notes ("3 тағам · 1 таусылды"), sold-out rows show red «Таусылды», Save in the top bar, dark auto-translate card listing missing languages, amber AI-review note that clears once a tab is opened, "Бастапқы мәтін / Қайта аудару", price/category/weight as a compact row list with г/мл segmented, check-mark tag chips, crop screen copy, delete dialog that offers «Таусылды» as the safer action, full-screen category editor with 4 stacked languages, move-dishes radio list on category delete, accent contrast note + live preview, copy hours to all days, QR sizes (sticker / stand) with page counts (table numbers removed later on request), Settings tab with interface language (KZ/RU/EN/ZH).
