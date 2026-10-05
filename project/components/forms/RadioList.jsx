import React from 'react';
export function RadioList({ options = [], value, onChange }) {
  return (
    <div className="qm-radios" role="radiogroup">
      {options.map(o => (
        <button key={o.value} type="button" role="radio" aria-checked={o.value === value} className="qm-radio" onClick={() => onChange && onChange(o.value)}>
          <span className="qm-radio__dot" />
          {o.lead && <span className="qm-radio__lead">{o.lead}</span>}
          <span className="qm-radio__text"><span className="qm-radio__label">{o.label}</span>{o.sub && <span className="qm-radio__sub">{o.sub}</span>}</span>
        </button>
      ))}
    </div>
  );
}
