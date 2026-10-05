import { verifyRequest } from '../../server/auth';
import { configured, error, json, type Env } from '../../server/env';

const KEY = 'menu';
const MAX_BYTES = 512 * 1024;

/** Public: the whole menu document, or null before the owner saves anything. */
export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  if (!env.MENU) return error('not_configured', 503);
  const doc = await env.MENU.get(KEY);
  return new Response(doc ?? 'null', { headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
};

/** Owner only: replace the menu document. */
export const onRequestPut: PagesFunction<Env> = async ({ request, env }) => {
  if (!configured(env)) return error('not_configured', 503);
  if (!(await verifyRequest(request, env))) return error('unauthorized', 401);
  const text = await request.text();
  if (text.length > MAX_BYTES) return error('too_large', 413);
  let doc: { cafe?: unknown; cats?: unknown; items?: unknown };
  try { doc = JSON.parse(text); } catch { return error('bad_request', 400); }
  if (!doc || typeof doc.cafe !== 'object' || !Array.isArray(doc.cats) || !Array.isArray(doc.items)) return error('bad_request', 400);
  // Photos must go through /api/upload, not be inlined.
  if (text.includes('"data:')) return error('inline_image', 400);
  await env.MENU.put(KEY, text);
  return json({ ok: true });
};
