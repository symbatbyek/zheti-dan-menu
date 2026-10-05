window.QM_DATA = {
  cafe: {
    name: 'Жеті Дән', cover: (window.QM_BASE || '../../') + 'assets/photos/plov.jpg', hours: '08:00–23:00', phone: '+7 727 000 00 00', gis: 'https://go.2gis.com/uaLr6', whatsapp: 'https://wa.me/77000000000', whatsappNum: '+7 700 000 00 00', instagram: 'https://instagram.com/zheti.dan',
    address: { ru: 'пр. Абая, 52, Алматы', kz: 'Абай даңғылы, 52, Алматы', en: 'Abay Ave 52, Almaty', zh: '阿拜大街52号，阿拉木图' }
  },
  categories: [
    { id: 'all', kz: 'Барлығы', ru: 'Все', en: 'All', zh: '全部' },
    { id: 'drinks', kz: 'Сусындар', ru: 'Напитки', en: 'Drinks', zh: '饮品' },
    { id: 'main', kz: 'Негізгі тағамдар', ru: 'Основные блюда', en: 'Main dishes', zh: '主菜' },
    { id: 'salads', kz: 'Салаттар', ru: 'Салаты', en: 'Salads', zh: '沙拉' },
    { id: 'desserts', kz: 'Десерттер', ru: 'Десерты', en: 'Desserts', zh: '甜点' }
  ],
  items: [
    { id: 'cap', cat: 'drinks', price: 1200, size: 300, unit: 'ml', photo: true, img: (window.QM_BASE || '../../') + 'assets/photos/cappuccino.jpg', tags: [],
      name: { kz: 'Капучино', ru: 'Капучино', en: 'Cappuccino', zh: '卡布奇诺' },
      desc: { kz: 'Эспрессо, сүт, қою көбік', ru: 'Эспрессо, молоко, плотная пенка', en: 'Espresso, steamed milk, thick foam', zh: '浓缩咖啡、蒸奶、绵密奶泡' } },
    { id: 'tea', cat: 'drinks', price: 800, size: 500, unit: 'ml', photo: true, img: (window.QM_BASE || '../../') + 'assets/photos/tea-milk.jpg', tags: ['veg'],
      name: { kz: 'Сүтті шай', ru: 'Чай с молоком', en: 'Tea with milk', zh: '奶茶' },
      desc: { kz: 'Қаймақ қосылған қара шай', ru: 'Чёрный чай по-казахски со сливками', en: 'Kazakh-style black tea with cream', zh: '哈萨克式红茶配奶油' } },
    { id: 'plov', cat: 'main', price: 2900, size: 350, unit: 'g', photo: true, img: (window.QM_BASE || '../../') + 'assets/photos/plov.jpg', tags: ['popular'],
      name: { kz: 'Палау', ru: 'Плов', en: 'Plov', zh: '抓饭' },
      desc: { kz: 'Күріш, сиыр еті, сәбіз, ноқат, зира', ru: 'Рис, говядина, морковь, нут, зира', en: 'Rice, beef, carrot, chickpeas, cumin', zh: '米饭、牛肉、胡萝卜、鹰嘴豆、孜然' } },
    { id: 'besh', cat: 'main', price: 4500, size: 450, unit: 'g', photo: true, img: (window.QM_BASE || '../../') + 'assets/photos/beshbarmak.jpeg', tags: ['popular'],
      name: { kz: 'Бешбармақ', ru: 'Бешбармак', en: 'Beshbarmak', zh: '别什巴尔马克' },
      desc: { kz: 'Қайнатылған ет, үй кеспесі, пияз, сорпа', ru: 'Отварное мясо, домашняя лапша, лук, сорпа', en: 'Boiled meat, hand-cut noodles, onion, broth', zh: '炖肉、手工面片、洋葱、肉汤' } },
    { id: 'lag', cat: 'main', price: 2700, size: 400, unit: 'g', photo: true, img: (window.QM_BASE || '../../') + 'assets/photos/lagman.webp', tags: ['spicy'], soldOut: true,
      name: { kz: 'Лағман', ru: 'Лагман', en: 'Lagman', zh: '拌面' },
      desc: { kz: 'Созылған кеспе, сиыр еті, көкөністер', ru: 'Тянутая лапша, говядина, овощи', en: 'Hand-pulled noodles, beef, vegetables', zh: '手拉面、牛肉、蔬菜' } },
    { id: 'shurpa', cat: 'main', price: 2400, size: 400, unit: 'ml', photo: true, img: (window.QM_BASE || '../../') + 'assets/photos/shurpa.jpg', tags: ['new'],
      name: { kz: 'Сорпа', ru: 'Шурпа', en: 'Shurpa', zh: '羊肉汤' },
      desc: { kz: 'Қой етінің сорпасы, картоп, бұрыш, көк', ru: 'Бульон из баранины, картофель, перец, зелень', en: 'Lamb broth, potato, pepper, herbs', zh: '羊肉清汤、土豆、甜椒、香草' } },
    { id: 'dapanji', cat: 'main', price: 3800, size: 450, unit: 'g', photo: true, img: (window.QM_BASE || '../../') + 'assets/photos/dapanji.jpg', tags: ['spicy'],
      name: { kz: 'Дапанжи', ru: 'Дапанджи с курицей', en: 'Dapanji chicken', zh: '大盘鸡' },
      desc: { kz: 'Тауық, бұрыш, ащы бұрыш, жалпақ кеспе', ru: 'Курица, болгарский и острый перец, широкая лапша', en: 'Chicken, bell and chili peppers, flat noodles', zh: '鸡肉、青椒、干辣椒、宽面' } },
    { id: 'caesar', cat: 'salads', price: 2600, size: 250, unit: 'g', photo: true, img: (window.QM_BASE || '../../') + 'assets/photos/caesar.jpg', tags: [],
      name: { kz: 'Цезарь салаты', ru: 'Салат «Цезарь»', en: 'Caesar salad', zh: '凯撒沙拉' },
      desc: { kz: 'Романо, гриль тауық, пармезан, крутон', ru: 'Романо, курица гриль, пармезан, гренки', en: 'Romaine, grilled chicken, parmesan, croutons', zh: '罗马生菜、烤鸡、帕玛森、面包丁' } },
    { id: 'cheese', cat: 'desserts', price: 1900, size: 150, unit: 'g', photo: true, img: (window.QM_BASE || '../../') + 'assets/photos/cheesecake.webp', tags: ['new', 'veg'],
      name: { kz: 'Чизкейк', ru: 'Чизкейк', en: 'Cheesecake', zh: '芝士蛋糕' },
      desc: { kz: 'Кілегейлі ірімшік, құмды негіз, жидек тұздығы', ru: 'Сливочный сыр, песочная основа, ягодный соус', en: 'Cream cheese, shortbread base, berry sauce', zh: '奶油奶酪、酥饼底、莓果酱' } }
  ],
  t: {
    kz: { menu: 'Мәзір', soldOut: 'Таусылды', open: 'Ашық', closed: 'Жабық', opensAt: '08:00-де ашылады', closedNote: 'Қазір жабық. Мәзірді қарауға болады.', info: 'Кафе туралы', address: 'Мекенжай', open2gis: '2GIS-те ашу', hours: 'Жұмыс уақыты', today: 'бүгін', call: 'Қоңырау шалу', empty: 'Бұл санатта әзірге тағам жоқ', g: 'г', ml: 'мл', spicy: 'Ащы', veg: 'Вегетариандық', new: 'Жаңа', popular: 'Танымал', days: ['Дс', 'Сс', 'Ср', 'Бс', 'Жм', 'Сн', 'Жс'] },
    ru: { menu: 'Меню', soldOut: 'Нет в наличии', open: 'Открыто', closed: 'Закрыто', opensAt: 'откроется в 08:00', closedNote: 'Сейчас закрыто. Меню можно посмотреть.', info: 'О кафе', address: 'Адрес', open2gis: 'Открыть в 2GIS', hours: 'Часы работы', today: 'сегодня', call: 'Позвонить', empty: 'В этой категории пока нет блюд', g: 'г', ml: 'мл', spicy: 'Острое', veg: 'Вегетарианское', new: 'Новинка', popular: 'Популярное', days: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'] },
    en: { menu: 'Menu', soldOut: 'Sold out', open: 'Open', closed: 'Closed', opensAt: 'opens at 08:00', closedNote: 'Closed now. You can still browse the menu.', info: 'About the café', address: 'Address', open2gis: 'Open in 2GIS', hours: 'Opening hours', today: 'today', call: 'Call', empty: 'No dishes in this category yet', g: 'g', ml: 'ml', spicy: 'Spicy', veg: 'Vegetarian', new: 'New', popular: 'Popular', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    zh: { menu: '菜单', soldOut: '已售罄', open: '营业中', closed: '已打烊', opensAt: '08:00 开始营业', closedNote: '现已打烊，仍可浏览菜单。', info: '餐厅信息', address: '地址', open2gis: '在 2GIS 中打开', hours: '营业时间', today: '今天', call: '致电', empty: '该分类暂无菜品', g: '克', ml: '毫升', spicy: '辣', veg: '素食', new: '新品', popular: '人气', days: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'] }
  }
};
