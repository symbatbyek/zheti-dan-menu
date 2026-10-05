# Жеті Дән · QR menu

Two mobile web pages built from the Claude Design handoff in `../project`:

| Page | File | Who uses it |
|---|---|---|
| Guest menu | `index.html` → `src/guest/` | Visitors who scan the QR code |
| Owner panel | `owner.html` → `src/owner/` | The café owner (menu, categories, QR, settings) |

## Run it

```bash
npm install
npm run dev        # http://localhost:5173 (guest) and /owner.html (owner)
npm run build      # static site in dist/ — upload this folder to any static host
npm run preview    # serve dist/ locally
```

## Where things are

- `src/ds/` — the design-system components (Button, ItemCard, BottomSheet…) as typed React.
- `src/styles/` — tokens and component CSS, copied unchanged from the design system.
- `src/shared/seed.ts` — the starting menu, café details and opening hours.
- `src/shared/store.ts` — saving and loading. **Swap this file for API calls when there is a backend.**
- `src/shared/hours.ts` — open/closed status, calculated from the hours in Asia/Almaty time.
- `src/shared/translate.ts` — placeholder for AI translation.
- `public/photos/` — dish photos.

## Current limits (prototype shortcuts)

- **Data stays in one browser.** Owner edits are saved in `localStorage` and the Guest page in the
  *same browser* sees them. Guests' phones won't see them until a backend stores the menu.
- **No real login.** Any phone number and any 4-digit code opens the owner panel.
- **Translation is a stand-in.** It knows a few category names; otherwise it copies the source text
  and marks it "AI" for the owner to fix.
- The QR code points at the Guest page next to `owner.html`, so print it from the final domain.
