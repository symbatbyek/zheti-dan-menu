import React from 'react';
export function SectionHeader({ children, count, action, variant = 'caps' }) {
  return (
    <div className={'qm-sechead qm-sechead--' + variant}>
      <h2 className="qm-sechead__title">{children}</h2>
      {count != null && <span className="qm-sechead__count">{count}</span>}
      {action}
    </div>
  );
}
