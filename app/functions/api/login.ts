import { issueToken, last10, safeEqual } from '../../server/auth';
import { configured, error, json, type Env } from '../../server/env';

// A 4-digit PIN is short, so wrong attempts are throttled per IP.
const MAX_FAILS = 5;
const LOCK_SECONDS = 15 * 60;

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!configured(env)) return error('not_configured', 503);
  const ip = request.headers.get('cf-connecting-ip') || 'unknown';
  const failKey = 'fail:' + ip;
  const fails = Number((await env.MENU.get(failKey)) || 0);
  if (fails >= MAX_FAILS) return error('too_many_attempts', 429);

  let body: { phone?: unknown; pin?: unknown };
  try { body = await request.json(); } catch { return error('bad_request', 400); }
  const phone = typeof body.phone === 'string' ? last10(body.phone) : '';
  const pin = typeof body.pin === 'string' ? body.pin.trim() : '';

  const ok = phone.length === 10 && safeEqual(phone, last10(env.OWNER_PHONE)) && safeEqual(pin, env.OWNER_PIN.trim());
  if (!ok) {
    await env.MENU.put(failKey, String(fails + 1), { expirationTtl: LOCK_SECONDS });
    return error('wrong_credentials', 401);
  }
  if (fails) await env.MENU.delete(failKey);
  return json({ token: await issueToken(env.SESSION_SECRET) });
};
