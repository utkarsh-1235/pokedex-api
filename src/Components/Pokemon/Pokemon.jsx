function Pokemon({ name, image }) {
    return (
      <div className="pokemon-wrapper">
        <div>name: {name}</div>
        <div><img src={image} alt="" /></div>
      </div>
    );
  }
  
  export default Pokemon;
  