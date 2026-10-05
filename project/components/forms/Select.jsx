import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { BottomSheet } from '../menu/BottomSheet.jsx';
export function Select({ label, hint, value, onChange, options = [], placeholder = 'Таңдаңыз', title, variant = 'field', id }) {
  const [open, setOpen] = React.useState(false);
  const [root, setRoot] = React.useState(null);
  const ref = React.useRef(null);
  React.useEffect(() => { if (ref.current) setRoot(ref.current.closest('[data-qm-root]') || document.body); }, []);
  const cur = options.find(o => o.value === value);
  const pick = v => { setOpen(false); if (onChange && v !== value) onChange(v); };
  const RD = typeof window !== 'undefined' ? window.ReactDOM : null;
  const sheet = (
    <div className={root === document.body ? 'qm-picker-host qm-picker-host--fixed' : 'qm-picker-host'}>
      <BottomSheet open={open} onClose={() => setOpen(false)} showClose={false}>
        <div className="qm-picker">
          <div className="qm-picker__title">{title || label}</div>
          <div role="listbox">
            {options.map(o => (
              <button key={o.value} type="button" role="option" aria-selected={o.value === value} className="qm-picker__opt" onClick={() => pick(o.value)}>
                <span className="qm-picker__text"><span>{o.label}</span>{o.sub && <span className="qm-picker__sub">{o.sub}</span>}</span>
                {o.value === value && <Icon name="check" size={22} />}
              </button>
            ))}
          </div>
        </div>
      </BottomSheet>
    </div>
  );
  const trigger = variant === 'inline' ? (
    <button ref={ref} id={id} type="button" className="qm-select-inline" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen(true)}>
      <span>{cur ? cur.label : placeholder}</span><Icon name="chevron-right" size={20} />
    </button>
  ) : (
    <div className="qm-field" ref={ref}>
      {label && <label className="qm-field__label" htmlFor={id}>{label}</label>}
      <button id={id} type="button" className="qm-field__control qm-select" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen(true)}>
        <span className={cur ? 'qm-select__value' : 'qm-select__value qm-select__value--empty'}>{cur ? cur.label : placeholder}</span>
        <Icon name="chevron-down" size={20} />
      </button>
      {hint && <div className="qm-field__hint">{hint}</div>}
    </div>
  );
  return <>{trigger}{root && RD && RD.createPortal ? RD.createPortal(sheet, root) : null}</>;
}
