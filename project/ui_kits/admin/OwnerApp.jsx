(() => {
const { BottomNav, Toast } = window.QRMenuDesignSystem_af1ea9;

function OwnerApp({ persist = false, start }) {
  const D = window.QM_DATA;
  const ls = (k, d) => persist ? (localStorage.getItem(k) ?? d) : d;
  const put = (k, v) => persist && localStorage.setItem(k, v);
  const [authed, setAuthedS] = React.useState(() => start ? start !== 'login' : ls('qm-owner-authed', '0') === '1');
  const setAuthed = v => { setAuthedS(v); put('qm-owner-authed', v ? '1' : '0'); };
  const [uiLang, setUiLangS] = React.useState(() => ls('qm-owner-lang', 'kz'));
  const setUiLang = l => { setUiLangS(l); put('qm-owner-lang', l); };
  const [tab, setTab] = React.useState(start && start !== 'login' && start !== 'edit' && start !== 'profile' ? start : 'menu');
  const [items, setItems] = React.useState(D.items);
  const [cats, setCats] = React.useState(D.categories.filter(c => c.id !== 'all'));
  const [editing, setEditing] = React.useState(start === 'edit' ? D.items[3] : undefined);
  const [profile, setProfile] = React.useState(start === 'profile');
  const [toast, setToast] = React.useState('');
  const [accent, setAccentS] = React.useState(() => ls('qm-accent', 'terracotta'));
  const setAccent = a => { setAccentS(a); put('qm-accent', a); };
  D.categories = [D.categories[0], ...cats];
  React.useEffect(() => { if (persist && window.QM_STORE) window.QM_STORE.save({ items, cats }); }, [items, cats]);
  const preview = () => window.open(window.QM_GUEST_URL || '../guest-menu/index.html', '_blank');
  const save = d => { setItems(items.some(i => i.id === d.id) ? items.map(i => i.id === d.id ? d : i) : [...items, d]); setEditing(undefined); setToast(d.soldOut && editing && !editing.soldOut ? 'Таусылды деп белгіленді' : 'Сақталды'); };
  const nav = window.NAV_L[uiLang];
  return (
    <div className="phone" data-qm-root="" data-accent={accent} data-screen-label="Owner">
      {!authed ? <AdminLogin uiLang={uiLang} setUiLang={setUiLang} onDone={() => setAuthed(true)} /> : (
        <>
          {tab === 'menu' && <AdminMenu items={items} setItems={setItems} onEdit={setEditing} onAdd={() => setEditing(null)} onPreview={preview} />}
          {tab === 'cats' && <AdminCategories cats={cats} setCats={setCats} items={items} setItems={setItems} />}
          {tab === 'qr' && <AdminQr />}
          {tab === 'settings' && <AdminSettings uiLang={uiLang} setUiLang={setUiLang} onProfile={() => setProfile(true)} onLogout={() => { setAuthed(false); setTab('menu'); }} />}
          <BottomNav value={tab} onChange={t => { setTab(t); setEditing(undefined); setProfile(false); }} items={[{ id: 'menu', label: nav[0], icon: 'utensils' }, { id: 'cats', label: nav[1], icon: 'layout-list' }, { id: 'qr', label: nav[2], icon: 'qr-code' }, { id: 'settings', label: nav[3], icon: 'settings' }]} />
          {profile && <AdminProfile accent={accent} setAccent={setAccent} onPreview={preview} onBack={() => setProfile(false)} onSaved={() => { setProfile(false); setToast('Сақталды'); }} />}
          {editing !== undefined && <DishEdit key={editing ? editing.id : 'new'} item={editing} onBack={() => setEditing(undefined)} onSave={save} onDelete={id => { setItems(items.filter(i => i.id !== id)); setEditing(undefined); setToast('Тағам жойылды'); }} />}
          <Toast open={!!toast} icon={toast === 'Тағам жойылды' ? 'trash-2' : 'circle-check'} onDone={() => setToast('')}>{toast}</Toast>
        </>
      )}
    </div>
  );
}

Object.assign(window, { OwnerApp });
})();
