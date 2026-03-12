import { useState } from 'react'

// Je crée mon composant pour le Quizz
function MonSuperQuizz() {
  
  // Ici je prépare mes "états" pour que React s'en rappelle
  const [estCeQueJaiGagne, setEstCeQueJaiGagne] = useState("") 
  const [score, setScore] = useState(0)
  const [boutonDesactive, setBoutonDesactive] = useState(false)

  // Ma question (je la mets dans une variable pour que ce soit plus clair)
  const maQuestion = "Est-ce que le JavaScript c'est facile ?"
  const laBonneReponse = false // Parce que c'est dur au début quand même !

  // Ça c'est la fonction qui se lance quand on clique sur un bouton
  function verifierLaReponse(ceQueJaiClique) {
    if (ceQueJaiClique === laBonneReponse) {
      setEstCeQueJaiGagne("GAGNÉ ! Trop fort(e) ! 🏆")
      setScore(score + 1)
    } else {
      setEstCeQueJaiGagne("Oups... c'est raté. 😢")
    }
    
    // J'empêche de cliquer deux fois pour pas tricher sur le score
    setBoutonDesactive(true)
  }

  return (
    <div style={{ border: '2px solid black', padding: '20px', textAlign: 'center' }}>
      <h1>Mon Quizz React</h1>
      
      {/* J'affiche la question ici */}
      <p style={{ fontSize: '20px' }}>{maQuestion}</p>

      {/* Les boutons pour répondre */}
      <button 
        disabled={boutonDesactive} 
        onClick={() => verifierLaReponse(true)}
      >
        VRAI
      </button>

      <button 
        disabled={boutonDesactive} 
        onClick={() => verifierLaReponse(false)}
        style={{ marginLeft: '10px' }}
      >
        FAUX
      </button>

      {/* J'affiche le message seulement si on a cliqué sur quelque chose */}
      {estCeQueJaiGagne !== "" && (
        <div style={{ marginTop: '20px', color: 'blue' }}>
          {estCeQueJaiGagne}
        </div>
      )}

      <p>Mon score : {score}</p>
      
      {/* Un petit bouton pour recommencer si on s'est trompé */}
      {boutonDesactive && (
        <button onClick={() => {
          setBoutonDesactive(false)
          setEstCeQueJaiGagne("")
        }}>
          Recommencer
        </button>
      )}
    </div>
  )
}

export default MonSuperQuizz