import styles from './PokemonCard.eau.module.css'

function PokemonCard() {
  return (
    <figure className={styles.card}>
      <img
        src="https://www.pokepedia.fr/images/thumb/2/24/Tortank-RFVF.png/250px-Tortank-RFVF.png"
        alt="Tortank"
        className={styles.cardImg}
      />
      <figcaption>Tortank</figcaption>
    </figure>
  );
}

export default PokemonCard;