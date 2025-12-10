
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SupportPage from './SupportPage';

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

root.render(
  <React.StrictMode>
    {supportRequested ? <SupportPage /> : <App />}
  </React.StrictMode>
);
