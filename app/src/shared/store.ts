import { useEffect, useState } from 'react';
import { SEED } from './seed';
import type { Accent, MenuData } from './types';

/*
 * Prototype persistence: the whole menu lives in localStorage and is shared by
 * Guest and Owner in the same browser. Swap this module for API calls
 * (GET /m/:slug, PATCH /dishes/:id …) when a backend exists.
 */
const KEY = 'qm-data-v2';
export const ACCENT_KEY = 'qm-accent';

const clone = <T,>(v: T): T => JSON.parse(JSON.stringify(v));

export function loadData(): MenuData {
  const base = clone(SEED);
  try {
    const s = JSON.parse(localStorage.getItem(KEY) || 'null') as Partial<MenuData> | null;
    if (s) return { cafe: { ...base.cafe, ...s.cafe }, cats: s.cats ?? base.cats, items: s.items ?? base.items };
  } catch { /* corrupt or blocked storage: fall back to seed */ }
  return base;
}

/** Returns false when storage is full and uploaded photos had to be dropped. */
export function saveData(data: MenuData): boolean {
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
    return true;
  } catch {
    const isUpload = (s?: string) => !!s && s.startsWith('data:');
    const slim: MenuData = {
      cafe: { ...data.cafe, logo: isUpload(data.cafe.logo) ? undefined : data.cafe.logo, cover: isUpload(data.cafe.cover) ? SEED.cafe.cover : data.cafe.cover },
      cats: data.cats,
      items: data.items.map(i => (isUpload(i.img) ? { ...i, img: undefined } : i)),
    };
    try { localStorage.setItem(KEY, JSON.stringify(slim)); } catch { /* give up */ }
    return false;
  }
}

export function loadAccent(): Accent {
  try { return (localStorage.getItem(ACCENT_KEY) as Accent) || 'terracotta'; } catch { return 'terracotta'; }
}

export function lsGet(key: string, fallback: string): string {
  try { return localStorage.getItem(key) ?? fallback; } catch { return fallback; }
}
export function lsSet(key: string, value: string) {
  try { localStorage.setItem(key, value); } catch { /* ignore */ }
}

/** Live menu for read-only surfaces (Guest): re-reads when Owner saves in another tab. */
export function useMenuData(): [MenuData, Accent] {
  const [data, setData] = useState(loadData);
  const [accent, setAccent] = useState(loadAccent);
  useEffect(() => {
    const h = (e: StorageEvent) => {
      if (e.key === KEY || e.key === null) setData(loadData());
      if (e.key === ACCENT_KEY || e.key === null) setAccent(loadAccent());
    };
    window.addEventListener('storage', h);
    return () => window.removeEventListener('storage', h);
  }, []);
  return [data, accent];
}

/** Seed photos are stored as paths relative to the app; uploads as data: URLs. */
export function asset(src?: string): string | undefined {
  if (!src) return undefined;
  return /^(data:|blob:|https?:)/.test(src) ? src : import.meta.env.BASE_URL + src;
}

export function readImageFile(file: File, maxSide = 1280): Promise<string> {
  // Downscale before storing so a phone photo doesn't blow the storage quota.
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const k = Math.min(1, maxSide / Math.max(img.width, img.height));
      const c = document.createElement('canvas');
      c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
      c.getContext('2d')!.drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      resolve(c.toDataURL('image/jpeg', 0.82));
    };
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Image could not be read')); };
    img.src = url;
  });
}
