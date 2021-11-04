import React, {useState, useEffect} from 'react'
import { Grid,Card,TextField} from '@mui/material'
import AsyncAllPokemons from '../../asyncRequest/asyncAllPokemons'
import AsyncPokemonImages from '../../asyncRequest/asyncPokemonImages'

export const PokemonLists = () => {
    
    const [listPokemon] = AsyncAllPokemons("pokemon?limit=200&offset=1")
    const allPokemons = listPokemon.results
    const [search, setSearch] = useState("");
    const [results, setResults] = useState(allPokemons)

    console.log(allPokemons)
    console.log(results)

    useEffect(() =>{
        setResults(allPokemons)
    },[listPokemon])

    // Buscador
    useEffect(() => {
        const result = allPokemons?.filter((sr) => sr.name.toLowerCase().includes(search.toLowerCase()));
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
                                <Card className="p-4">
                                    <img alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${list.name}.jpg`} width="100px"/>
                                    <h3>{list.name}</h3>
                                </Card>
                            </Grid>
                        </>
                    )
                })}
            </Grid>
        </div>
    )
}
