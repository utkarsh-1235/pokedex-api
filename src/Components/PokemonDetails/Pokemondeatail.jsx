import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Pokemondetails(){
 const {id} = useParams();
 const [pokemon, setPokemon] = useState({});

 async function downloadPokemon(){
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    setPokemon({
        name: response.data.name,
        image: response.data.sprites.other.dream_world.front_default,
        weight: response.data.weight,
        height: response.data.height,
        type: response.data.types.map((t)=>t.type.name)
    })
    
 }

 useEffect(()=>{
    downloadPokemon();
 },[]);
 
 return(
    <div className="pokemon-detail-wrapper">
        <div className="pokemon-name">Name: {pokemon.name}</div>
        <img className="pokemon-image" src={pokemon.image} />
        <div className="pokemon-weight">Weight: {pokemon.weight}</div>
        <div className="pokemon-height">Height: {pokemon.height}</div>
        <div className="pokemon-type">Type: {pokemon.types && pokemon.types.map((t)=><div key={t}>{t}</div>)}</div>
    </div>
 )
}
export default Pokemondetails;