import React, {useState, useEffect} from 'react'
import { Grid,Autocomplete,TextField} from '@mui/material'
import AsyncAllPokemons from '../../asyncRequest/asyncAllPokemons'

export const PokemonLists = () => {
    
    const [listPokemon] = AsyncAllPokemons("pokemon?limit=200&offset=1")
    console.log(listPokemon);

    const [search, setSearch] = useState("");
    const [results, setResults] = useState(listPokemon)

    useEffect(() =>{
        setResults(listPokemon)
    },[])

    // Buscador
    useEffect(() => {
        const result = listPokemon?.results?.filter((sr) => sr.name.toLowerCase().includes(search.toLowerCase()));
        setResults(result)
    }, [search])

    console.log(search)

    return (
        <div>
            <TextField onChange={(e) => setSearch(e.target.value)} />
            <Grid container spacing={2}>
                {results?.map((list) =>{
                    return (
                        <>
                            <Grid item xs={8} md={3}>
                                {/* <img src={list.sprite.front_default} /> */}
                                <h3>{list.name}</h3>
                            </Grid>
                        </>
                    )
                })}
            </Grid>
        </div>
    )
}
