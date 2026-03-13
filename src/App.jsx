import React, { useState } from 'react';
import VraiFaux from './components/vrai-faux/vrai-faux.jsx';
import QCM from './components/QCM/QCM.jsx';
import QuizTexteATrous from './components/texte-a-trous/texte-a-trous.jsx';

import './style.css';

function App() {
  const [page, setPage] = useState('vrai-faux');

  return (
    <main>
      {page === 'vrai-faux' && (
        <VraiFaux onFinish={() => setPage('qcm')} />
      )}
      {page === 'qcm' && (
        <QCM onFinish={() => setPage('texte-a-trous')} />
      )}
      {page === 'texte-a-trous' && (
        <QuizTexteATrous />
      )}
    </main>
  );
}

export default App;