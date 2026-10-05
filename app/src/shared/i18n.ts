import type { Lang } from './types';
import { kzAt } from './hours';

export interface GuestStrings {
  menu: string; all: string; soldOut: string; open: string; closed: string; closedNote: string;
  opensAt: (time: string, day?: string) => string;
  info: string; address: string; open2gis: string; hours: string; today: string; call: string; dayOff: string;
  empty: string; g: string; ml: string; spicy: string; veg: string; new: string; popular: string; close: string; back: string;
  days: string[];
}

export const T: Record<Lang, GuestStrings> = {
  kz: { menu: 'Мәзір', all: 'Барлығы', soldOut: 'Таусылды', open: 'Ашық', closed: 'Жабық', closedNote: 'Қазір жабық. Мәзірді қарауға болады.',
    opensAt: (t, d) => (d ? d + ' ' : '') + kzAt(t) + ' ашылады',
    info: 'Кафе туралы', address: 'Мекенжай', open2gis: '2GIS-те ашу', hours: 'Жұмыс уақыты', today: 'бүгін', call: 'Қоңырау шалу', dayOff: 'Демалыс',
    empty: 'Бұл санатта әзірге тағам жоқ', g: 'г', ml: 'мл', spicy: 'Ащы', veg: 'Вегетариандық', new: 'Жаңа', popular: 'Танымал', close: 'Жабу', back: 'Артқа',
    days: ['Дс', 'Сс', 'Ср', 'Бс', 'Жм', 'Сн', 'Жс'] },
  ru: { menu: 'Меню', all: 'Все', soldOut: 'Нет в наличии', open: 'Открыто', closed: 'Закрыто', closedNote: 'Сейчас закрыто. Меню можно посмотреть.',
    opensAt: (t, d) => 'откроется ' + (d ? d.toLowerCase() + ' ' : '') + 'в ' + t,
    info: 'О кафе', address: 'Адрес', open2gis: 'Открыть в 2GIS', hours: 'Часы работы', today: 'сегодня', call: 'Позвонить', dayOff: 'Выходной',
    empty: 'В этой категории пока нет блюд', g: 'г', ml: 'мл', spicy: 'Острое', veg: 'Вегетарианское', new: 'Новинка', popular: 'Популярное', close: 'Закрыть', back: 'Назад',
    days: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'] },
  en: { menu: 'Menu', all: 'All', soldOut: 'Sold out', open: 'Open', closed: 'Closed', closedNote: 'Closed now. You can still browse the menu.',
    opensAt: (t, d) => 'opens ' + (d ? d + ' ' : '') + 'at ' + t,
    info: 'About the café', address: 'Address', open2gis: 'Open in 2GIS', hours: 'Opening hours', today: 'today', call: 'Call', dayOff: 'Closed',
    empty: 'No dishes in this category yet', g: 'g', ml: 'ml', spicy: 'Spicy', veg: 'Vegetarian', new: 'New', popular: 'Popular', close: 'Close', back: 'Back',
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
  zh: { menu: '菜单', all: '全部', soldOut: '已售罄', open: '营业中', closed: '已打烊', closedNote: '现已打烊，仍可浏览菜单。',
    opensAt: (t, d) => (d ? d + ' ' : '') + t + ' 开始营业',
    info: '餐厅信息', address: '地址', open2gis: '在 2GIS 中打开', hours: '营业时间', today: '今天', call: '致电', dayOff: '休息',
    empty: '该分类暂无菜品', g: '克', ml: '毫升', spicy: '辣', veg: '素食', new: '新品', popular: '人气', close: '关闭', back: '返回',
    days: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'] },
};
