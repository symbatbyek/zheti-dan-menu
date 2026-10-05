import { useEffect, useState } from 'react';
import { BottomNav, Toast } from '../ds';
import { ACCENT_KEY, loadAccent, loadData, lsGet, lsSet, saveData } from '../shared/store';
import type { Accent, Cafe, Category, Dish, Lang } from '../shared/types';
import { AdminLogin } from './AdminLogin';
import { AdminMenu } from './AdminMenu';
import { DishEdit } from './DishEdit';
import { AdminCategories } from './AdminCategories';
import { AdminQr } from './AdminQr';
import { AdminSettings } from './AdminSettings';
import { AdminProfile } from './AdminProfile';
import { NAV_L, openGuest } from './strings';

type Tab = 'menu' | 'cats' | 'qr' | 'settings';

export function OwnerApp() {
  const [phone, setPhoneS] = useState(() => lsGet('qm-owner-phone', ''));
  const [authed, setAuthedS] = useState(() => lsGet('qm-owner-authed', '0') === '1');
  const login = (p: string) => { setPhoneS(p); lsSet('qm-owner-phone', p); setAuthedS(true); lsSet('qm-owner-authed', '1'); };
  const logout = () => { setAuthedS(false); lsSet('qm-owner-authed', '0'); setTab('menu'); };
  const [uiLang, setUiLangS] = useState<Lang>(() => lsGet('qm-owner-lang', 'kz') as Lang);
  const setUiLang = (l: Lang) => { setUiLangS(l); lsSet('qm-owner-lang', l); };
  const [accent, setAccentS] = useState<Accent>(loadAccent);
  const setAccent = (a: Accent) => { setAccentS(a); lsSet(ACCENT_KEY, a); };

  const [data, setData] = useState(loadData);
  const setItems = (items: Dish[]) => setData(d => ({ ...d, items }));
  const setCats = (cats: Category[]) => setData(d => ({ ...d, cats }));
  const setCafe = (cafe: Cafe) => setData(d => ({ ...d, cafe }));
  const [storageFull, setStorageFull] = useState(false);
  useEffect(() => { setStorageFull(!saveData(data)); }, [data]);

  const [tab, setTab] = useState<Tab>('menu');
  const [editing, setEditing] = useState<Dish | null | undefined>(undefined); // null = new dish
  const [profile, setProfile] = useState(false);
  const [toast, setToast] = useState('');

  const saveDish = (d: Dish) => {
    const prev = data.items.find(i => i.id === d.id);
    setItems(prev ? data.items.map(i => (i.id === d.id ? d : i)) : [...data.items, d]);
    setEditing(undefined);
    setToast(d.soldOut && prev && !prev.soldOut ? 'Таусылды деп белгіленді' : 'Сақталды');
  };
  const nav = NAV_L[uiLang] ?? NAV_L.kz;

  return (
    <div className="phone" data-qm-root="" data-accent={accent}>
      {!authed ? <AdminLogin uiLang={uiLang} setUiLang={setUiLang} onDone={login} /> : (
        <>
          {tab === 'menu' && <AdminMenu data={data} setItems={setItems} onEdit={setEditing} onAdd={() => setEditing(null)} onPreview={openGuest} />}
          {tab === 'cats' && <AdminCategories cats={data.cats} setCats={setCats} items={data.items} setItems={setItems} />}
          {tab === 'qr' && <AdminQr cafeName={data.cafe.name} />}
          {tab === 'settings' && <AdminSettings cafe={data.cafe} phone={phone} uiLang={uiLang} setUiLang={setUiLang} onProfile={() => setProfile(true)} onLogout={logout} />}
          <BottomNav value={tab} onChange={t => { setTab(t as Tab); setEditing(undefined); setProfile(false); }}
            items={[{ id: 'menu', label: nav[0], icon: 'utensils' }, { id: 'cats', label: nav[1], icon: 'layout-list' }, { id: 'qr', label: nav[2], icon: 'qr-code' }, { id: 'settings', label: nav[3], icon: 'settings' }]} />
          {profile && <AdminProfile cafe={data.cafe} accent={accent} setAccent={setAccent} onPreview={openGuest} onBack={() => setProfile(false)} onSave={c => { setCafe(c); setProfile(false); setToast('Сақталды'); }} />}
          {editing !== undefined && (
            <DishEdit key={editing ? editing.id : 'new'} item={editing} cats={data.cats} onBack={() => setEditing(undefined)} onSave={saveDish}
              onDelete={id => { setItems(data.items.filter(i => i.id !== id)); setEditing(undefined); setToast('Тағам жойылды'); }} />
          )}
          <Toast open={!!toast || storageFull} icon={storageFull ? 'circle-alert' : toast === 'Тағам жойылды' ? 'trash-2' : 'circle-check'} onDone={() => { setToast(''); setStorageFull(false); }}>
            {storageFull ? 'Жад толы: жаңа суреттер сақталмады' : toast}
          </Toast>
        </>
      )}
    </div>
  );
}
