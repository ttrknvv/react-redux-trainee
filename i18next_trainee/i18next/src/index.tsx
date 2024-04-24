import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import './map'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <React.Suspense fallback='loading'>
      <App />
    </React.Suspense>
  </React.StrictMode>
);

