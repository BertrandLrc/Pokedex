import styles from './PokemonCard.herbe.module.css';
import PropTypes from "prop-types";


function PokemonCard({pokemon}) {

  return (
    <figure className={styles.card}>
      {(pokemon.imgSrc !== undefined) ? 
      (<img src={pokemon.imgSrc} alt={pokemon.name} className={styles.cardImg} />) : 
      (<p>???</p>)}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

PokemonCard.PropTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string
  }).isRequired
}

export default PokemonCard;
