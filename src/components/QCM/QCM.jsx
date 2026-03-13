import { useState } from "react";
import "./QCM.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const quizData = [
    {
      question:
        "« En quelle année la brique LEGO moderne (telle qu'on la connaît) a-t-elle été brevetée ? »",
      options: ["1958", "1945", "1962", "1932"],
      correctAnswer: "1958",
    },
    {
      question:
        "« Quel est le nom de la gamme LEGO destinée aux plus petits avec des briques deux fois plus grandes ? »",
      options: ["Duplo", "Technic", "Ninjago", "City"],
      correctAnswer: "Duplo",
    },
    {
      question: "« De quel pays est originaire la marque LEGO ? »",
      options: ["Danemark", "Suède", "Norvège", "Allemagne"],
      correctAnswer: "Danemark",
    },
  ];

  const handleAnswer = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      alert("Correct ! 🧱");
      setScore(score + 20);
    } else {
      alert(
        `Faux ! La réponse était ${quizData[currentQuestion].correctAnswer}`
      );
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(
        `Quizz Lego terminé ! Score final : ${
          score +
          (selectedOption === quizData[currentQuestion].correctAnswer ? 20 : 0)
        } XP`
      );
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  return (
    <div className="App">
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
          <a href="#" className="nav-link">
            Parcours
          </a>
          <a href="#" className="nav-link">
            Leçon
          </a>
          <a href="#" className="nav-link">
            Quizz
          </a>
        </nav>

        <div className="nav-right">
          <a href="#classement" className="classement-link">
            <svg className="trophy-svg" viewBox="0 0 32 32">
              <path
                d="M28 6H24V4a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h4.1a6 6 0 0 0 5.9 5v4h-2a2 2 0 0 0-2 2v2h12v-2a2 2 0 0 0-2-2h-2v-4a6 6 0 0 0 5.9-5H28c1.1 0 2-.9 2-2V8a2 2 0 0 0-2-2zM4 10V8h4v2H4zm24 0h-4V8h4v2z"
                fill="currentColor"
              />
            </svg>
            <span className="classement-text">Classement</span>
          </a>

          <button className="profile-btn">
            <span className="user-icon">👤</span>
            <span className="profile-text">Profil</span>
          </button>
        </div>
      </header>

      <main className="main-content">
        <div className="xp-bar-container">
          <div className="xp-bar-gradient">
            <span className="xp-label">0xp</span>
            <span className="xp-label">{score} / 100xp</span>
          </div>
        </div>

        <div className="quiz-card">
          <div className="quiz-header">
            <span className="quiz-xp-display">{score} xp</span>
            <div className="stepper-container">
              <div className="stepper-arc">
                {[...Array(10)].map((_, i) => {
                  const totalSteps = 10;
                  const startAngle = -140;
                  const endAngle = -40;
                  const angle =
                    startAngle +
                    (i * (endAngle - startAngle)) / (totalSteps - 1);
                  const radians = (angle * Math.PI) / 180;
                  const radius = 130;
                  const x = radius * Math.cos(radians);
                  const y = radius * Math.sin(radians) + 180;
                  const rotation = angle + 90;
                  const isCurrent = i === currentQuestion + 4;

                  return (
                    <div
                      key={i}
                      className={`step ${isCurrent ? "active" : ""}`}
                      style={{
                        transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
                      }}
                    >
                      {isCurrent ? (
                        <>
                          <svg
                            className="fire-svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path d="M12 2c0 0-5 5-5 9a5 5 0 0 0 10 0c0-4-5-9-5-9z" />
                            <path
                              d="M12 7c0 0-2 2-2 4a2 2 0 0 0 4 0c0-2-2-4-2-4z"
                              opacity="0.5"
                            />
                          </svg>
                          <span className="step-num">{i + 1}</span>
                        </>
                      ) : (
                        <span className="step-num">{i + 1}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="quiz-content">
            <h2 className="quiz-category">QUIZZ LEGO</h2>
            <h1 className="quiz-question">
              {quizData[currentQuestion].question}
            </h1>
            <div className="options-grid">
              {quizData[currentQuestion].options.map((opt, index) => (
                <button
                  key={index}
                  className="option-btn"
                  onClick={() => handleAnswer(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
