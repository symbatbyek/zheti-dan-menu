import React from 'react';
export function Dialog({ open, title, children, actions, onClose }) {
  if (!open) return null;
  return (
    <div className="qm-dialog" onClick={e => { if (e.target === e.currentTarget && onClose) onClose(); }}>
      <div className="qm-dialog__panel" role="alertdialog" aria-modal="true">
        {title && <h2 className="qm-dialog__title">{title}</h2>}
        {children && <div className="qm-dialog__body">{children}</div>}
        {actions && <div className="qm-dialog__actions">{actions}</div>}
      </div>
    </div>
  );
}
