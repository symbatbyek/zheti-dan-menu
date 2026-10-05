import type { CSSProperties, ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { Icon, Price } from './core';
import { Switch } from './forms';
import { PhotoPlaceholder } from './menu';
import type { Accent } from '../shared/types';

const PRESETS: { id: Accent; label: string; color: string; dark?: boolean }[] = [
  { id: 'terracotta', label: 'Терракота', color: 'var(--terracotta-600)' },
  { id: 'steppe', label: 'Дала', color: 'var(--steppe-600)' },
  { id: 'saffron', label: 'Запыран', color: 'var(--saffron-500)', dark: true },
  { id: 'plum', label: 'Алхоры', color: 'var(--plum-600)' },
  { id: 'teal', label: 'Көгілдір', color: 'var(--teal-600)' },
  { id: 'charcoal', label: 'Графит', color: 'var(--ink-900)' },
];
export function ColorPicker({ value = 'terracotta', onChange }: { value?: Accent; onChange?: (a: Accent) => void }) {
  return (
    <div className="qm-swatches" role="radiogroup">
      {PRESETS.map(o => (
        <button key={o.id} type="button" role="radio" aria-checked={o.id === value} aria-label={o.label} title={o.label} className="qm-swatch" style={{ background: o.color, color: o.dark ? 'var(--ink-900)' : '#fff' }} onClick={() => onChange?.(o.id)}>
          {o.id === value && <Icon name="check" size={22} />}
        </button>
      ))}
    </div>
  );
}

export function Dialog({ open, title, children, actions, onClose }: { open: boolean; title?: ReactNode; children?: ReactNode; actions?: ReactNode; onClose?: () => void }) {
  if (!open) return null;
  return (
    <div className="qm-dialog" onClick={e => { if (e.target === e.currentTarget) onClose?.(); }}>
      <div className="qm-dialog__panel" role="alertdialog" aria-modal="true">
        {title && <h2 className="qm-dialog__title">{title}</h2>}
        {children && <div className="qm-dialog__body">{children}</div>}
        {actions && <div className="qm-dialog__actions">{actions}</div>}
      </div>
    </div>
  );
}

export function Fab({ icon = 'plus', children, style, ...rest }: { icon?: string; style?: CSSProperties } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="button" className="qm-fab" style={style} {...rest}><Icon name={icon} size={24} />{children}</button>;
}

export interface MenuRowProps { name: string; price: number; photo?: string; available?: boolean; onToggle?: (v: boolean) => void; onClick?: () => void; draggable?: boolean; soldOutLabel?: string; availableLabel?: string; /** Spread onto the grip (e.g. pointer handlers from a sortable hook). */ handleProps?: HTMLAttributes<HTMLSpanElement> }
export function MenuRow({ name, price, photo, available = true, onToggle, onClick, draggable = true, soldOutLabel = 'Таусылды', availableLabel = 'Қолжетімді', handleProps }: MenuRowProps) {
  return (
    <div className={'qm-row' + (available ? '' : ' qm-row--soldout')}>
      {draggable ? <span className="qm-row__handle" aria-label="Сүйреу" {...handleProps}><Icon name="grip-vertical" size={20} /></span> : <span style={{ width: 12 }} />}
      <span className="qm-row__thumb">{photo ? <img src={photo} alt="" loading="lazy" /> : <PhotoPlaceholder iconSize={18} />}</span>
      <button type="button" className="qm-row__main" onClick={onClick}>
        <span className="qm-row__name">{name}</span>
        <span className="qm-row__meta">{available ? <Price value={price} /> : <span className="qm-row__sold">{soldOutLabel}</span>}</span>
      </button>
      <Switch checked={available} onChange={onToggle} ariaLabel={availableLabel} />
    </div>
  );
}
