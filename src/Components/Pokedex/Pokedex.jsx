import Pokelist from '../PokeList/PokeList'
import Search from "../Search/Search";
import "./Pokedex.css";

function Pokedex(){
    return (
        <div className="pokedex-wrapper">
        <Search/>
        <Pokelist/>
        
        </div>
    )
}

export default Pokedex;