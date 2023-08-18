import { useEffect, useState } from 'react';
import './PokeList.css'
import axios from 'axios';
import Pokemon from '../Pokemon/Pokemon'

function PokeList(){
    const [pokemonList, setPokemonlist ] = useState([]);
    const [isLoading, setisLoading ] = useState(true);

    const [pokedexUrl, setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    async function downloadPokemons(){
        setisLoading(true);
        const response = await axios.get(pokedexUrl);  // this download list of 20 pokemons

        const pokemonResult = response.data.results;  // we get the array of 20 pokemons from result

        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);
        // iterating over the array of pokemons, and using their url, to create array of promises
        // that will download those 20 pokemons

        const pokemonresultpromise = pokemonResult.map((pokemon)=> axios.get(pokemon.url));

        //passing that promise array to axios.all
        const pokemonData = await axios.all(pokemonresultpromise);  // array of 20 pokemon detailed data
        console.log(pokemonData);

        // now iterate to each pokemon and extract id, name, image,
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
        
    },[pokedexUrl]);
        

    return(
        <div className="pokemon-list-wrapper">
         <div>Pokelist</div>
         <div className="pokemon-wrapper">
         {(isLoading)? ' loading....' :  
            pokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)
        }

         </div>
         <div className="controls">

         </div>
        <button disabled = {prevUrl == null} onClick={()=>setPokedexUrl(prevUrl)}>Prev</button>
        <button disabled = {nextUrl == null} onClick={()=>setPokedexUrl(nextUrl)}>next</button>
        </div>
    )
}
export default PokeList;