import React from 'react';
import { IconButton } from '../core/IconButton.jsx';
export function BottomSheet({ open, onClose, children, showClose = true, closeLabel = 'Жабу' }) {
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
