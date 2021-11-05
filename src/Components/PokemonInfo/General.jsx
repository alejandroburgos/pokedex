import React, {useState,useEffect} from 'react'
import { Grid,Button, Box, Tabs, Card} from '@mui/material'
import Badge from 'react-bootstrap/Badge'

export const General = (props) => {

    const [pokemon, setPokemon] = useState(props?.pokemonInfo)

    useEffect(() =>{
        setPokemon(props.pokemonInfo)
    },[props.pokemonInfo])

    useEffect(() =>{
    },[pokemon])

    const gradient = pokemon?.types?.map((type) => getColor(type.type.name)).join(", ");
    const colorType = pokemon?.types?.map((type) => getColor(type.type.name)).join(", ");

    let idPokemon = pokemon.id;
    if(idPokemon < 10){
        idPokemon = "0" + "0" + idPokemon
    }else if(idPokemon < 99){
        idPokemon = "0" + idPokemon
    }else{
        idPokemon = idPokemon
    }
    function getColor(type) {
        const colors = new Map([
            ["bug", "#a6b91a"],
            ["dark", "#705746"],
            ["dragon", "#6f35fc"],
            ["electric", "#f7d02c"],
            ["fairy", "#d685ad"],
            ["fighting", "#c22e28"],
            ["fire", "#ee8130"],
            ["flying", "#a98ff3"],
            ["ghost", "#735797"],
            ["grass", "#7ac74c"],
            ["ground", "#e2bf65"],
            ["ice", "#96d9d6"],
            ["normal", "#a8a77a"],
            ["poison", "#a33ea1"],
            ["psychic", "#f95587"],
            ["rock", "#b6a136"],
            ["steel", "#b7b7ce"],
            ["water", "#6390f0"]
        ]);

        return colors.get(type) || "#777";
    }

    return (
        <div>
            <Grid container spacing={0}>
                <Grid md={6} className="p-4">
                    <Card className="p-4">
                        <Grid md={6} className="p-4">
                            <h2>Información general</h2>
                            <hr />
                            <p>Nº Pokedex: <b>{pokemon.id}</b></p>
                            <p>Altura: <b>{pokemon.height} cm</b></p>
                            <p>Peso: <b>{pokemon.weight} kg</b></p>
                        </Grid>

                        <Grid md={6} className="p-4">
                            <h2>Habilidades</h2>
                            <hr />
                            {pokemon.abilities?.map((abilities) => {
                                return (
                                    <>
                                        <span><b>{abilities.ability.name} ,</b></span>
                                    </>
                                )
                            })}
                        </Grid>
                    </Card>
                </Grid>

                <Grid md={6} className="p-4" style={{
                        backgroundColor: colorType,
                        backgroundImage: `linear-gradient(45deg, ${gradient})`
                    }}>
                    <Card className="p-4">
                        <figure class="pic">
                            <img alt={`pokemon ${pokemon.name}`} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idPokemon}.png`} 
                                width="300px"/>
                        </figure>
                        {pokemon.types?.map((type) => {
                            return (
                                <>
                                    <Badge pill bg="secondary">{type.type.name} </Badge>
                                </>
                            )
                        })}
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
