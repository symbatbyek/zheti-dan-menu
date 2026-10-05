import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { Icon, IconButton, cx } from './core';
import type { Lang } from '../shared/types';

export function AppBar({ title, onBack, backLabel = 'Артқа', actions, center = false, style }: { title?: ReactNode; onBack?: () => void; backLabel?: string; actions?: ReactNode; center?: boolean; style?: CSSProperties }) {
  return (
    <header className="qm-appbar" style={style}>
      {onBack ? <IconButton icon="chevron-left" label={backLabel} size={24} onClick={onBack} /> : <span style={{ width: 6 }} />}
      <div className="qm-appbar__title" style={center ? { textAlign: 'center' } : undefined}>{title}</div>
      {actions ? <div className="qm-appbar__actions">{actions}</div> : center && <span style={{ width: onBack ? 44 : 6, flex: 'none' }} />}
    </header>
  );
}

export interface NavItem { id: string; label: string; icon: string }
export function BottomNav({ items = [], value, onChange }: { items: NavItem[]; value: string; onChange?: (id: string) => void }) {
  return (
    <nav className="qm-bnav">
      {items.map(it => (
        <button key={it.id} type="button" className="qm-bnav__item" aria-current={it.id === value ? 'page' : undefined} onClick={() => onChange?.(it.id)}>
          <Icon name={it.icon} size={24} />{it.label}
        </button>
      ))}
    </nav>
  );
}

export function CategoryTabs({ items = [], value, onChange, sticky = false }: { items: { id: string; label: string }[]; value: string; onChange?: (id: string) => void; sticky?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const bar = ref.current;
    const el = bar?.querySelector<HTMLElement>('[aria-selected="true"]');
    if (!bar || !el) return;
    const target = el.offsetLeft - (bar.clientWidth - el.offsetWidth) / 2;
    bar.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
  }, [value]);
  return (
    <div ref={ref} role="tablist" className={cx('qm-cattabs', sticky && 'qm-cattabs--sticky')}>
      {items.map(it => <button key={it.id} role="tab" type="button" aria-selected={it.id === value} className="qm-cattab" onClick={() => onChange?.(it.id)}>{it.label}</button>)}
    </div>
  );
}

const LANG_OPTIONS: { code: Lang; label: string }[] = [{ code: 'kz', label: 'Қазақша' }, { code: 'ru', label: 'Русский' }, { code: 'en', label: 'English' }, { code: 'zh', label: '中文' }];
export function LangSwitcher({ value = 'kz', onChange, languages = LANG_OPTIONS }: { value?: Lang; onChange?: (l: Lang) => void; languages?: { code: Lang; label: string }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const h = (e: PointerEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('pointerdown', h);
    return () => document.removeEventListener('pointerdown', h);
  }, [open]);
  return (
    <div className="qm-lang" ref={ref}>
      <button type="button" className="qm-lang__btn" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen(o => !o)}>
        <Icon name="globe" size={18} />{value.toUpperCase()}
      </button>
      {open && (
        <div className="qm-lang__menu" role="listbox">
          {languages.map(l => (
            <button key={l.code} type="button" role="option" aria-selected={l.code === value} className="qm-lang__opt" lang={l.code === 'kz' ? 'kk' : l.code} onClick={() => { setOpen(false); onChange?.(l.code); }}>
              <span>{l.label}</span>
              {l.code === value ? <Icon name="check" size={18} /> : <span className="qm-lang__code">{l.code.toUpperCase()}</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export type TransStatus = 'filled' | 'auto' | 'empty';
export function LangTabs({ value = 'kz', onChange, status = {}, languages = ['kz', 'ru', 'en', 'zh'] }: { value?: Lang; onChange?: (l: Lang) => void; status?: Partial<Record<Lang, TransStatus>>; languages?: Lang[] }) {
  return (
    <div className="qm-seg" role="tablist">
      {languages.map(c => (
        <button key={c} type="button" role="tab" aria-selected={c === value} className="qm-seg__item" onClick={() => onChange?.(c)}>
          {status[c] && <span className={'qm-seg__dot qm-seg__dot--' + status[c]} />}{c.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
