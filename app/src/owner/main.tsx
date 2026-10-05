import { createRoot } from 'react-dom/client';
import '../styles/index.css';
import { OwnerApp } from './OwnerApp';

createRoot(document.getElementById('root')!).render(<OwnerApp />);
