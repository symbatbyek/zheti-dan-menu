import { createRoot } from 'react-dom/client';
import '../styles/index.css';
import { GuestApp } from './GuestApp';

createRoot(document.getElementById('root')!).render(<GuestApp />);
