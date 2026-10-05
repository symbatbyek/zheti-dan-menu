import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Toast({ open, children, icon = 'circle-check', onDone, duration = 2200 }) {
  React.useEffect(() => { if (!open || !onDone) return; const t = setTimeout(onDone, duration); return () => clearTimeout(t); }, [open]);
  return (
    <div className={'qm-toast' + (open ? ' qm-toast--open' : '')} role="status" aria-live="polite">
      <Icon name={icon} size={20} />{children}
    </div>
  );
}
