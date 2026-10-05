import type { Lang } from '../shared/types';

// The owner panel's interface language only relabels the bottom bar and Settings,
// as in the design; the other admin screens are Kazakh.
export const NAV_L: Record<Lang, [string, string, string, string]> = {
  kz: ['Мәзір', 'Санаттар', 'QR', 'Баптаулар'], ru: ['Меню', 'Категории', 'QR', 'Настройки'],
  en: ['Menu', 'Categories', 'QR', 'Settings'], zh: ['菜单', '分类', '二维码', '设置'],
};

export const SETTINGS_L: Record<Lang, { title: string; profile: string; phone: string; lang: string; note: string; logout: string }> = {
  kz: { title: 'Баптаулар', profile: 'Кафе профілі', phone: 'Телефон', lang: 'Интерфейс тілі', note: 'Тек басқару панеліне әсер етеді. Қонақ мәзірі әрқашан 4 тілде.', logout: 'Шығу' },
  ru: { title: 'Настройки', profile: 'Профиль кафе', phone: 'Телефон', lang: 'Язык интерфейса', note: 'Меняет только панель управления. Меню для гостей всегда на 4 языках.', logout: 'Выйти' },
  en: { title: 'Settings', profile: 'Café profile', phone: 'Phone', lang: 'Interface language', note: 'Changes the admin panel only. The guest menu always offers all 4 languages.', logout: 'Log out' },
  zh: { title: '设置', profile: '咖啡馆资料', phone: '电话', lang: '界面语言', note: '仅更改管理面板。顾客菜单始终提供 4 种语言。', logout: '退出登录' },
};

export const guestUrl = () => new URL('./', location.href).href;
export const openGuest = () => window.open(guestUrl(), '_blank');

/** "7001234567" → "700 123 45 67" */
export function fmtPhone(v: string) {
  const d = v.replace(/\D/g, '').slice(0, 10);
  return [d.slice(0, 3), d.slice(3, 6), d.slice(6, 8), d.slice(8, 10)].filter(Boolean).join(' ');
}
