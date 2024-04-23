import styles from './PokemonCard.eau.module.css'

function PokemonCard() {
  return (
    <figure className={styles.card}>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
        alt="Carapuce"
        className={styles.cardImg}
      />
      <figcaption>Carapuce</figcaption>
    </figure>
  );
}

export default PokemonCard;