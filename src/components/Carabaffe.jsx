import styles from './PokemonCard.eau.module.css'

function PokemonCard() {
  return (
    <figure className={styles.card}>
      <img
        src="https://www.pokepedia.fr/images/thumb/2/2a/Carabaffe-RFVF.png/588px-Carabaffe-RFVF.png?20200407160606"
        alt="Carabaffe"
        className={styles.cardImg}
      />
      <figcaption>Carabaffe</figcaption>
    </figure>
  );
}

export default PokemonCard;