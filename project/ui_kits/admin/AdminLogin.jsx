(() => {
const { TextField, Button, CodeInput, Icon, IconButton, LangSwitcher } = window.QRMenuDesignSystem_af1ea9;

function AdminLogin({ onDone, uiLang = 'kz', setUiLang }) {
  const [step, setStep] = React.useState('phone');
  const [phone, setPhone] = React.useState('');
  const [code, setCode] = React.useState('');
  const fmt = v => { const d = v.replace(/\D/g, '').slice(0, 10); return [d.slice(0, 3), d.slice(3, 6), d.slice(6, 8), d.slice(8, 10)].filter(Boolean).join(' '); };
  React.useEffect(() => { if (code.length === 4) { const t = setTimeout(onDone, 400); return () => clearTimeout(t); } }, [code]);
  const h1 = { margin: '0 0 8px', font: '700 30px/1.15 var(--font-sans)', letterSpacing: '-.02em' };
  const p = { margin: '0 0 28px', font: '400 16px/1.5 var(--font-sans)', color: 'var(--text-secondary)' };
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', padding: '12px 20px 20px', background: 'var(--surface-page)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 56 }}>
        {step === 'phone'
          ? <div style={{ font: '700 20px/1 var(--font-sans)', letterSpacing: '-.02em' }}>QR Menu</div>
          : <IconButton icon="chevron-left" label="Артқа" size={24} onClick={() => { setStep('phone'); setCode(''); }} style={{ marginLeft: -10 }} />}
        {step === 'phone' && <LangSwitcher value={uiLang} onChange={setUiLang} />}
      </div>
      {step === 'phone' ? (
        <>
          <div style={{ marginTop: 44 }}>
            <h1 style={h1}>Кафе иесі ретінде кіру</h1>
            <p style={p}>SMS арқылы код жібереміз. Құпиясөз қажет емес.</p>
            <TextField label="Телефон нөмірі" prefix="+7" inputMode="tel" placeholder="700 000 00 00" value={phone} onChange={e => setPhone(fmt(e.target.value))} autoFocus />
          </div>
          <div style={{ marginTop: 'auto' }}><Button size="lg" block disabled={phone.replace(/\D/g, '').length < 10} onClick={() => setStep('code')}>Код алу</Button></div>
        </>
      ) : (
        <>
          <div style={{ marginTop: 16 }}>
            <h1 style={h1}>Кодты енгізіңіз</h1>
            <p style={p}>+7 {phone} нөміріне жібердік. <button onClick={() => { setStep('phone'); setCode(''); }} style={{ border: 0, background: 'none', padding: 0, font: 'inherit', fontWeight: 600, color: 'var(--accent-ink)', cursor: 'pointer' }}>Өзгерту</button></p>
            <CodeInput value={code} onChange={setCode} autoFocus />
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 20, font: '500 15px var(--font-sans)', color: 'var(--text-muted)' }}><Icon name="clock" size={16} />Қайта жіберу <b style={{ color: 'var(--text-primary)', fontVariantNumeric: 'tabular-nums' }}>0:42</b> кейін</div>
            <div style={{ marginTop: 8, font: '400 14px/1.5 var(--font-sans)', color: 'var(--text-muted)' }}>Код осы телефонға келсе, өзі толтырылады.</div>
          </div>
          <div style={{ marginTop: 'auto' }}><Button size="lg" block disabled={code.length < 4} onClick={onDone}>Кіру</Button></div>
        </>
      )}
    </div>
  );
}

Object.assign(window, { AdminLogin });
})();
