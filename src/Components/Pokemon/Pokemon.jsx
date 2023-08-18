import { Link } from "react-router-dom";

function Pokemon({ name, image, id }) {
    return (
      <div className="pokemon-wrapper">
        <Link to={`pokemon/:${id}`}/>
        <div>name: {name}</div>
        <div><img src={image} alt="" /></div>
      </div>
    );
  }
  
  export default Pokemon;
  