import styles from './PokemonCard.herbe.module.css'


function PokemonCard({pokemon}) {

  return (
    <figure className={styles.card}>
      {(pokemon.imgSrc !== undefined) ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} className={styles.cardImg} />
       ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
