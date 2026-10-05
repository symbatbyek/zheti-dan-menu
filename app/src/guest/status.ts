import type { OpenState } from '../shared/hours';
import type { GuestStrings } from '../shared/i18n';

/** Text after the status dot: today's hours when open, next opening when closed. */
export function statusHours(st: OpenState, s: GuestStrings): string | undefined {
  if (st.open) return st.todayRange;
  return st.opensAt ? s.opensAt(st.opensAt, st.opensDay !== undefined ? s.days[st.opensDay] : undefined) : undefined;
}
