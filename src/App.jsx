
import './App.css';
import React, { useState } from 'react';


function App() {

const [pokemom, setPokemom] = useState(0);


async function getPerson() {
  const pokemom = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then((response) => response.json())
  .then((json) => setPokemom(json));
  console.log(pokemom);
}

  return (
    <div className="">
      <button type="button" className="btn btn-primary" onClick={getPerson}>Primary</button>
      <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' />
    </div>
  );
}

export default App;
