/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import "./index.css";
import { useState } from "react";
import PokemonCard from "./PokemonCard";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

  const fetchPokemon = async () => {
    try {
      const response = await fetch(API);
      const dataB = await response.json();

      const dataS = dataB.results.map(async (curPokemon) => {
        const response = await fetch(curPokemon.url);
        const dataP = await response.json();
        return dataP;
      });

      const dataR = await Promise.all(dataS);
      //   console.log(dataR); // got array of objects

      setPokemon(dataR);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(error);
    }
  };

  // useEffect to fetch the list of Pokémon when the component mounts
  useEffect(() => {
    fetchPokemon();
  }, []); // Empty dependency array to run only once on mount

  // search function
  const searchData = pokemon.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    );
  }

  return (
    <section className="container">
      <header>
        <h1>Let's Catch Pokémon</h1>
      </header>
      <div className="pokemon-search">
        <input
          type="text"
          placeholder="Seach Pokémon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <ul className="cards">
          {searchData.map((pokemon) => {
            {
              return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
            }
          })}
        </ul>
      </div>
    </section>
  );
};

export default Pokemon;
