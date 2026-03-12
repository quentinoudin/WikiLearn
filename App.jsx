import React from 'react'
import QuizTexteATrous from './QuizTexteATrous.jsx'

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>🏆 WikiLearn - Le Quiz Texto</h1>
        <p>Apprends Wikipédia en complétant les trous !</p>
      </header>

      <main>
        <QuizTexteATrous />
      </main>
    </div>
  )
}

export default App