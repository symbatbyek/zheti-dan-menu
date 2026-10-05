import { useCallback, useEffect, useRef, useState } from 'react';
import { BottomNav, Button, EmptyState, Toast } from '../ds';
import { ApiError, fetchMenu, getToken, saveMenu, setToken } from '../shared/api';
import { lsGet, lsSet, normalize, saveCache } from '../shared/store';
import type { Accent, Cafe, Category, Dish, Lang, MenuData } from '../shared/types';
import { AdminLogin } from './AdminLogin';
import { AdminMenu } from './AdminMenu';
import { DishEdit } from './DishEdit';
import { AdminCategories } from './AdminCategories';
import { AdminQr } from './AdminQr';
import { AdminSettings } from './AdminSettings';
import { AdminProfile } from './AdminProfile';
import { NAV_L, openGuest } from './strings';

type Tab = 'menu' | 'cats' | 'qr' | 'settings';
type SaveState = 'idle' | 'saving' | 'error';

export function OwnerApp() {
  const [phone, setPhoneS] = useState(() => lsGet('qm-owner-phone', ''));
  const [authed, setAuthed] = useState(() => !!getToken());
  const login = (p: string, token: string) => { setToken(token); setPhoneS(p); lsSet('qm-owner-phone', p); setAuthed(true); };
  const logout = useCallback(() => { setToken(null); setAuthed(false); setTab('menu'); setData(null); }, []);
  const [uiLang, setUiLangS] = useState<Lang>(() => lsGet('qm-owner-lang', 'kz') as Lang);
  const setUiLang = (l: Lang) => { setUiLangS(l); lsSet('qm-owner-lang', l); };

  // --- Menu document: loaded from the server, saved back (debounced) after every change.
  const [data, setData] = useState<MenuData | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [saveState, setSaveState] = useState<SaveState>('idle');
  const dirty = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const latest = useRef<MenuData | null>(null);

  const load = useCallback(() => {
    setLoadError(false);
    fetchMenu().then(d => setData(normalize(d))).catch(() => setLoadError(true));
  }, []);
  useEffect(() => { if (authed && !data) load(); }, [authed, data, load]);

  const flush = useCallback(async () => {
    clearTimeout(timer.current);
    const d = latest.current;
    if (!d || !dirty.current) return;
    dirty.current = false;
    setSaveState('saving');
    try {
      await saveMenu(d);
      saveCache(d);
      setSaveState(s => (dirty.current ? s : 'idle'));
    } catch (e) {
      dirty.current = true;
      if (e instanceof ApiError && e.status === 401) return logout();
      setSaveState('error');
    }
  }, [logout]);

  const update = (fn: (d: MenuData) => MenuData) => {
    setData(d => {
      if (!d) return d;
      const next = fn(d);
      latest.current = next; dirty.current = true;
      clearTimeout(timer.current);
      timer.current = setTimeout(flush, 700);
      return next;
    });
  };
  // Don't lose the last edit when the owner switches apps or closes the tab.
  useEffect(() => {
    const h = () => { if (document.visibilityState === 'hidden') flush(); };
    document.addEventListener('visibilitychange', h);
    return () => document.removeEventListener('visibilitychange', h);
  }, [flush]);

  const setItems = (items: Dish[]) => update(d => ({ ...d, items }));
  const setCats = (cats: Category[]) => update(d => ({ ...d, cats }));
  const setCafe = (cafe: Cafe) => update(d => ({ ...d, cafe }));
  const setAccent = (accent: Accent) => update(d => ({ ...d, accent }));

  const [tab, setTab] = useState<Tab>('menu');
  const [editing, setEditing] = useState<Dish | null | undefined>(undefined); // null = new dish
  const [profile, setProfile] = useState(false);
  const [toast, setToast] = useState('');
  const nav = NAV_L[uiLang] ?? NAV_L.kz;

  if (!authed) {
    return <div className="phone" data-qm-root="" data-accent="terracotta"><AdminLogin uiLang={uiLang} setUiLang={setUiLang} onDone={login} /></div>;
  }
  if (!data) {
    return (
      <div className="phone" data-qm-root="" data-accent="terracotta" style={{ justifyContent: 'center', padding: 16 }}>
        {loadError
          ? <EmptyState icon="circle-alert" title="Мәзір жүктелмеді" dashed={false} action={<Button onClick={load}>Қайталау</Button>}>Интернетті тексеріп, қайталаңыз.</EmptyState>
          : <EmptyState icon="loader" title="Жүктелуде…" dashed={false} />}
      </div>
    );
  }

  const saveDish = (d: Dish) => {
    const prev = data.items.find(i => i.id === d.id);
    setItems(prev ? data.items.map(i => (i.id === d.id ? d : i)) : [...data.items, d]);
    setEditing(undefined);
    setToast(d.soldOut && prev && !prev.soldOut ? 'Таусылды деп белгіленді' : 'Сақталды');
  };

  return (
    <div className="phone" data-qm-root="" data-accent={data.accent}>
      {tab === 'menu' && <AdminMenu data={data} setItems={setItems} onEdit={setEditing} onAdd={() => setEditing(null)} onPreview={openGuest} />}
      {tab === 'cats' && <AdminCategories cats={data.cats} setCats={setCats} items={data.items} setItems={setItems} />}
      {tab === 'qr' && <AdminQr cafeName={data.cafe.name} />}
      {tab === 'settings' && <AdminSettings cafe={data.cafe} phone={phone} uiLang={uiLang} setUiLang={setUiLang} onProfile={() => setProfile(true)} onLogout={async () => { await flush(); logout(); }} />}
      <BottomNav value={tab} onChange={t => { setTab(t as Tab); setEditing(undefined); setProfile(false); }}
        items={[{ id: 'menu', label: nav[0], icon: 'utensils' }, { id: 'cats', label: nav[1], icon: 'layout-list' }, { id: 'qr', label: nav[2], icon: 'qr-code' }, { id: 'settings', label: nav[3], icon: 'settings' }]} />
      {profile && <AdminProfile cafe={data.cafe} accent={data.accent} setAccent={setAccent} onPreview={openGuest} onBack={() => setProfile(false)} onSave={c => { setCafe(c); setProfile(false); setToast('Сақталды'); }} onError={setToast} />}
      {editing !== undefined && (
        <DishEdit key={editing ? editing.id : 'new'} item={editing} cats={data.cats} onBack={() => setEditing(undefined)} onSave={saveDish} onError={setToast}
          onDelete={id => { setItems(data.items.filter(i => i.id !== id)); setEditing(undefined); setToast('Тағам жойылды'); }} />
      )}
      {saveState === 'error' && (
        <button onClick={flush} className="qm-btn" style={{ position: 'absolute', top: 'calc(env(safe-area-inset-top) + 8px)', left: '50%', transform: 'translateX(-50%)', zIndex: 55, background: 'var(--danger-soft)', color: 'var(--danger)', boxShadow: 'var(--shadow-raised)', whiteSpace: 'nowrap' }}>
          Сақталмады · Қайталау
        </button>
      )}
      <Toast open={!!toast} icon={toast === 'Тағам жойылды' ? 'trash-2' : toast.startsWith('Сурет') ? 'circle-alert' : 'circle-check'} onDone={() => setToast('')}>{toast}</Toast>
    </div>
  );
}
