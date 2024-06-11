import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const List = () => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = useCallback(async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      setPokemons(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getPokemons();
  }, []);

  if (!pokemons.length) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      {pokemons.map((pokemon, index) => {
        return <div key={index}>{pokemon.name}</div>;
      })}
    </div>
  );
};

export default List;
