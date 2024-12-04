import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//É o primeiro arquivo que a aplicacao REACT roda
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);