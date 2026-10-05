import type { Env } from './env';

const enc = new TextEncoder();
const b64url = (buf: ArrayBuffer | Uint8Array) =>
  btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const fromB64url = (s: string) => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0));

const key = (secret: string) =>
  crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);

const TOKEN_DAYS = 30;

export async function issueToken(secret: string): Promise<string> {
  const payload = b64url(enc.encode(JSON.stringify({ sub: 'owner', exp: Date.now() + TOKEN_DAYS * 864e5 })));
  const sig = await crypto.subtle.sign('HMAC', await key(secret), enc.encode(payload));
  return payload + '.' + b64url(sig);
}

export async function verifyRequest(req: Request, env: Required<Env>): Promise<boolean> {
  const m = /^Bearer (.+)\.(.+)$/.exec(req.headers.get('authorization') || '');
  if (!m) return false;
  const [, payload, sig] = m;
  try {
    const ok = await crypto.subtle.verify('HMAC', await key(env.SESSION_SECRET), fromB64url(sig), enc.encode(payload));
    if (!ok) return false;
    const { exp } = JSON.parse(new TextDecoder().decode(fromB64url(payload)));
    return typeof exp === 'number' && exp > Date.now();
  } catch {
    return false;
  }
}

/** Constant-time string comparison (avoids leaking how many characters matched). */
export function safeEqual(a: string, b: string): boolean {
  const x = enc.encode(a), y = enc.encode(b);
  let diff = x.length ^ y.length;
  for (let i = 0; i < Math.max(x.length, y.length); i++) diff |= (x[i] ?? 0) ^ (y[i] ?? 0);
  return diff === 0;
}

export const last10 = (phone: string) => phone.replace(/\D/g, '').slice(-10);
