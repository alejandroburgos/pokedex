import React from 'react'
import { PokemonLists } from './PokemonLists/PokemonLists'

export const Home = () => {
    return (
        <div>
            <h1>Pokedex</h1>
            <small>by SAWER</small>
            <PokemonLists />
        </div>
    )
}
