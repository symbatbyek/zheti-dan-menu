import { error, type Env } from '../../../server/env';

/** Public: serve an uploaded photo. Ids are random and never reused, so cache forever. */
export const onRequestGet: PagesFunction<Env> = async ({ params, env }) => {
  if (!env.MENU) return error('not_configured', 503);
  const id = String(params.id);
  if (!/^[0-9a-f-]{36}$/.test(id)) return error('not_found', 404);
  const { value, metadata } = await env.MENU.getWithMetadata<{ type: string }>('img:' + id, 'arrayBuffer');
  if (!value) return error('not_found', 404);
  return new Response(value, { headers: { 'content-type': metadata?.type || 'image/jpeg', 'cache-control': 'public, max-age=31536000, immutable' } });
};
