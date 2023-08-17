import Pokelist from '../PokeList/PokeList'
import Search from "../Search/Search";
import "./Pokedex.css";

function Pokedex(){
    return (
        <div className="pokedex-wrapper">
        <h1 id="pokedex-height">Pokedex</h1>
        <Search/>
        <Pokelist/>
        
        </div>
    )
}

export default Pokedex;