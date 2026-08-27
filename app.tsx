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

const container = document.getElementById('root');
if (!container) {
  throw new Error('#root is missing from index.html');
}

const root = ReactDOM.createRoot(container);

root.render(<Resume />);
