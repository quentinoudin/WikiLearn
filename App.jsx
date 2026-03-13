import React from 'react'
import QuizTexteATrous from './components/QuizTexteATrous.jsx';
import './style.css' // Importation du design !

function App() {
  return (
    <div>
      {/* Barre de navigation */}
      <header className="navbar">
        <div style={{ fontWeight: 'bold', fontSize: '20px', color: '#192b4d' }}>
          📖 Wikipedia Learning
        </div>
        <div className="nav-links">
          <span>Parcours</span>
          <span>Leçon</span>
          <span className="active">Quizz</span>
        </div>
        <div>
          <span>🏆 Classement</span> | <button style={{ marginLeft: '10px', padding: '5px 15px', borderRadius: '5px', border: '1px solid gray' }}>Profil</button>
        </div>
      </header>

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
  )
}

export default App