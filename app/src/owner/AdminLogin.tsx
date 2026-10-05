import { useEffect, useState, type CSSProperties } from 'react';
import { Button, CodeInput, IconButton, LangSwitcher, TextField } from '../ds';
import { ApiError, login } from '../shared/api';
import type { Lang } from '../shared/types';
import { fmtPhone } from './strings';

/* Owner sign-in: phone number + 4-digit PIN, both checked by the server (/api/login). */
const h1: CSSProperties = { margin: '0 0 8px', font: '700 30px/1.15 var(--font-sans)', letterSpacing: '-.02em' };
const p: CSSProperties = { margin: '0 0 28px', font: '400 16px/1.5 var(--font-sans)', color: 'var(--text-secondary)' };
const ERRORS: Record<string, string> = {
  wrong_credentials: 'Нөмір немесе PIN-код қате',
  too_many_attempts: 'Тым көп әрекет. 15 минуттан кейін қайталаңыз',
  not_configured: 'Сервер әлі бапталмаған',
  offline: 'Интернет жоқ. Қайталап көріңіз',
};

export function AdminLogin({ onDone, uiLang, setUiLang }: { onDone: (phone: string, token: string) => void; uiLang: Lang; setUiLang: (l: Lang) => void }) {
  const [step, setStep] = useState<'phone' | 'pin'>('phone');
  const [phone, setPhone] = useState('');
  const [pin, setPin] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const submit = async () => {
    if (busy || pin.length < 4) return;
    setBusy(true); setErr('');
    try {
      const { token } = await login('+7' + phone, pin);
      onDone('+7 ' + phone, token);
    } catch (e) {
      setErr(ERRORS[e instanceof ApiError ? e.code : ''] || 'Қате. Қайталап көріңіз');
      setPin('');
    } finally {
      setBusy(false);
    }
  };
  useEffect(() => { if (pin.length === 4) submit(); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, [pin]);
  const back = () => { setStep('phone'); setPin(''); setErr(''); };
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
            <p style={p}>Телефон нөміріңізді, содан кейін PIN-кодыңызды енгізіңіз.</p>
            <TextField label="Телефон нөмірі" prefix="+7" inputMode="tel" autoComplete="username" placeholder="700 000 00 00" value={phone} onChange={e => setPhone(fmtPhone(e.target.value))} autoFocus />
          </div>
          <div style={{ marginTop: 'auto' }}><Button size="lg" block disabled={phone.replace(/\D/g, '').length < 10} onClick={() => setStep('pin')}>Жалғастыру</Button></div>
        </>
      ) : (
        <>
          <div style={{ marginTop: 16 }}>
            <h1 style={h1}>PIN-кодты енгізіңіз</h1>
            <p style={p}>+7 {phone} · <button onClick={back} style={{ border: 0, background: 'none', padding: 0, font: 'inherit', fontWeight: 600, color: 'var(--accent-ink)', cursor: 'pointer' }}>Өзгерту</button></p>
            <CodeInput value={pin} onChange={v => { setPin(v); setErr(''); }} autoFocus mask label="PIN-код" autoComplete="current-password" />
            {err && <div role="alert" style={{ marginTop: 16, font: '500 15px/1.4 var(--font-sans)', color: 'var(--danger)' }}>{err}</div>}
          </div>
          <div style={{ marginTop: 'auto' }}><Button size="lg" block disabled={pin.length < 4 || busy} onClick={submit}>{busy ? 'Тексерілуде…' : 'Кіру'}</Button></div>
        </>
      )}
    </div>
  );
}
