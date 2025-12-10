
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SupportPage from './SupportPage';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
const pathname = window.location.pathname;

root.render(
  <React.StrictMode>
    {pathname.startsWith('/support') ? <SupportPage /> : <App />}
  </React.StrictMode>
);
