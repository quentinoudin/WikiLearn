import React, { useState } from 'react';
import questionsData from "./questions.json";

function QuizTexteATrous() {
  const [index, setIndex] = useState(0);
  const [userInput, setUserInput] = useState("");

  // Si on a fini toutes les questions
  if (index >= questionsData.length) {
    return <h2 style={{ textAlign: 'center', color: 'green' }}>Bravo, tu as fini le quiz ! 🏆</h2>;
  }

  const currentQuestion = questionsData[index];
  // On coupe la phrase exactement là où il y a les 4 tirets du bas
  const parties = currentQuestion.texte.split("____");

  const verifierReponse = () => {
    if (userInput.toLowerCase().trim() === currentQuestion.reponse.toLowerCase()) {
      alert("Bonne réponse !");
      setIndex(index + 1); // On passe à la suite
      setUserInput("");    // On vide le champ
    } else {
      alert("Mauvaise réponse, essaie encore !");
    }
  };

  return (
    <div style={{ padding: '30px', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
      <h3>Question {index + 1} / {questionsData.length}</h3>
      
      <p style={{ fontSize: '18px', lineHeight: '2', marginTop: '20px' }}>
        {parties[0]}
        <input 
          type="text" 
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="..."
          style={{ 
            borderBottom: '2px solid #007BFF', 
            borderTop: 'none', 
            borderLeft: 'none', 
            borderRight: 'none', 
            outline: 'none', 
            width: '120px', 
            textAlign: 'center',
            fontSize: '18px',
            margin: '0 10px',
            backgroundColor: 'transparent'
          }}
        />
        {parties[1]}
      </p>

      <button 
        onClick={verifierReponse}
        style={{
          marginTop: '30px',
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Valider la réponse
      </button>
    </div>
  );
}

export default QuizTexteATrous;