import { useState } from 'react'

// --- COMPOSANT NAVBAR ---
function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '15px 40px', 
      borderBottom: '1px solid #E5E7EB', 
      backgroundColor: 'white', 
      fontFamily: 'sans-serif' 
    }}>
      
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ backgroundColor: '#1E2B58', color: '#D89E3A', padding: '5px 10px', borderRadius: '6px', fontSize: '20px' }}>
          📖
        </div>
        <div style={{ fontSize: '22px' }}>
          <span style={{ color: '#1E2B58', fontWeight: 'bold' }}>Wikipedia </span>
          <span style={{ color: '#D89E3A', fontWeight: 'bold' }}>Learning</span>
        </div>
      </div>

      
      <div style={{ display: 'flex', gap: '30px', color: '#4B5563', fontSize: '16px' }}>
        <span style={{ cursor: 'pointer' }}>Parcours</span>
        <span style={{ cursor: 'pointer' }}>Leçon</span>
        <span style={{ cursor: 'pointer', fontWeight: 'bold', color: '#1E2B58' }}>Quizz</span> {/* Quizz est mis en avant */}
      </div>


      <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1E2B58', fontWeight: '500', cursor: 'pointer' }}>
          <span style={{ color: '#D89E3A', fontSize: '20px' }}>🏆</span> Classement
        </div>
        
        <button style={{ 
          display: 'flex', alignItems: 'center', gap: '8px', 
          padding: '8px 16px', backgroundColor: 'white', 
          border: '1px solid #D1D5DB', borderRadius: '8px', 
          cursor: 'pointer', fontSize: '16px' 
        }}>
          <span>👤</span> Profil
        </button>
      </div>

    </nav>
  )
}

function VraiFaux({ onFinish }) {
  
  // questions 
  const questionsLego = [
    { texte: "Le nom « Lego » vient de l'expression danoise « leg godt », qui signifie « joue bien ».", estVrai: true },
    { texte: "L'entreprise The Lego Group a été fondée à l'origine en Suède.", estVrai: false },
    { texte: "À ses tout débuts, l'entreprise Lego fabriquait principalement des jouets en bois.", estVrai: true },
    { texte: "Le brevet de la brique Lego moderne, avec son système d'emboîtement par tubes internes, a été déposé en 1998.", estVrai: false }
  ]

  // etats des questions et score
  const [indexQuestion, setIndexQuestion] = useState(0) // N° de la question actuelle
  const [pointsXp, setPointsXp] = useState(0) // Score du joueur
  const [message, setMessage] = useState('')

  const questionActuelle = questionsLego[indexQuestion]

  // Score
  function handleReponse(reponseUtilisateur) {
    let nouveauxPoints = pointsXp
    
    //  bonne réponse : +25 XP
    if (reponseUtilisateur === questionActuelle.estVrai) {
      nouveauxPoints = pointsXp + 25
      setPointsXp(nouveauxPoints)
    }

    const indexSuivant = indexQuestion + 1
    
    
    if (indexSuivant < questionsLego.length) {
      setMessage(reponseUtilisateur === questionActuelle.estVrai ? 'Bonne réponse ! ✅ +25 XP' : 'Mauvaise réponse ❌')
      setIndexQuestion(indexSuivant)
    } else {
      setMessage("Fin du Quizz ! Tu as gagné " + nouveauxPoints + " XP ! 🎉")
      if (onFinish) {
        setTimeout(() => {
          setIndexQuestion(0)
          setPointsXp(0)
          setMessage('')
          onFinish()
        }, 1800)
      }
    }
  }

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'sans-serif', backgroundColor: '#F9FAFB', paddingTop: '60px' }}>
      
      <Navbar />
      <div style={{ padding: '0 20px', maxWidth: '800px', margin: '0 auto' }}>

        
        <div style={{ 
          background: 'linear-gradient(to right, #1E2B58, #D89E3A)', 
          color: 'white', padding: '15px 30px', borderRadius: '12px', display: 'flex', 
          justifyContent: 'space-between', fontSize: '18px', fontWeight: 'bold',
          marginBottom: '40px', width: '70%', margin: '0 auto 40px auto' 
        }}>
          <span>0xp</span>
          <span>{pointsXp}xp</span>
        </div>

        
        <div style={{ 
          border: '4px solid #1E2B58', backgroundColor: '#FCF9F2', borderRadius: '16px', 
          padding: '40px', textAlign: 'center', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        }}>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', color: '#D89E3A', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
            <span>{indexQuestion === 0 ? '🔥' : '1'}</span>
            <span>{indexQuestion === 1 ? '🔥' : '2'}</span>
            <span>{indexQuestion === 2 ? '🔥' : '3'}</span>
            <span>{indexQuestion === 3 ? '🔥' : '4'}</span>
          </div>

          <h2 style={{ color: '#1E2B58', margin: '0 0 15px 0' }}>Vrai ou Faux</h2>

          {message && (
            <p style={{ color: '#1E2B58', fontWeight: 'bold', margin: '0 0 16px 0' }}>
              {message}
            </p>
          )}
          
          <p style={{ color: '#1E2B58', fontSize: '22px', fontWeight: 'bold', minHeight: '80px', marginBottom: '40px' }}>
            {questionActuelle.texte}
          </p>

          
          <div style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
            
            
            <div onClick={() => handleReponse(true)} style={{ width: '280px', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer', border: '3px solid #1E2B58', backgroundColor: '#1E2B58' }}>
              <img src="https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=400" alt="Lego Vrai" style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
              <div style={{ color: 'white', padding: '15px', fontSize: '24px', fontWeight: 'bold' }}>Vrai</div>
            </div>

            
            <div onClick={() => handleReponse(false)} style={{ width: '280px', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer', border: '3px solid #E5A335', backgroundColor: '#E5A335' }}>
              <img src="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?w=400" alt="Lego Faux" style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
              <div style={{ color: 'white', padding: '15px', fontSize: '24px', fontWeight: 'bold' }}>Faux</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default VraiFaux;