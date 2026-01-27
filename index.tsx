
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SupportPage from './SupportPage';

import GaiaPage from './GaiaPage';
import DataDocPage from './DataDocPage';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
const currentUrl = new URL(window.location.href);
const normalizedHash = currentUrl.hash.replace(/^#\/?/, '');

const supportRequested =
  currentUrl.pathname.startsWith('/selfbrain') ||
  currentUrl.searchParams.get('page') === 'selfbrain' ||
  normalizedHash === 'selfbrain';

const gaiaRequested =
  currentUrl.pathname.startsWith('/gaialink') ||
  currentUrl.searchParams.get('page') === 'gaialink' ||
  normalizedHash === 'gaialink';

const dataDocRequested =
  currentUrl.pathname.startsWith('/datadoc') ||
  currentUrl.searchParams.get('page') === 'datadoc' ||
  normalizedHash === 'datadoc';

let Component = App;
if (supportRequested) Component = SupportPage;
if (gaiaRequested) Component = GaiaPage;
if (dataDocRequested) Component = DataDocPage;

root.render(
  <React.StrictMode>
    <Component />
  </React.StrictMode>
);
