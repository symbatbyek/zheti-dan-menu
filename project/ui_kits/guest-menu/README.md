# Guest menu UI kit

Public menu page a guest opens by scanning the table QR code. Mobile-first, 375px.

- `index.html` — interactive demo in a 375×812 frame. Controls above the frame switch language (RU/KZ/EN/ZH, remembered in localStorage), state (Menu / Loading / Closed / Empty category) and café accent.
- `MenuScreen.jsx` — cover, café header (logo, name, open/closed, LangSwitcher), sticky CategoryTabs with tap-to-scroll + scroll-spy, sections of ItemCards, empty-category state; also `MenuSkeleton` loading state.
- `ItemSheet.jsx` — item detail BottomSheet: 4:3 photo, name, tags, description, weight/volume, price.
- `CafeInfoScreen.jsx` — address + Open in 2GIS, weekly hours (today highlighted), Call / WhatsApp / Instagram.
- `data.js` — sample content from the brief (Жеті Дән) in 4 languages. Descriptions and weights are invented fillers; the brief only gave names and prices.

Photos are placeholders (no food photography supplied). Lagman is sold out.
