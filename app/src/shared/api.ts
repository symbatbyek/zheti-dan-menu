import type { MenuData } from './types';

/*
 * Talks to the Cloudflare Pages Functions in /functions/api.
 * Relative URLs so it works on *.pages.dev, the custom domain, or a sub-path.
 */
export class ApiError extends Error {
  constructor(public code: string, public status: number) { super(code); }
}

const TOKEN_KEY = 'qm-owner-token';
export const getToken = () => { try { return localStorage.getItem(TOKEN_KEY); } catch { return null; } };
export const setToken = (t: string | null) => { try { t ? localStorage.setItem(TOKEN_KEY, t) : localStorage.removeItem(TOKEN_KEY); } catch { /* ignore */ } };

async function call<T>(path: string, init: RequestInit = {}, auth = false): Promise<T> {
  const headers = new Headers(init.headers);
  if (auth) headers.set('authorization', 'Bearer ' + (getToken() || ''));
  let res: Response;
  try {
    res = await fetch('api/' + path, { ...init, headers });
  } catch {
    throw new ApiError('offline', 0);
  }
  const type = res.headers.get('content-type') || '';
  // Without the backend (e.g. plain `vite` dev) the request falls through to index.html.
  if (!type.includes('json')) throw new ApiError('not_configured', res.status);
  const body = await res.json();
  if (!res.ok) throw new ApiError(body?.error || 'error', res.status);
  return body as T;
}

export const fetchMenu = () => call<MenuData | null>('menu');

export const saveMenu = (data: MenuData) =>
  call<{ ok: true }>('menu', { method: 'PUT', body: JSON.stringify(data), headers: { 'content-type': 'application/json' }, keepalive: JSON.stringify(data).length < 60_000 }, true);

export const login = (phone: string, pin: string) =>
  call<{ token: string }>('login', { method: 'POST', body: JSON.stringify({ phone, pin }), headers: { 'content-type': 'application/json' } });

/** Uploads a data: URL (from the crop screen or file picker) and returns the stored photo's relative URL. */
export async function uploadImage(dataUrl: string): Promise<string> {
  const blob = await (await fetch(dataUrl)).blob();
  const { url } = await call<{ url: string }>('upload', { method: 'POST', body: blob, headers: { 'content-type': blob.type || 'image/jpeg' } }, true);
  return url;
}
