function Button({ pokemonList, click }) {
  return (
    <div className="buttons">
      {pokemonList.map((pokemonList, index) => {
        return (
          <button 
          key={pokemonList.name} 
          onClick={() => click(index) }>
          {pokemonList.name}
          </button>
       );
     })};
    </div>
  );
}



export default Button;

