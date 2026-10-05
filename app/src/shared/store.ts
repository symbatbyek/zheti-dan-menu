import { useEffect, useState } from 'react';
import { SEED } from './seed';
import { fetchMenu } from './api';
import type { MenuData } from './types';

/*
 * The menu document lives on the server (GET/PUT /api/menu). A copy is kept in
 * localStorage so the Guest page opens instantly and still works offline.
 */
const CACHE_KEY = 'qm-menu-cache';

const clone = <T,>(v: T): T => JSON.parse(JSON.stringify(v));

/** Fills in fields added after a document was saved, so older documents keep working. */
export function normalize(d: Partial<MenuData> | null | undefined): MenuData {
  const base = clone(SEED);
  if (!d) return base;
  return { cafe: { ...base.cafe, ...d.cafe }, cats: d.cats ?? base.cats, items: d.items ?? base.items, accent: d.accent ?? base.accent };
}

export function loadCache(): MenuData | null {
  try { const s = localStorage.getItem(CACHE_KEY); return s ? normalize(JSON.parse(s)) : null; } catch { return null; }
}
export function saveCache(d: MenuData) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify(d)); } catch { /* full or blocked */ }
}

export function lsGet(key: string, fallback: string): string {
  try { return localStorage.getItem(key) ?? fallback; } catch { return fallback; }
}
export function lsSet(key: string, value: string) {
  try { localStorage.setItem(key, value); } catch { /* ignore */ }
}

/** Live menu for the Guest page: cached copy first, then the server's; refreshed when the tab comes back. */
export function useMenuData(): { data: MenuData; ready: boolean } {
  const [cached] = useState(loadCache);
  const [data, setData] = useState<MenuData>(() => cached ?? normalize(null));
  const [ready, setReady] = useState(!!cached); // skeleton only on the very first visit
  useEffect(() => {
    let alive = true;
    const load = () => fetchMenu()
      .then(d => { if (!alive) return; const n = normalize(d); setData(n); saveCache(n); })
      .catch(() => { /* keep cached/seed menu */ })
      .finally(() => alive && setReady(true));
    load();
    const t = setTimeout(() => alive && setReady(true), 4000); // never spin forever on a slow network
    const onVis = () => { if (document.visibilityState === 'visible') load(); };
    document.addEventListener('visibilitychange', onVis);
    return () => { alive = false; clearTimeout(t); document.removeEventListener('visibilitychange', onVis); };
  }, []);
  return { data, ready };
}

/** Seed photos are stored as paths relative to the app; uploads as api/img/… paths. */
export function asset(src?: string): string | undefined {
  if (!src) return undefined;
  return /^(data:|blob:|https?:)/.test(src) ? src : import.meta.env.BASE_URL + src;
}

export function readImageFile(file: File, maxSide = 1280): Promise<string> {
  // Downscale before uploading so a phone photo stays small.
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
