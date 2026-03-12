import "./App.css";

function ButtonSuede() {
  const clic = () => {
    alert("Bouton cliqué!");
  };

  return <button onClick={clic}>A. Suède</button>;
}

function ButtonDanemark() {
  const clic = () => {
    alert("Bouton cliqué!");
  };

  return <button onClick={clic}>B. Danemark</button>;
}

function ButtonNorvege() {
  const clic = () => {
    alert("Bouton cliqué!");
  };

  return <button onClick={clic}>C. Norvège</button>;
}

function ButtonFinlande() {
  const clic = () => {
    alert("Bouton cliqué!");
  };

  return <button onClick={clic}>D. Finlande</button>;
}


function App() {
  return (
    <>
      <h1>Question 5 : De quel pays est originaire le groupe qui fabrique les LEGO ?</h1>
      <ButtonSuede />
      <ButtonDanemark />
      <ButtonNorvege />
      <ButtonFinlande />
    </>
  );
}

export default App;
