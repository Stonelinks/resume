import ReactDOM from 'react-dom/client';
import Resume from './resume';

// Import Google Fonts.
//
// Latin-only entrypoints on purpose. The unqualified imports declare five
// @font-face rules each (cyrillic-ext, cyrillic, vietnamese, latin-ext, latin),
// and bin/build runs single-file with --remove-unused-fonts false, so every one
// of them gets inlined as base64 into dist/index.html.
import '@fontsource/playfair-display/latin-400.css';
import '@fontsource/playfair-display/latin-700.css';
import '@fontsource/montserrat/latin-400.css';
import '@fontsource/montserrat/latin-700.css';

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Resume />);
