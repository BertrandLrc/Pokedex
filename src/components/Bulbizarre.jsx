const card = {
  width: "200px",
  padding: "1rem",
  backgroundColor: "lightgreen",
  borderRadius: "5px",
  boxShadow: "0px 0px 5px gray",
  color: "white",
  fontSize: "1.6rem",
  textAlign: "center",
  textShadow: "0px 0px 5px gray",
}

function PokemonCard() {
  return (
    <figure style={card}>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt="Bulbizarre"
        style={{
          width: "100%",
          height: "auto",
          marginBottom: "0.5rem",
          backgroundColor: "white",
          borderRadius: "inherit",
          boxShadow: "inherit",
        }}
      />
      <figcaption>Bulbizarre</figcaption>
    </figure>
  );
}

export default PokemonCard;