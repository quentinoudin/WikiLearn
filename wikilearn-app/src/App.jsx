return (
  <div>

    {/* titre de l'application */}
    <h1>Wikipedia Learning</h1>

    {/* progression xp */}
    <p>0 xp / 100 xp</p>

    <p>60 xp</p>

    {/* niveaux */}
    <p>Niveau 1 2 3 4 5 6 7 8 9 10</p>

  </div>
);
return (
  <div>

    <h1>Wikipedia Learning</h1>

    <p>0 xp / 100 xp</p>

    <p>60 xp</p>

    <p>Niveau 1 2 3 4 5 6 7 8 9 10</p>

    {/* titre exercice */}
    <h2>Texte à trous</h2>

    <p>Compléter les mots manquants</p>

  </div>
);
{/* question 1 */}
<p>
  React est une bibliothèque
  <input
    type="text"
    value={answer1}
    onChange={(e) => setAnswer1(e.target.value)}
  />
  qui permet de créer des interfaces utilisateurs.
</p>

{/* question 2 */}
<p>
  Les interfaces sont construites avec des
  <input
    type="text"
    value={answer2}
    onChange={(e) => setAnswer2(e.target.value)}
  />
  réutilisables.
</p>

{/* question 3 */}
<p>
  Pour gérer les données dynamiques, React utilise le
  <input
    type="text"
    value={answer3}
    onChange={(e) => setAnswer3(e.target.value)}
  />
</p>

{/* question 4 */}
<p>
  Dans une application React, les données peuvent être transmises grâce aux
  <input
    type="text"
    value={answer4}
    onChange={(e) => setAnswer4(e.target.value)}
  />
</p>

{/* question 5 */}
<p>
  Le code est généralement écrit avec une syntaxe appelée
  <input
    type="text"
    value={answer5}
    onChange={(e) => setAnswer5(e.target.value)}
  />
</p>

{/* bouton validation */}
<button onClick={checkAnswers}>Valider</button> 

{/* resultat du score */}
<p>{result}</p>


