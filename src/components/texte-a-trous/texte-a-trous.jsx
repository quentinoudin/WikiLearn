import React, { useState } from 'react';
import questionsData from '../../data/questions_trous.json'; // Assure-toi que le chemin est correct selon ta structure de dossiers
import './texte-a-trous.css'; // J'ai ajusté le chemin vers ton CSS spécifique d'après ta capture !

function QuizTexteATrous() {
  const [index, setIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState(null);

  // Petite sécurité au cas où le JSON est vide ou n'a pas chargé
  if (!questionsData || questionsData.length === 0) {
    return <div>Chargement des questions...</div>;
  }

  // Écran de fin
  if (index >= questionsData.length) {
    return (
      <div className="quiz-card">
        <h2 className="quiz-title">Félicitations ! 🎉</h2>
        <p className="quiz-question">Tu as terminé le niveau avec succès.</p>
      </div>
    );
  }

  const currentQuestion = questionsData[index];
  const parties = currentQuestion.texte.split("____");

  const verifierReponse = () => {
    if (userInput.toLowerCase().trim() === currentQuestion.reponse.toLowerCase()) {
      setFeedback("success"); 
    } else {
      setFeedback("error");   
    }
  };

  const questionSuivante = () => {
    setIndex(index + 1);
    setUserInput("");
    setFeedback(null); 
  };

  return (
    <div className="quiz-card">
      <div style={{ position: 'absolute', top: '20px', left: '30px', fontWeight: 'bold', color: 'var(--navy)' }}>
        60 xp
      </div>

      <div style={{ color: 'var(--gold)', marginBottom: '10px', fontWeight: 'bold' }}>
        Question {index + 1} / {questionsData.length} 🔥
      </div>

      {feedback === null && (
        <>
          <h2 className="quiz-title">QUIZZ</h2>
          <p className="quiz-question">
            {parties[0]}
            <input 
              type="text" 
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="input-trou"
            />
            {parties[1]}
          </p>
          <button onClick={verifierReponse} className="btn-valider">
            Valider la réponse
          </button>
        </>
      )}

      {feedback === "success" && (
        <div style={{ padding: '20px 0' }}>
          <h2 style={{ color: 'green', fontSize: '30px' }}>Bravo ! 🎉</h2>
          <p className="quiz-question">C'est la bonne réponse.</p>
          <button onClick={questionSuivante} className="btn-valider">
            Question suivante
          </button>
        </div>
      )}

      {feedback === "error" && (
        <div style={{ padding: '20px 0' }}>
          <h2 style={{ color: '#d9534f', fontSize: '30px' }}>Dommage ! 😕</h2>
          <p className="quiz-question" style={{ fontSize: '20px' }}>
            La bonne réponse était : <br/>
            <strong style={{ color: 'var(--navy)', fontSize: '28px' }}>
              {currentQuestion.reponse}
            </strong>
          </p>
          <button onClick={questionSuivante} className="btn-valider">
            Continuer
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizTexteATrous;