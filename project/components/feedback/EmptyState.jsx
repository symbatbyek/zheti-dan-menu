import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function EmptyState({ icon = 'utensils-crossed', title, children, action, dashed = true }) {
  return (
    <div className={'qm-empty' + (dashed ? ' qm-empty--dashed' : '')}>
      <Icon name={icon} size={28} />
      {title && <div className="qm-empty__title">{title}</div>}
      {children && <div className="qm-empty__body">{children}</div>}
      {action}
    </div>
  );
}
