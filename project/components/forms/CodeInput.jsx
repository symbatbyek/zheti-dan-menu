import React from 'react';
export function CodeInput({ length = 4, value = '', onChange, autoFocus }) {
  const [focus, setFocus] = React.useState(false);
  const cells = Array.from({ length }, (_, i) => value[i] || '');
  return (
    <div className="qm-code">
      {cells.map((c, i) => <span key={i} className={'qm-code__cell' + (focus && i === Math.min(value.length, length - 1) ? ' qm-code__cell--active' : '')}>{c}</span>)}
      <input className="qm-code__input" inputMode="numeric" autoComplete="one-time-code" maxLength={length} value={value} autoFocus={autoFocus}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        onChange={e => onChange && onChange(e.target.value.replace(/\D/g, '').slice(0, length))} aria-label="SMS коды" />
    </div>
  );
}
