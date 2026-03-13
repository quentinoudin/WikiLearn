import React from 'react';
import './navbar.css'; 

function Navbar() {
  return (
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
  );
}

export default Navbar;