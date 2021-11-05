import React from 'react'
import { PokemonLists } from './PokemonLists/PokemonLists'
import { useParams, useLocation  } from "react-router-dom";

export const Home = (props) => {
    
    return (
        <div>
            <div className="text-center">
                <h1>Pokedex </h1>
                <small>by SAWER</small>
            </div>
            <PokemonLists />
        </div>
    )
}
