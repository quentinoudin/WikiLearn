import React from 'react';
// 1. On importe nos deux composants "Legos"
import Navbar from './components/navbar/navbar.jsx';
import QuizTexteATrous from './components/texte-a-trous/texte-a-trous.jsx';

import './style.css'; // Importation du design global

function App() {
  return (
    <div>
      {/* 2. On affiche notre barre de navigation */}
      <Navbar />

      {/* Barre d'expérience (XP) */}
      <div className="progress-bar-container">
        <span>0xp</span>
        <span>100xp</span>
      </div>

      {/* Le contenu principal (La carte du quiz) */}
      <main>
        <QuizTexteATrous />
      </main>
    </div>
  );
}

export default App;