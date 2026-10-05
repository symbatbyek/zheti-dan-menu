import { useEffect, type ReactNode } from 'react';
import { Icon } from './core';

export type BannerTone = 'info' | 'accent' | 'closed' | 'danger' | 'success' | 'warning';
const BANNER_ICON: Record<BannerTone, string> = { info: 'info', accent: 'sparkles', closed: 'clock', danger: 'circle-alert', success: 'circle-check', warning: 'sparkles' };
export function Banner({ tone = 'info', icon, children, action }: { tone?: BannerTone; icon?: string; children?: ReactNode; action?: ReactNode }) {
  return (
    <div className={'qm-banner qm-banner--' + tone} role="status">
      <Icon name={icon || BANNER_ICON[tone]} size={20} className="qm-banner__icon" />
      <div className="qm-banner__text">{children}</div>
      {action}
    </div>
  );
}

export function EmptyState({ icon = 'utensils-crossed', title, children, action, dashed = true }: { icon?: string; title?: ReactNode; children?: ReactNode; action?: ReactNode; dashed?: boolean }) {
  return (
    <div className={'qm-empty' + (dashed ? ' qm-empty--dashed' : '')}>
      <Icon name={icon} size={28} />
      {title && <div className="qm-empty__title">{title}</div>}
      {children && <div className="qm-empty__body">{children}</div>}
      {action}
    </div>
  );
}

export function Toast({ open, children, icon = 'circle-check', onDone, duration = 2200 }: { open: boolean; children?: ReactNode; icon?: string; onDone?: () => void; duration?: number }) {
  useEffect(() => {
    if (!open || !onDone) return;
    const t = setTimeout(onDone, duration);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, children]);
  return (
    <div className={'qm-toast' + (open ? ' qm-toast--open' : '')} role="status" aria-live="polite">
      <Icon name={icon} size={20} />{children}
    </div>
  );
}
