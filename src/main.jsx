import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // On importe ton application ici !

// C'est cette ligne qui "dessine" ton App sur la page web
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);