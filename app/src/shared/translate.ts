import { LANGS, type L10n, type Lang } from './types';

/*
 * Stand-in for the AI translation endpoint (POST /translate). It knows a few
 * common category names; anything else is copied from the source text so the
 * owner sees an "AI" mark and edits it. Replace with a real provider.
 */
const DICT: Record<string, Partial<L10n>> = {
  'Тоқаштар': { ru: 'Выпечка', en: 'Pastry', zh: '烘焙' },
  'Қуырдақ': { ru: 'Куырдак', en: 'Kuyrdak', zh: '炒肉' },
  'Сорпалар': { ru: 'Супы', en: 'Soups', zh: '汤' },
  'Таңғы ас': { ru: 'Завтраки', en: 'Breakfast', zh: '早餐' },
  'Кофе': { ru: 'Кофе', en: 'Coffee', zh: '咖啡' },
  'Шай': { ru: 'Чай', en: 'Tea', zh: '茶' },
  'Балалар мәзірі': { ru: 'Детское меню', en: 'Kids menu', zh: '儿童菜单' },
  'Сусындар': { ru: 'Напитки', en: 'Drinks', zh: '饮品' },
  'Салаттар': { ru: 'Салаты', en: 'Salads', zh: '沙拉' },
  'Десерттер': { ru: 'Десерты', en: 'Desserts', zh: '甜点' },
};

export function translateText(text: string, from: Lang): Partial<L10n> {
  const src = text.trim();
  const hit = from === 'kz' ? DICT[src] : undefined;
  const out: Partial<L10n> = {};
  LANGS.filter(l => l !== from).forEach(l => { out[l] = hit?.[l] || src; });
  return out;
}

export function translateAsync(text: string, from: Lang, delay = 900): Promise<Partial<L10n>> {
  return new Promise(r => setTimeout(() => r(translateText(text, from)), delay));
}
