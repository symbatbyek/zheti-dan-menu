import React from 'react';
export function Segmented({ options = [], value, onChange, inline = false }) {
  return (
    <div className={'qm-seg' + (inline ? ' qm-seg--inline' : '')} role="radiogroup">
      {options.map(o => <button key={o.value} type="button" role="radio" aria-checked={o.value === value} aria-selected={o.value === value} className="qm-seg__item" onClick={() => onChange && onChange(o.value)}>{o.label}</button>)}
    </div>
  );
}
