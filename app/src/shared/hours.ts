import type { DayHours } from './types';

const TZ = 'Asia/Almaty';

/** Weekday (0 = Monday) and minutes since midnight in the café's timezone. */
export function cafeNow(d = new Date()): { day: number; min: number } {
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: TZ, weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(d);
  const get = (t: string) => parts.find(p => p.type === t)?.value ?? '';
  const day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].indexOf(get('weekday'));
  return { day, min: Number(get('hour')) * 60 + Number(get('minute')) };
}

const toMin = (hhmm: string) => { const [h, m] = hhmm.split(':').map(Number); return (h || 0) * 60 + (m || 0); };

export interface OpenState { open: boolean; today: number; todayRange?: string; opensAt?: string; opensDay?: number }

export function openState(hours: DayHours[], now = cafeNow()): OpenState {
  const { day, min } = now;
  const prev = hours[(day + 6) % 7];
  const cur = hours[day];
  // Before midnight: today's shift. After midnight: tail of yesterday's overnight shift (e.g. 18:00–02:00).
  const today = !!cur?.on && (toMin(cur.to) > toMin(cur.from) ? min >= toMin(cur.from) && min < toMin(cur.to) : min >= toMin(cur.from));
  const tail = !!prev?.on && toMin(prev.to) <= toMin(prev.from) && min < toMin(prev.to);
  const open = today || tail;
  const todayRange = cur?.on ? `${cur.from}–${cur.to}` : undefined;
  if (open) return { open, today: day, todayRange };
  for (let i = 0; i < 7; i++) {
    const d = (day + i) % 7; const h = hours[d];
    if (h?.on && (i > 0 || toMin(h.from) > min)) return { open, today: day, todayRange, opensAt: h.from, opensDay: i === 0 ? undefined : d };
  }
  return { open, today: day, todayRange };
}

/** "08:00-де", "09:00-да": Kazakh locative suffix follows the last spoken number. */
export function kzAt(hhmm: string): string {
  const [h, m] = hhmm.split(':').map(Number);
  const n = m || h;
  const units = ['де', 'де', 'де', 'те', 'те', 'те', 'да', 'де', 'де', 'да'];
  const tens = ['де', 'да', 'да', 'да', 'та', 'де'];
  const sfx = n === 0 ? 'де' : n % 10 ? units[n % 10] : tens[Math.floor(n / 10)];
  return `${hhmm}-${sfx}`;
}
