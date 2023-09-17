import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Design from './design.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Design />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
reportWebVitals();
