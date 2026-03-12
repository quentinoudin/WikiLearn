const { useState } = React; // Importation de useState depuis React

function App() { // Composant principal de l'application
    
      // Déclaration des états pour les réponses et le résultat

    const [answer1, setAnswer1] = useState("");
   
    const [answer2, setAnswer2] = useState("");
   
    const [answer3, setAnswer3] = useState("");
    
    const [answer4, setAnswer4] = useState("");
    
    const [answer5, setAnswer5] = useState("");
    
    const [result, setResult] = useState(""); // État pour stocker le résultat de la validation


    function checkAnswers() { // Fonction pour vérifier les réponses

        let score = 0; // Initialisation du score

        // Vérification de chaque réponse et incrémentation du score si la réponse est correcte
       
        if (answer1.toLowerCase() === "javascript") {score = score + 2;} // Vérifie si la réponse à la première question est "Javascript" (insensible à la casse)

        if (answer2.toLowerCase() === "composant") {score = score + 2;} 
       
        if (answer3.toLowerCase() === "state") {score = score + 2;} 
       
        if (answer4.toLowerCase() === "props") {score = score + 2;} 
       
        if (answer5.toLowerCase() === "jsx") {score = score + 2;} 
        
        setResult("Tu as obtenu " + score + " total de points 10.");}

        return ( 
            <div>
                <h1>Wikipedia Learning</h1> 

                 <p>0 xp / 100 xp</p> // barre de progression d'xp

                 <p>60 xp</p>
                 
                 <p>Niveau 1 2 3 4 5 6 7 8 9 10</p> // affichage des niveaux

                 <h2>Texte à trous</h2>
                
                 <p>Compléter les mots manquants</p> 

                   <p>       // Question 1
                     React est une bibliothèque  
                    <input
                    type="text"
                    value={answer1}
                    onChange={(e) => setAnswer1(e.target.value)}
                    />
                    qui permet de créer des interfaces utilisateurs.
                    </p>

                    <p>
                    Les interfaces sont construites avec des
                    <input
                    type="text"
                    value={answer2}
                    onChange={(e) => setAnswer2(e.target.value)}
                    />
                    réutilisables.
                    </p> 

                    <p>
                    Pour gérer les données dynamiques, React utilise le
                    <input
                    type="text"
                    value={answer3}
                    onChange={(e) => setAnswer3(e.target.value)}
                    />
                    </p>

                    <p>
                    Dans une application React, les données peuvent être transmises grâce aux
                    <input
                    type="text"
                    value={answer4}
                    onChange={(e) => setAnswer4(e.target.value)}
                    />
                    </p>

                    <p>
                    Le code est généralement écrit avec une syntaxe appelée
                    <input
                    type="text"
                    value={answer5}
                    onChange={(e) => setAnswer5(e.target.value)}
                    />
                    </p>

                    <button onClick={checkAnswers}>Valider</button> // Bouton pour valider les réponses

                    <p>{result}</p> // Affichage du résultat de la validation
            </div>
        );

    }

    ReactDOM.createRoot(document.getElementById("root")).render(<App />);