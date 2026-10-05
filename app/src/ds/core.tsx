import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';
import { iconUrl } from './icons';

export const cx = (...a: (string | false | null | undefined)[]) => a.filter(Boolean).join(' ');

export interface IconProps { name: string; size?: number; label?: string; className?: string; style?: CSSProperties }
export function Icon({ name, size = 20, label, className, style }: IconProps) {
  const url = iconUrl(name);
  if (import.meta.env.DEV && !url) console.warn(`[Icon] "${name}" is not bundled; add it to src/ds/icons.ts`);
  return (
    <span
      className={cx('qm-icon', className)}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={{ width: size, height: size, '--qm-icon': url ? `url("${url}")` : 'none', ...style } as CSSProperties}
    />
  );
}

export type ButtonVariant = 'primary' | 'secondary' | 'soft' | 'ghost' | 'danger';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant; size?: 'md' | 'lg'; block?: boolean; icon?: string; iconRight?: string;
}
export function Button({ variant = 'primary', size = 'md', block = false, icon, iconRight, children, className, type = 'button', ...rest }: ButtonProps) {
  const s = size === 'lg' ? 22 : 20;
  return (
    <button type={type} className={cx('qm-btn', 'qm-btn--' + variant, size === 'lg' && 'qm-btn--lg', block && 'qm-btn--block', className)} {...rest}>
      {icon && <Icon name={icon} size={s} />}
      {children}
      {iconRight && <Icon name={iconRight} size={s} />}
    </button>
  );
}

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string; label: string; variant?: 'ghost' | 'secondary' | 'overlay' | 'danger'; size?: number;
}
export function IconButton({ icon, label, variant = 'ghost', size = 22, className, type = 'button', ...rest }: IconButtonProps) {
  return <button type={type} aria-label={label} title={label} className={cx('qm-iconbtn', 'qm-iconbtn--' + variant, className)} {...rest}><Icon name={icon} size={size} /></button>;
}

export function CafeLogo({ src, name = '', size = 48 }: { src?: string; name?: string; size?: number }) {
  return (
    <span className="qm-logo" style={{ width: size, height: size, fontSize: Math.round(size * 0.42), borderRadius: size >= 64 ? 'var(--radius-lg)' : 'var(--radius-md)' }}>
      {src ? <img src={src} alt={name} /> : (name.trim()[0] || '·').toUpperCase()}
    </span>
  );
}

export function formatTenge(v: number | string | undefined) {
  return Number(v || 0).toLocaleString('ru-RU').replace(/\s/g, ' ') + ' ₸';
}
export function Price({ value, size, strike = false, className, style }: { value: number; size?: number; strike?: boolean; className?: string; style?: CSSProperties }) {
  return <span className={cx('qm-price', strike && 'qm-price--strike', className)} style={{ fontSize: size, ...style }}>{formatTenge(value)}</span>;
}

export function StatusPill({ open = true, label, hours }: { open?: boolean; label?: string; hours?: string }) {
  return (
    <span className={cx('qm-status', !open && 'qm-status--closed')}>
      <span className="qm-status__dot" />
      <span className="qm-status__label">{label || (open ? 'Ашық' : 'Жабық')}</span>
      {hours && <span>· {hours}</span>}
    </span>
  );
}

export type TagKind = 'spicy' | 'veg' | 'new' | 'popular' | 'neutral' | 'soldout';
const TAG_ICONS: Partial<Record<TagKind, string>> = { spicy: 'flame', veg: 'leaf', new: 'sparkles', popular: 'star' };
export interface TagProps { kind?: TagKind; icon?: string | false; children?: ReactNode; pressed?: boolean; onClick?: () => void }
export function Tag({ kind = 'neutral', icon, children, pressed, onClick }: TagProps) {
  const toggled = !!onClick && !!pressed;
  const glyph = icon === false ? null : toggled ? 'check' : icon || TAG_ICONS[kind];
  const inner = <>{glyph && <Icon name={glyph} size={toggled ? 18 : 12} style={toggled ? { margin: '0 -2px' } : undefined} />}{children}</>;
  if (onClick) return <button type="button" className={'qm-tag qm-tag--' + kind} aria-pressed={!!pressed} onClick={onClick}>{inner}</button>;
  return <span className={'qm-tag qm-tag--' + kind}>{inner}</span>;
}
