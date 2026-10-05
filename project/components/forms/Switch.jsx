import React from 'react';
export function Switch({ checked = false, onChange, label, disabled, ariaLabel }) {
  return (
    <button type="button" role="switch" aria-checked={checked} aria-label={ariaLabel} disabled={disabled} className="qm-switch" onClick={e => { e.stopPropagation(); onChange && onChange(!checked); }}>
      {label && <span style={{ flex: 1 }}>{label}</span>}
      <span className="qm-switch__track"><span className="qm-switch__thumb" /></span>
    </button>
  );
}
