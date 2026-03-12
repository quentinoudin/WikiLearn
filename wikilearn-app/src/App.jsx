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


