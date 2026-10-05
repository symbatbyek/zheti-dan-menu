# Жеті Дән · QR menu

Two mobile web pages built from the Claude Design handoff in `../project`:

| Page | File | Who uses it |
|---|---|---|
| Guest menu | `index.html` → `src/guest/` | Visitors who scan the QR code |
| Owner panel | `owner.html` → `src/owner/` | The café owner (menu, categories, QR, settings) |

## Run it

```bash
npm install
npm run build && npm run dev:api   # app + backend on http://localhost:8788 (needs .dev.vars, see .dev.vars.example)
npm run dev                        # UI with hot reload on :5173; /api is proxied to :8788
```

## Backend (Cloudflare Pages Functions)

`functions/api/*` runs on Cloudflare next to the site; shared code is in `server/`.

| Endpoint | Who | What |
|---|---|---|
| `GET /api/menu` | public | the menu document (café, categories, dishes, accent) |
| `PUT /api/menu` | owner | replace the menu document |
| `POST /api/login` | public | `{ phone, pin }` → token (30 days); 5 wrong tries lock that IP for 15 min |
| `POST /api/upload` | owner | store a photo, returns `api/img/<id>` |
| `GET /api/img/:id` | public | serve a photo |

Cloudflare settings (Pages project → Settings):
- **Bindings:** KV namespace bound as `MENU`.
- **Variables and Secrets:** `OWNER_PHONE`, `OWNER_PIN`, `SESSION_SECRET` (long random text). Set them as **Secret**.

## Where things are

- `src/ds/` — design-system components as typed React.
- `src/styles/` — tokens and component CSS, copied unchanged from the design system.
- `src/shared/seed.ts` — the starting menu, shown until the owner saves for the first time.
- `src/shared/api.ts` — calls to the backend; `src/shared/store.ts` — loading, caching, image helpers.
- `src/shared/hours.ts` — open/closed status from the hours, in Asia/Almaty time.
- `src/shared/translate.ts` — placeholder for AI translation.
- `public/photos/` — starting dish photos.

## Known limits

- One owner account (phone + PIN from the Cloudflare settings). No SMS.
- Guests may see changes up to ~1 minute later (Cloudflare KV caching).
- Translation is a stand-in: a few category names, otherwise the source text marked "AI".
- Replaced photos are not deleted from storage.
