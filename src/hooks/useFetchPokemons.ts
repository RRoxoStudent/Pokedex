import { useEffect, useState } from 'react';

import { getPokemonDetails, getPokemonList } from '../api/pokemonApi';
import { Pokemon } from '../types/pokemon';

export const useFetchPokemons = (limit: number, offset: number) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        const PokemonList = await getPokemonList(limit, offset); //Vai buscar a lista  (Será que é melhor fazer o fetch aqui???)

        const pokemonDetails = await Promise.all(
          PokemonList.map(async (pokemonItem): Promise<Pokemon> => {
            const details = await getPokemonDetails(pokemonItem.name);
            return details;
          })
        );

        setPokemons(pokemonDetails);
      } catch (err: any) {
        setError(err.message || 'Error when searching for Pokémon');
      } finally {
        setLoading(false);
      }
    };
    fetchPokemons();
  }, [limit, offset]); //offset é passado como dependencia

  return { pokemons, loading, error };
};
