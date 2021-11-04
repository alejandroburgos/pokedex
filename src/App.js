import React, { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import { Home } from "./Components/Home";
import './index.css';

function App() {

  // const [loading, setLoading] = useState(false);

  // const [pokemons] = GetPokemons("pokemon?limit=100&offset=200");
  // const [urlPokemon, setUrlPokemon] = useState("");
  // const [clickPokemon] = AsyncClickPokemon(urlPokemon, loading, setLoading);
  
  // console.log(loading);
  // console.log(clickPokemon);


  return (
    <>
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    </>
  );
}

export default App;
