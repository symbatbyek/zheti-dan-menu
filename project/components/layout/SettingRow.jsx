import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function SettingRow({ icon, title, subtitle, control, onClick, chevron }) {
  const Tag = onClick ? 'button' : 'div';
  return (
    <Tag type={onClick ? 'button' : undefined} className="qm-setrow" onClick={onClick}>
      {icon && <Icon name={icon} size={22} className="qm-setrow__icon" />}
      <span className="qm-setrow__text"><span className="qm-setrow__title">{title}</span>{subtitle && <span className="qm-setrow__sub">{subtitle}</span>}</span>
      {control}
      {(chevron || (onClick && !control)) && <Icon name="chevron-right" size={20} className="qm-setrow__chev" />}
    </Tag>
  );
}
