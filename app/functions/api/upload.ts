import { verifyRequest } from '../../server/auth';
import { configured, error, json, type Env } from '../../server/env';

const TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_BYTES = 3 * 1024 * 1024;

/** Owner only: store one photo, return the relative URL to put in the menu. */
export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!configured(env)) return error('not_configured', 503);
  if (!(await verifyRequest(request, env))) return error('unauthorized', 401);
  const type = (request.headers.get('content-type') || '').split(';')[0];
  if (!TYPES.includes(type)) return error('bad_type', 415);
  const body = await request.arrayBuffer();
  if (!body.byteLength || body.byteLength > MAX_BYTES) return error('too_large', 413);
  const id = crypto.randomUUID();
  await env.MENU.put('img:' + id, body, { metadata: { type } });
  return json({ url: 'api/img/' + id });
};
