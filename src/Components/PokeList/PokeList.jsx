import { useEffect, useState } from 'react';
import './PokeList.css'
import axios from 'axios';
import Pokemon from '../Pokemon/Pokemon'

function PokeList(){
    const [pokemonList, setPokemonlist ] = useState([]);
    const [isLoading, setisLoading ] = useState(true);

    async function downloadPokemons(){
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const pokemonResult = response.data.results;
        
        const pokemonresultpromise = pokemonResult.map((pokemon)=> axios.get(pokemon.url));

        const pokemonData = await axios.all(pokemonresultpromise);
        console.log(pokemonData);

        const res = pokemonData.map(pokeData =>{
            const pokemon = pokeData.data;
            return {
                id:pokemon.id,
                name: pokemon.name, 
                image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
                types: pokemon.types}
        })

        console.log(res);
        setPokemonlist(res);
        
        setisLoading(false);
    }
    useEffect(()=>{
        downloadPokemons();
        
    },[]);
        

    return(
        <div className="pokelist-wrapper">
         Pokelist
        {(isLoading)? ' loading....' :  
            pokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id}/>)
        }

        </div>
    )
}
export default PokeList;