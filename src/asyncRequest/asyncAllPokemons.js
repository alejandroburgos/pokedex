import { useState, useEffect } from "react";

const GetPokemons = (urlApi) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://pokeapi.co/api/v2/" + `${urlApi}`, {   
                    method: 'GET',     
                    headers: {
                        'Accept': 'application/json',
                    }}).then();
    
                const json = await response.json();
                await setData(json, setLoading(true));
    
                //Si se ha validado bien, redirijo al usuario con sus datos
                /* if (response.ok === true) {   
                    return <Groups data={json}></Groups>
                }else{
                    //console.log("aaaa")
                } */
    
            } catch (err) {
                console.warn("No he podido traer los datos de la API...", err);
                setLoading(true);
            }
        };
        if (urlApi) {
            fetchData(urlApi);
        }else{
            //console.log("no le has pasado nada a urlAPi")
        }
        
    }, [urlApi]);

    

    return [data, loading];
    };
    
export default GetPokemons;