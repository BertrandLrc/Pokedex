function Button({pokemonIndex, setPokemonIndex, pokemonLength}) {

  const handleClick1 = () => {
    setPokemonIndex(pokemonIndex +1)
  };
  const handleClick2 = () => {
    setPokemonIndex(pokemonIndex -1)
  };

  return (
  <>
      {(pokemonIndex > 0) ? (<button onClick={handleClick2}>Précédent</button>) : "" }
      {(pokemonIndex < pokemonLength) ? (<button onClick={handleClick1}>Suivant</button>) : ""}
  </>
  );
}

export default Button;