import React from 'react';
import { Icon } from '../core/Icon.jsx';
const LANGS = [{ code: 'kz', label: 'Қазақша' }, { code: 'ru', label: 'Русский' }, { code: 'en', label: 'English' }, { code: 'zh', label: '中文' }];
export function LangSwitcher({ value = 'kz', onChange, languages = LANGS }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const h = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('pointerdown', h);
    return () => document.removeEventListener('pointerdown', h);
  }, [open]);
  return (
    <div className="qm-lang" ref={ref}>
      <button type="button" className="qm-lang__btn" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen(o => !o)}>
        <Icon name="globe" size={18} />{value.toUpperCase()}
      </button>
      {open && (
        <div className="qm-lang__menu" role="listbox">
          {languages.map(l => (
            <button key={l.code} type="button" role="option" aria-selected={l.code === value} className="qm-lang__opt" lang={l.code === 'kz' ? 'kk' : l.code} onClick={() => { setOpen(false); onChange && onChange(l.code); }}>
              <span>{l.label}</span>
              {l.code === value ? <Icon name="check" size={18} /> : <span className="qm-lang__code">{l.code.toUpperCase()}</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
