import { useState } from 'react'

function App() {
  
  // 1. Notre petite liste de questions
  const questionsLego = [
    { texte: "Le nom « Lego » vient de l'expression danoise « leg godt ».", estVrai: true },
    { texte: "L'entreprise The Lego Group a été fondée en Suède.", estVrai: false },
    { texte: "À ses débuts, Lego fabriquait des jouets en bois.", estVrai: true },
    { texte: "Le brevet de la brique moderne a été déposé en 1998.", estVrai: false }
  ]

  // 2. Nos mémoires (States)
  const [indexQuestion, setIndexQuestion] = useState(0)
  const [score, setScore] = useState(0)

  const questionActuelle = questionsLego[indexQuestion]

  // 3. La fonction qui gère le clic sur Vrai ou Faux
  function handleReponse(reponseUtilisateur) {
    
    // On garde l'ancien score en mémoire pour calculer le total à la fin
    let nouveauScore = score

    if (reponseUtilisateur === questionActuelle.estVrai) {
      nouveauScore = score + 1
      setScore(nouveauScore)
    }

    const indexSuivant = indexQuestion + 1
    
    // Si on a encore des questions, on passe à la suivante
    if (indexSuivant < questionsLego.length) {
      setIndexQuestion(indexSuivant)
    } else {
      // S'il n'y a plus de questions, on affiche une alerte et on remet à zéro !
      alert("Fini ! Ton score est de " + nouveauScore + " / " + questionsLego.length)
      setIndexQuestion(0)
      setScore(0)
    }
  }

  // 4. Juste la boîte du Quizz (Le Vrai / Faux)
  return (
    <div style={{ 
      border: '2px solid #ccc', 
      borderRadius: '12px', 
      padding: '30px', 
      maxWidth: '400px', 
      margin: '50px auto', // Centre la boîte au milieu de l'écran
      textAlign: 'center',
      fontFamily: 'sans-serif'
    }}>
      
      <p style={{ color: 'gray', margin: '0 0 10px 0' }}>
        Question {indexQuestion + 1} / {questionsLego.length}
      </p>
      
      <h3 style={{ fontSize: '20px', minHeight: '60px', marginBottom: '30px' }}>
        {questionActuelle.texte}
      </h3>

      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        
        {/* BOUTON VRAI */}
        <button 
          onClick={() => handleReponse(true)}
          style={{ 
            padding: '12px 30px', 
            backgroundColor: '#10B981', 
            color: 'white', 
            border: 'none', 
            borderRadius: '8px', 
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          VRAI 👍
        </button>

        {/* BOUTON FAUX */}
        <button 
          onClick={() => handleReponse(false)}
          style={{ 
            padding: '12px 30px', 
            backgroundColor: '#EF4444', 
            color: 'white', 
            border: 'none', 
            borderRadius: '8px', 
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          FAUX 👎
        </button>

      </div>
      
    </div>
  )
}

export default App