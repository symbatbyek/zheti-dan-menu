export interface Env {
  /** KV namespace binding: holds the menu document, uploaded photos and login throttling. */
  MENU?: KVNamespace;
  /** Owner's phone, any format; compared by its last 10 digits. */
  OWNER_PHONE?: string;
  OWNER_PIN?: string;
  /** Long random string used to sign login tokens. */
  SESSION_SECRET?: string;
}

export const json = (body: unknown, status = 200, headers: HeadersInit = {}) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...headers } });

export const error = (code: string, status: number) => json({ error: code }, status);

export function configured(env: Env): env is Required<Env> {
  return !!(env.MENU && env.OWNER_PHONE && env.OWNER_PIN && env.SESSION_SECRET);
}
