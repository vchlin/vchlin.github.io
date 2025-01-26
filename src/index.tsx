import { createRoot } from 'react-dom/client';
import MyApp from './App';

// TODO: Generate a random base64-encoded string for nonce?.

document.body.innerHTML = '<div id="app"></div>';
const root = createRoot(document.getElementById('app')!);
root.render(<MyApp />);
