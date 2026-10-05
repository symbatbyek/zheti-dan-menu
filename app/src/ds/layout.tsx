import { Children, type ReactNode } from 'react';
import { Icon } from './core';

export function ListGroup({ children, inset = false }: { children?: ReactNode; inset?: boolean }) {
  const kids = Children.toArray(children).filter(Boolean);
  return <div className={'qm-group' + (inset ? ' qm-group--inset' : '')}>{kids.map((c, i) => <div key={i} className="qm-group__item">{c}</div>)}</div>;
}

export function SectionHeader({ children, count, action, variant = 'caps' }: { children?: ReactNode; count?: ReactNode; action?: ReactNode; variant?: 'caps' | 'title' }) {
  return (
    <div className={'qm-sechead qm-sechead--' + variant}>
      <h2 className="qm-sechead__title">{children}</h2>
      {count != null && <span className="qm-sechead__count">{count}</span>}
      {action}
    </div>
  );
}

export interface SettingRowProps { icon?: string; title: ReactNode; subtitle?: ReactNode; control?: ReactNode; onClick?: () => void; chevron?: boolean }
export function SettingRow({ icon, title, subtitle, control, onClick, chevron }: SettingRowProps) {
  const body = (
    <>
      {icon && <Icon name={icon} size={22} className="qm-setrow__icon" />}
      <span className="qm-setrow__text"><span className="qm-setrow__title">{title}</span>{subtitle && <span className="qm-setrow__sub">{subtitle}</span>}</span>
      {control}
      {(chevron || (onClick && !control)) && <Icon name="chevron-right" size={20} className="qm-setrow__chev" />}
    </>
  );
  return onClick ? <button type="button" className="qm-setrow" onClick={onClick}>{body}</button> : <div className="qm-setrow">{body}</div>;
}
