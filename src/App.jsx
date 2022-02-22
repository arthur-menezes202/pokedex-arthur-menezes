
import './App.css';
import React, { useState } from 'react';


function App() {

const [pokemom, setPokemom] = useState(0);


async function getPerson() {
  const pokemom =  fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then((response) => response.json())
  .then((json) => setPokemom(json));
  console.log(pokemom);
}

  return (
    <div className="">
      <button type="button" className="btn btn-primary" onClick={getPerson}>Primary</button>
      <button type="button" className="btn btn-primary" onClick={getPerson}>pokemon</button>

    </div>
  );
}

export default App;
