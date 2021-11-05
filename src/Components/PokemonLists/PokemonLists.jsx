import React, {useState, useEffect} from 'react'
import { Grid, Menu, MenuItem, TextField, Button, Pagination } from '@mui/material'
import usePagination from './usePagination/usePagination';

import AsyncAllPokemons from '../../asyncRequest/asyncAllPokemons'
import { useNavigate } from "react-router-dom";

export const PokemonLists = (props) => {
    
    const [listPokemon] = AsyncAllPokemons("pokemon?limit=200&offset=0");
    const allPokemons = listPokemon.results;
    const [search, setSearch] = useState("");
    const [results, setResults] = useState(allPokemons)

    let [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(12);

    const _DATA = usePagination(results, perPage);
    const count = Math.ceil(results?.length / perPage);

    let navigate = useNavigate(); 

    useEffect(() => {
        setResults(allPokemons)
    },[listPokemon])

    // Buscador
    useEffect(() => {
        const result = allPokemons?.filter((sr) => sr.name.toLowerCase().includes(search.toLowerCase()));
        setResults(result)
    }, [search, allPokemons])

    // Cuando haces click fuera del dropdown se setea a undefined por defecto
    //esto lo controlas
    useEffect(() => {
        if(!perPage) setPerPage(10);
    }, [perPage])

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    useEffect(() => {
        if(page > 1) {
            setPage(1)
            _DATA.jump(1)
        }
    },[search])
    
    // ************************************************
    
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (e) => {
        setAnchorEl(null);
        setPerPage(e.target.value)
    };

    //Me da la id del boton Ver
    const seeWeb = (pokemon, id) => {
        navigate(`/pokemon/${id}`, { state: pokemon });
    };
    console.log(_DATA.currentData())
    return (
        <div className="p-4">
            <TextField className="mb-2" 
                        onChange={(e) => setSearch(e.target.value)} 
                        placeholder="Buscador ... "/>

            <div className="p-3 d-flex justify-content-center">
                <div className="divider my-3" />
                <div className="d-flex align-items-center justify-content-center flex-wrap">
                    <span>Filas por página:</span>
                    <Button aria-controls="simple-menu" color="primary" className="border-1 m-2" size="small" variant="outlined" variant="contained" aria-haspopup="true" onClick={handleClick}>
                        {perPage}
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        classes={{ list: 'p-0' }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                            <div className="p-3">
                                <MenuItem className="pr-5 px-3 text-dark" value="12" onClick={handleClose}>12</MenuItem>
                                <MenuItem className="pr-5 px-3 text-dark" value="24" onClick={handleClose}>24</MenuItem>
                                <MenuItem className="pr-5 px-3 text-dark" value="48" onClick={handleClose}>48</MenuItem>
                            </div>
                    </Menu>
                </div>

                <div className="d-flex align-items-center justify-content-center flex-wrap">
                    <Pagination className="pagination-warning" 
                            count={count}
                            size="small"
                            page={page}
                            variant="outlined"
                            shape="rounded"
                            onChange={handleChange}
                    />
                </div>
            </div>
            <Grid container spacing={0}>
                {_DATA.currentData()?.map((pokemon, i) => {
                    let idPokemon = pokemon.url.split('/')[6];
                    if(idPokemon < 10){
                        idPokemon = "0" + "0" + idPokemon
                    }else if(idPokemon < 99){
                        idPokemon = "0" + idPokemon
                    }else{
                        idPokemon = idPokemon
                    }
                    return (
                        <>
                            <Grid item xs={8} md={2} key={i}>
                                <article className="pokemon">
                                <span class="id">Nº <span>{idPokemon}</span></span>

                                    <figure class="pic">
                                        <img alt={`pokemon ${pokemon.name}`} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idPokemon}.png`} 
                                            width="150px" style={{maxHeight: "100%"}}/>
                                    </figure>
                                    <h6 class="name text-center">{pokemon.name}</h6>
                                    <div>
                                    {/* <p class="attr" >{pokemon.types[0].type.name}</p> */}
                                    </div>
                                    <div className="text-center">
                                        <Button variant="outlined" size="small" onClick={() => seeWeb(pokemon, i)} >Ver más</Button>
                                    </div>
                                </article>
                            </Grid>
                        </>
                    ) 
                })}

                {!_DATA.currentData() == [] ? 
                    <div className="text-center">No hay resultados sobre el Pokemon <b>{search}</b></div> 
                    : null}
            </Grid>
        </div>
    )
}
