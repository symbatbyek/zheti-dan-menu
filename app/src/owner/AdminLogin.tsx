import { useEffect, useState, type CSSProperties } from 'react';
import { Button, CodeInput, Icon, IconButton, LangSwitcher, TextField } from '../ds';
import type { Lang } from '../shared/types';
import { fmtPhone } from './strings';

/*
 * SMS login UI from the design. OTP is not verified yet: any 4-digit code signs in.
 * Wire POST /auth/sms and /auth/verify here when the backend exists.
 */
const h1: CSSProperties = { margin: '0 0 8px', font: '700 30px/1.15 var(--font-sans)', letterSpacing: '-.02em' };
const p: CSSProperties = { margin: '0 0 28px', font: '400 16px/1.5 var(--font-sans)', color: 'var(--text-secondary)' };

export function AdminLogin({ onDone, uiLang, setUiLang }: { onDone: (phone: string) => void; uiLang: Lang; setUiLang: (l: Lang) => void }) {
  const [step, setStep] = useState<'phone' | 'code'>('phone');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [left, setLeft] = useState(42);
  const done = () => onDone('+7 ' + phone);
  useEffect(() => {
    if (code.length !== 4) return;
    const t = setTimeout(done, 400);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);
  useEffect(() => {
    if (step !== 'code' || left <= 0) return;
    const t = setTimeout(() => setLeft(l => l - 1), 1000);
    return () => clearTimeout(t);
  }, [step, left]);
  const back = () => { setStep('phone'); setCode(''); };
  const toCode = () => { setStep('code'); setLeft(42); };
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', padding: '12px 20px 20px', background: 'var(--surface-page)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 56 }}>
        {step === 'phone'
          ? <div style={{ font: '700 20px/1 var(--font-sans)', letterSpacing: '-.02em' }}>QR Menu</div>
          : <IconButton icon="chevron-left" label="Артқа" size={24} onClick={back} style={{ marginLeft: -10 }} />}
        {step === 'phone' && <LangSwitcher value={uiLang} onChange={setUiLang} />}
      </div>
      {step === 'phone' ? (
        <>
          <div style={{ marginTop: 44 }}>
            <h1 style={h1}>Кафе иесі ретінде кіру</h1>
            <p style={p}>SMS арқылы код жібереміз. Құпиясөз қажет емес.</p>
            <TextField label="Телефон нөмірі" prefix="+7" inputMode="tel" autoComplete="tel-national" placeholder="700 000 00 00" value={phone} onChange={e => setPhone(fmtPhone(e.target.value))} autoFocus />
          </div>
          <div style={{ marginTop: 'auto' }}><Button size="lg" block disabled={phone.replace(/\D/g, '').length < 10} onClick={toCode}>Код алу</Button></div>
        </>
      ) : (
        <>
          <div style={{ marginTop: 16 }}>
            <h1 style={h1}>Кодты енгізіңіз</h1>
            <p style={p}>+7 {phone} нөміріне жібердік. <button onClick={back} style={{ border: 0, background: 'none', padding: 0, font: 'inherit', fontWeight: 600, color: 'var(--accent-ink)', cursor: 'pointer' }}>Өзгерту</button></p>
            <CodeInput value={code} onChange={setCode} autoFocus />
            {left > 0 ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 20, font: '500 15px var(--font-sans)', color: 'var(--text-muted)' }}>
                <Icon name="clock" size={16} />Қайта жіберу <b style={{ color: 'var(--text-primary)', fontVariantNumeric: 'tabular-nums' }}>0:{String(left).padStart(2, '0')}</b> кейін
              </div>
            ) : (
              <Button variant="ghost" icon="refresh-cw" onClick={() => setLeft(42)} style={{ marginTop: 12, marginLeft: -12, color: 'var(--accent-ink)' }}>Кодты қайта жіберу</Button>
            )}
            <div style={{ marginTop: 8, font: '400 14px/1.5 var(--font-sans)', color: 'var(--text-muted)' }}>Код осы телефонға келсе, өзі толтырылады.</div>
          </div>
          <div style={{ marginTop: 'auto' }}><Button size="lg" block disabled={code.length < 4} onClick={done}>Кіру</Button></div>
        </>
      )}
    </div>
  );
}
