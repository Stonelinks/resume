import ReactDOM from 'react-dom/client';
import Resume from './resume';

// Import Google Fonts
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Resume />);
