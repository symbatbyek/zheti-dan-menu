# Design Brief: QR Menu for Cafés in Almaty

## 1. Product overview

A digital menu service for small cafés and restaurants in Almaty.

- **Guests** scan a QR code on the table and open a menu web page on their phone. No app install.
- **Owners** manage the menu from an admin panel on their phone: dishes, photos, prices and availability.
- The menu is available in **4 languages**: Kazakh, Russian, English, Chinese.

Product name: **[TBD]**. Use a neutral placeholder wordmark.

## 2. Scope of this design task

Design two parts, both **mobile-first (375px width)**:

1. **Guest menu**: a public web page opened from the QR code
2. **Owner admin panel**: a web app (PWA) the owner saves to their phone's home screen

**Out of scope for now:** online ordering, payments, table booking, analytics, desktop layouts.

## 3. Users

| User | Context | Needs |
|---|---|---|
| Guest | At the table, on their phone, often a tourist | Find food fast, read the menu in their language, see photos and prices |
| Café owner / manager | Busy, between tasks, on their phone, not technical | Update prices, add dishes with photos, mark items sold out in seconds |

## 4. Languages

- Supported: **Қазақша (KZ) · Русский (RU) · English (EN) · 中文 (ZH)**
- The guest picks a language in the header; the choice is remembered.
- The default language follows the phone's language, falling back to Russian.
- The owner types a dish in **one language**, then taps **Auto-translate** to fill the other three with AI. Every translation stays editable.
- The admin panel UI itself is in **Russian and Kazakh**.

**Typography requirements**
- Kazakh Cyrillic letters must render correctly: ә ғ қ ң ө ұ ү һ і
- Chinese needs a proper CJK font with comfortable line height.
- Kazakh and Russian text can be 30–40% longer than English. Layouts must handle long dish names (2–3 lines) without breaking.

## 5. Guest menu: screens

### 5.1 Menu (main screen)
- **Header:** café logo, café name, open/closed status with today's hours, language switcher
- **Optional cover image** at the top
- **Category tabs** in a horizontal scrollable row that sticks to the top on scroll: All, Drinks, Main dishes, Salads, Desserts (set by the owner)
- Tapping a tab scrolls to that section. Scrolling the list highlights the current tab.
- **Item cards:** photo, name, short description (1–2 lines), price, and optional tags (Spicy, Vegetarian, New, Popular)
- **Sold-out state:** item is greyed out with a "Sold out" label and stays visible
- **Missing photo state:** a clean placeholder or text-only card variant

### 5.2 Item detail (bottom sheet)
- Large photo, full name, full description
- Weight or volume (e.g. 350 g, 400 ml)
- Price and tags

### 5.3 Café info
Reached from the header or footer:
- Address with an "Open in 2GIS" button
- Working hours for the week
- Buttons: Call, WhatsApp, Instagram

### 5.4 States to show
- Loading skeleton
- Empty category
- Café closed now
- Language switched to Chinese (show a full screen in ZH)

## 6. Owner admin panel: screens

### 6.1 Login
- Phone number, then SMS code. No passwords.

### 6.2 Menu list (home)
- Items grouped by category, with a search bar
- Each row: thumbnail, name, price, and a **Sold out toggle** usable in one tap without opening the item
- Drag to reorder items within a category
- Floating **"+ Add dish"** button

### 6.3 Add / edit dish
- **Photo:** take with camera or choose from gallery, then crop to the card ratio
- **Name** and **description**, typed in one language
- **Auto-translate** button fills KZ / RU / EN / ZH
- **Language tabs** (KZ · RU · EN · ZH) to review and edit each translation
- Price in tenge, auto-formatted as `2 500 ₸`
- Category (picker)
- Weight or volume (optional)
- Tags (Spicy, Vegetarian, New, Popular)
- Available / Sold out toggle
- Save, plus Delete with confirmation

### 6.4 Categories
- Add, rename (all 4 languages, with auto-translate), reorder, delete
- Deleting a category that still has items asks where to move them

### 6.5 Café profile
- Name, logo, cover image
- Address, 2GIS link, phone, WhatsApp, Instagram
- Working hours per day
- **Accent color** picker that themes the guest menu

### 6.6 QR codes
- Preview of the café's QR code
- Download as PNG or PDF, ready to print for table stickers or stands
- Optional table numbers printed under each code

### 6.7 Preview
- "View as guest" button that opens the live guest menu

## 7. Design direction

- **Guest menu:** appetizing and photo-led. It should load fast and feel calm. Food photos are the hero, and the UI stays quiet.
- **Admin panel:** practical with big tap targets, usable with one hand while standing behind a counter.
- **Theming:** one base template. The café's logo and accent color customize it. Keep color tokens organized so more templates can be added later.
- Prices are always easy to spot.
- Accessibility: readable text sizes (minimum 14px body), sufficient contrast, tap targets of at least 44px.

## 8. Sample content

Use this content in mockups.

**Café:** Dala Coffee, Abay Ave 52, Almaty, open 08:00–23:00

**Categories**

| KZ | RU | EN | ZH |
|---|---|---|---|
| Барлығы | Все | All | 全部 |
| Сусындар | Напитки | Drinks | 饮品 |
| Негізгі тағамдар | Основные блюда | Main dishes | 主菜 |
| Салаттар | Салаты | Salads | 沙拉 |
| Десерттер | Десерты | Desserts | 甜点 |

**Items**

| Category | KZ | RU | EN | ZH | Price |
|---|---|---|---|---|---|
| Drinks | Капучино | Капучино | Cappuccino | 卡布奇诺 | 1 200 ₸ |
| Drinks | Сүтті шай | Чай с молоком | Tea with milk | 奶茶 | 800 ₸ |
| Main | Палау | Плов | Plov | 抓饭 | 2 900 ₸ |
| Main | Бешбармақ | Бешбармак | Beshbarmak | 别什巴尔马克 | 4 500 ₸ |
| Main | Лағман | Лагман | Lagman | 拌面 | 2 700 ₸ (Sold out) |
| Salads | Цезарь салаты | Салат «Цезарь» | Caesar salad | 凯撒沙拉 | 2 600 ₸ |
| Desserts | Чизкейк | Чизкейк | Cheesecake | 芝士蛋糕 | 1 900 ₸ |

**UI strings**

| KZ | RU | EN | ZH |
|---|---|---|---|
| Мәзір | Меню | Menu | 菜单 |
| Таусылды | Нет в наличии | Sold out | 已售罄 |
| Ашық | Открыто | Open | 营业中 |
| Жабық | Закрыто | Closed | 已打烊 |

## 9. Deliverables

**Guest menu (mobile):**
1. Menu: main screen in RU
2. Menu: scrolled, with sticky category tabs
3. Menu: in ZH
4. Item detail bottom sheet
5. Café info
6. States: loading, sold-out item, missing photo, closed

**Admin panel (mobile):**
7. Login (phone + code)
8. Menu list with sold-out toggles
9. Add/edit dish, including the auto-translate flow and language tabs
10. Categories
11. Café profile with accent color
12. QR codes download

Plus a small **component sheet**: buttons, tabs, item card variants, tags, toggles, inputs and color tokens.
