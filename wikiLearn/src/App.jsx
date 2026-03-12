import { useState } from 'react'

// 1. PascalCase pour le nom du composant
function App() {
  
  // 2. camelCase pour les variables
  const questionsLego = [
    { 
      texte: "Le nom « Lego » vient de l'expression danoise « leg godt », qui signifie « joue bien ».", 
      estVrai: true // 3. Les booléens décrivent un état ("estVrai" au lieu de "cEstVrai")
    },
    { 
      texte: "L'entreprise The Lego Group a été fondée à l'origine en Suède.", 
      estVrai: false 
    },
    { 
      texte: "À ses tout débuts, l'entreprise Lego fabriquait principalement des jouets en bois.", 
      estVrai: true 
    },
    { 
      texte: "Le brevet de la brique Lego moderne, avec son système d'emboîtement par tubes internes, a été déposé en 1998.", 
      estVrai: false 
    }
  ]

  // Des noms de variables (states) clairs, courts et standards
  const [indexQuestion, setIndexQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [jeuTermine, setJeuTermine] = useState(false) 

  const questionActuelle = questionsLego[indexQuestion]

  // 4. "handle" est la convention universelle pour dire "Cette fonction gère une action"
  function handleReponse(reponseUtilisateur) {
    
    // La logique reste exactement la même, seuls les noms ont changé !
    if (reponseUtilisateur === questionActuelle.estVrai) {
      setScore(score + 1)
    }

    const indexSuivant = indexQuestion + 1
    
    if (indexSuivant < questionsLego.length) {
      setIndexQuestion(indexSuivant)
    } else {
      setJeuTermine(true) 
    }
  }

  return (
    <div>
      <h1>Le Méga Quizz LEGO</h1>

      {jeuTermine ? (
        <div>
          <h2>Fini ! 🎉</h2>
          <p>Ton score final est de {score} / {questionsLego.length} !</p>
          <button onClick={() => window.location.reload()}>
            Rejouer au Quizz
          </button>
        </div>
      ) : (
        <div>
          <p>Question {indexQuestion + 1} sur {questionsLego.length}</p>
          <h3>{questionActuelle.texte}</h3>

          <div>
            {/* On appelle notre belle fonction handleReponse ici */}
            <button onClick={() => handleReponse(true)}>
              VRAI 👍
            </button>
            
            <button onClick={() => handleReponse(false)}>
              FAUX 👎
            </button>
          </div>
          
          <p>Mon score : {score}</p>
        </div>
      )}
    </div>
  )
}

export default App