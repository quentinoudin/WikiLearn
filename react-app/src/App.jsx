import './App.css';

function ButtonSuede() {
  const clic = () => alert("Bouton cliqué!");
  return <button className="option-btn" onClick={clic}>A. Suède</button>;
}

function ButtonDanemark() {
  const clic = () => alert("Bouton cliqué!");
  return <button className="option-btn" onClick={clic}>B. Danemark</button>;
}

function ButtonNorvege() {
  const clic = () => alert("Bouton cliqué!");
  return <button className="option-btn" onClick={clic}>C. Norvège</button>;
}

function ButtonFinlande() {
  const clic = () => alert("Bouton cliqué!");
  return <button className="option-btn" onClick={clic}>D. Finlande</button>;
}

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <header className="header">
        <a href="/" className="logo-link">
          <div className="logo-icon-box">
            <svg className="book-svg" viewBox="0 0 40 30">
              <path d="M20 25c-5 2-15 2-15-2V8c0-4 10-4 15-2" />
              <path d="M20 25c5 2 15 2 15-2V8c0-4-10-4-15-2" />
              <path d="M5 23c0 3 15 6 30 0" opacity="0.8" />
              <line x1="20" y1="6" x2="20" y2="25" opacity="0.5" />
            </svg>
          </div>
          <div className="logo-text">
            Wikipedia <span>Learning</span>
          </div>
        </a>

        <nav className="nav-menu">
          <a href="#" className="nav-link">Parcours</a>
          <a href="#" className="nav-link">Leçon</a>
          <a href="#" className="nav-link">Quizz</a>
        </nav>

        <div className="nav-right">
          <a href="#classement" className="classement-link">
            <svg className="trophy-svg" viewBox="0 0 32 32">
              <path d="M28 6H24V4a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h4.1a6 6 0 0 0 5.9 5v4h-2a2 2 0 0 0-2 2v2h12v-2a2 2 0 0 0-2-2h-2v-4a6 6 0 0 0 5.9-5H28c1.1 0 2-.9 2-2V8a2 2 0 0 0-2-2zM4 10V8h4v2H4zm24 0h-4V8h4v2z" />
              <path d="M16 9l1.1 3.2h3.4l-2.7 2.1 1.1 3.2-2.7-2.1-2.7 2.1 1.1-3.2-2.7-2.1h3.4z" fill="#FFFFFF" />
            </svg>
            <span className="classement-text">Classement</span>
          </a>
          <button className="profile-btn">
            <span className="user-icon">👤</span>
            <span className="profile-text">Profil</span>
          </button>
        </div>
      </header>

      {/* Contenu */}
      <main className="main-content">
        {/* Barre d'XP */}
        <div className="xp-bar-container">
          <div className="xp-bar-gradient">
            <span className="xp-label">0xp</span>
            <span className="xp-label">100xp</span>
          </div>
        </div>

        {/* Carte QCM */}
        <div className="quiz-card">
          <div className="quiz-header">
            <span className="quiz-xp-display">🔥 50xp</span>
            <div className="stepper">
              {[1,2,3,4,5].map((n) => (
                <div key={n} className={`dot${n === 5 ? ' active' : ''}`}>
                  <span className="dot-num">{n === 5 ? '🔥' : n}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="quiz-category">GÉOGRAPHIE</p>

          <h2 className="quiz-question">
            De quel pays est originaire le groupe qui fabrique les LEGO ?
          </h2>

          <div className="options-grid">
            <ButtonSuede />
            <ButtonDanemark />
            <ButtonNorvege />
            <ButtonFinlande />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
