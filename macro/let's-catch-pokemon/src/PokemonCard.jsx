/* eslint-disable react/prop-types */
import './index.css'

const PokemonCards = ({ pokemon }) => {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
          className="pokemon-image"
        />
      </figure>
      <h1 className="pokemon-name">{pokemon.name}</h1>
      <div className="pokemon-info pokemon-highlight">
        <p>{pokemon.types.map((curType) => curType.type.name).join(", ")}</p>
      </div>

      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span> Height:</span>
          {pokemon.height}
        </p>
        <p className="pokemon-info">
          <span> Weight:</span>
          {pokemon.weight}
        </p>
        <p className="pokemon-info">
          <span> speed:</span>
          {pokemon.stats[5].base_stat}
        </p>
      </div>

      <div className="grid-three-cols">
        <div className="pokemon-info">
          <p>{pokemon.base_experience}</p>
          <span> Experience:</span>
        </div>
        <div className="pokemon-info">
          <p>{pokemon.stats[1].base_stat}</p>
          <span>Attack:</span>
        </div>
        <div className="pokemon-info">
          <p>
            {pokemon.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
          <span> Abilities: </span>
        </div>
      </div>
    </li>
  );
};

export default PokemonCards;
