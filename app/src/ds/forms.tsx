import { useEffect, useId, useRef, useState, type CSSProperties, type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react';
import { createPortal } from 'react-dom';
import { Icon, cx } from './core';
import { BottomSheet } from './menu';

type FieldBase = { label?: string; hint?: string; error?: string; prefix?: string; suffix?: string; icon?: string; className?: string; style?: CSSProperties; id?: string };
export type TextFieldProps =
  | (FieldBase & { multiline?: false } & Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'>)
  | (FieldBase & { multiline: true; rows?: number } & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'prefix'>);
export function TextField(props: TextFieldProps) {
  const { label, hint, error, prefix, suffix, icon, className, style, id, ...rest } = props;
  const autoId = useId();
  const fid = id || autoId;
  let control;
  if (rest.multiline) {
    const { multiline: _m, rows = 3, ...ta } = rest;
    control = <textarea id={fid} className="qm-field__input" rows={rows} {...ta} />;
  } else {
    const { multiline: _m, ...inp } = rest;
    control = <input id={fid} className="qm-field__input" {...inp} />;
  }
  return (
    <div className={cx('qm-field', error && 'qm-field--error', className)} style={style}>
      {label && <label className="qm-field__label" htmlFor={fid}>{label}</label>}
      <div className="qm-field__control" style={rest.multiline ? { alignItems: 'flex-start' } : undefined}>
        {icon && <Icon name={icon} size={20} />}
        {prefix && <span className="qm-field__affix">{prefix}</span>}
        {control}
        {suffix && <span className="qm-field__affix">{suffix}</span>}
      </div>
      {(error || hint) && <div className="qm-field__hint">{error || hint}</div>}
    </div>
  );
}

export function Switch({ checked = false, onChange, label, disabled, ariaLabel }: { checked?: boolean; onChange?: (v: boolean) => void; label?: string; disabled?: boolean; ariaLabel?: string }) {
  return (
    <button type="button" role="switch" aria-checked={checked} aria-label={ariaLabel} disabled={disabled} className="qm-switch" onClick={e => { e.stopPropagation(); onChange?.(!checked); }}>
      {label && <span style={{ flex: 1 }}>{label}</span>}
      <span className="qm-switch__track"><span className="qm-switch__thumb" /></span>
    </button>
  );
}

export function CodeInput({ length = 4, value = '', onChange, autoFocus, mask = false, label = 'SMS коды', autoComplete = 'one-time-code' }: { length?: number; value?: string; onChange?: (v: string) => void; autoFocus?: boolean; mask?: boolean; label?: string; autoComplete?: string }) {
  const [focus, setFocus] = useState(false);
  const cells = Array.from({ length }, (_, i) => (value[i] ? (mask ? '•' : value[i]) : ''));
  return (
    <div className="qm-code">
      {cells.map((c, i) => <span key={i} className={'qm-code__cell' + (focus && i === Math.min(value.length, length - 1) ? ' qm-code__cell--active' : '')}>{c}</span>)}
      <input className="qm-code__input" inputMode="numeric" autoComplete={autoComplete} maxLength={length} value={value} autoFocus={autoFocus}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        onChange={e => onChange?.(e.target.value.replace(/\D/g, '').slice(0, length))} aria-label={label} />
    </div>
  );
}

export interface RadioOption<V extends string> { value: V; label: string; sub?: string; lead?: string }
export function RadioList<V extends string>({ options = [], value, onChange }: { options: RadioOption<V>[]; value: V; onChange?: (v: V) => void }) {
  return (
    <div className="qm-radios" role="radiogroup">
      {options.map(o => (
        <button key={o.value} type="button" role="radio" aria-checked={o.value === value} className="qm-radio" onClick={() => onChange?.(o.value)}>
          <span className="qm-radio__dot" />
          {o.lead && <span className="qm-radio__lead">{o.lead}</span>}
          <span className="qm-radio__text"><span className="qm-radio__label">{o.label}</span>{o.sub && <span className="qm-radio__sub">{o.sub}</span>}</span>
        </button>
      ))}
    </div>
  );
}

export function Segmented<V extends string>({ options = [], value, onChange, inline = false }: { options: { value: V; label: string }[]; value: V; onChange?: (v: V) => void; inline?: boolean }) {
  return (
    <div className={'qm-seg' + (inline ? ' qm-seg--inline' : '')} role="radiogroup">
      {options.map(o => <button key={o.value} type="button" role="radio" aria-checked={o.value === value} aria-selected={o.value === value} className="qm-seg__item" onClick={() => onChange?.(o.value)}>{o.label}</button>)}
    </div>
  );
}

export interface SelectOption { value: string; label: string; sub?: string }
export interface SelectProps { label?: string; hint?: string; value?: string; onChange?: (v: string) => void; options: SelectOption[]; placeholder?: string; title?: string; variant?: 'field' | 'inline'; id?: string }
/** Custom picker: the options slide up in a BottomSheet portalled into the nearest [data-qm-root]. */
export function Select({ label, hint, value, onChange, options = [], placeholder = 'Таңдаңыз', title, variant = 'field', id }: SelectProps) {
  const [open, setOpen] = useState(false);
  const [root, setRoot] = useState<HTMLElement | null>(null);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => { if (ref.current) setRoot(ref.current.closest<HTMLElement>('[data-qm-root]') || document.body); }, []);
  const cur = options.find(o => o.value === value);
  const pick = (v: string) => { setOpen(false); if (v !== value) onChange?.(v); };
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
    <button ref={ref as React.RefObject<HTMLButtonElement>} id={id} type="button" className="qm-select-inline" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen(true)}>
      <span>{cur ? cur.label : placeholder}</span><Icon name="chevron-right" size={20} />
    </button>
  ) : (
    <div className="qm-field" ref={ref as React.RefObject<HTMLDivElement>}>
      {label && <label className="qm-field__label" htmlFor={id}>{label}</label>}
      <button id={id} type="button" className="qm-field__control qm-select" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen(true)}>
        <span className={cur ? 'qm-select__value' : 'qm-select__value qm-select__value--empty'}>{cur ? cur.label : placeholder}</span>
        <Icon name="chevron-down" size={20} />
      </button>
      {hint && <div className="qm-field__hint">{hint}</div>}
    </div>
  );
  return <>{trigger}{root ? createPortal(sheet, root) : null}</>;
}
