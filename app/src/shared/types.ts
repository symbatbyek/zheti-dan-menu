export type Lang = 'kz' | 'ru' | 'en' | 'zh';
export const LANGS: Lang[] = ['kz', 'ru', 'en', 'zh'];
export type L10n = Record<Lang, string>;
export type Accent = 'terracotta' | 'steppe' | 'saffron' | 'plum' | 'teal' | 'charcoal';
export type DishTag = 'spicy' | 'veg' | 'new' | 'popular';
export type TransStatus = 'filled' | 'auto' | 'empty';

export interface DayHours { on: boolean; from: string; to: string } // index 0 = Monday

export interface Cafe {
  name: string;
  logo?: string;
  cover?: string;
  address: L10n;
  gis: string;
  phone: string;      // "+7 727 000 00 00"
  whatsapp: string;   // "+7 700 000 00 00"
  instagram: string;  // handle without @
  hours: DayHours[];
}

export interface Category extends L10n { id: string }

export interface Dish {
  id: string;
  cat: string;
  price: number;
  size?: number;
  unit: 'g' | 'ml';
  img?: string;
  tags: DishTag[];
  soldOut?: boolean;
  name: L10n;
  desc: L10n;
  /** Per-language translation state; drives the LangTabs dots in the editor. */
  trans?: Record<Lang, TransStatus>;
}

export interface MenuData { cafe: Cafe; cats: Category[]; items: Dish[] }

/** HTML lang attribute for a content language ("zh" switches the CJK type tokens). */
export const htmlLang = (l: Lang) => (l === 'kz' ? 'kk' : l);
