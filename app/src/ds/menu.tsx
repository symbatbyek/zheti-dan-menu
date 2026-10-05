import type { CSSProperties, ReactNode } from 'react';
import { CafeLogo, Icon, IconButton, Price, StatusPill, Tag, cx } from './core';

export function PhotoPlaceholder({ label, icon = 'utensils', iconSize = 24 }: { label?: string; icon?: string; iconSize?: number }) {
  return <div className="qm-photo-ph"><Icon name={icon} size={iconSize} />{label && <span>{label}</span>}</div>;
}

export function Skeleton({ width = '100%', height = 16, radius, style }: { width?: number | string; height?: number | string; radius?: number | string; style?: CSSProperties }) {
  return <span className="qm-skel" aria-hidden="true" style={{ width, height, borderRadius: radius, ...style }} />;
}

export function BottomSheet({ open, onClose, children, showClose = true, closeLabel = 'Жабу' }: { open: boolean; onClose?: () => void; children?: ReactNode; showClose?: boolean; closeLabel?: string }) {
  return (
    <div className={'qm-sheet' + (open ? ' qm-sheet--open' : '')} aria-hidden={!open}>
      <div className="qm-sheet__scrim" onClick={onClose} />
      <div className="qm-sheet__panel" role="dialog" aria-modal="true">
        <span className="qm-sheet__grip" />
        {showClose && <IconButton className="qm-sheet__close" icon="x" label={closeLabel} variant="overlay" onClick={onClose} />}
        {children}
      </div>
    </div>
  );
}

export interface CafeHeaderProps { name: string; logo?: string; cover?: string | null; open?: boolean; statusLabel?: string; hours?: string; onInfo?: () => void; trailing?: ReactNode }
export function CafeHeader({ name, logo, cover, open = true, statusLabel, hours, onInfo, trailing }: CafeHeaderProps) {
  return (
    <div className="qm-cafehead">
      {cover !== undefined && <div className="qm-cafehead__cover">{cover ? <img src={cover} alt="" /> : null}</div>}
      <div className="qm-cafehead__row">
        <button type="button" className="qm-cafehead__id" onClick={onInfo}>
          <CafeLogo src={logo} name={name} size={52} />
          <span className="qm-cafehead__text">
            <span className="qm-cafehead__name">{name}{onInfo && <Icon name="chevron-right" size={20} style={{ color: 'var(--text-muted)' }} />}</span>
            <StatusPill open={open} label={statusLabel} hours={hours} />
          </span>
        </button>
        {trailing}
      </div>
    </div>
  );
}

export interface HoursDay { label: string; from?: string; to?: string; closed?: boolean; closedLabel?: string; todayLabel?: string }
export function HoursTable({ days = [], today }: { days: HoursDay[]; today?: number }) {
  return (
    <div className="qm-hours">
      {days.map((d, i) => (
        <div key={i} className={'qm-hours__row' + (i === today ? ' qm-hours__row--today' : '')}>
          <span>{d.label}{i === today && d.todayLabel && <span className="qm-hours__today">{d.todayLabel}</span>}</span>
          <span className="qm-hours__time">{d.closed ? d.closedLabel || 'Демалыс' : d.from + '–' + d.to}</span>
        </div>
      ))}
    </div>
  );
}

export interface ItemCardProps {
  name: string; description?: string; price: number; photo?: string; placeholder?: boolean;
  tags?: { kind: 'spicy' | 'veg' | 'new' | 'popular'; label: string }[];
  soldOut?: boolean; soldOutLabel?: string; layout?: 'row' | 'feature'; onClick?: () => void; lang?: string;
}
export function ItemCard({ name, description, price, photo, placeholder = false, tags = [], soldOut = false, soldOutLabel = 'Таусылды', layout = 'row', onClick, lang }: ItemCardProps) {
  const hasMedia = !!photo || placeholder;
  return (
    <button type="button" lang={lang} onClick={onClick} className={cx('qm-item', layout === 'feature' && hasMedia && 'qm-item--feature', !hasMedia && 'qm-item--text', soldOut && 'qm-item--soldout')}>
      {hasMedia && layout === 'feature' && <div className="qm-item__media">{photo ? <img src={photo} alt="" /> : <PhotoPlaceholder iconSize={32} />}</div>}
      <div className="qm-item__body">
        <h3 className="qm-item__name">{name}</h3>
        {description && <p className="qm-item__desc">{description}</p>}
        <div className="qm-item__foot">
          <Price value={price} />
          {soldOut ? <Tag kind="soldout" icon={false}>{soldOutLabel}</Tag> : tags.slice(0, 2).map((t, i) => <Tag key={i} kind={t.kind}>{t.label}</Tag>)}
        </div>
      </div>
      {hasMedia && layout !== 'feature' && <div className="qm-item__media">{photo ? <img src={photo} alt="" loading="lazy" /> : <PhotoPlaceholder />}</div>}
    </button>
  );
}
