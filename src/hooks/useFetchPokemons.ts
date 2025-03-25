import { useEffect, useState } from 'react';
import { getPokemonList, getPokemonDetails } from '../api/pokemonApi';
import { Pokemon, PokemonListItem } from '../types/pokemon';

interface PokemonCardData {
  nome: string;
  id: number;
  img: string;
}

export const useFetchPokemons = (limit: number, offset: number) => {
  const [pokemons, setPokemons] = useState<PokemonCardData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        setError(null);

        // Buscar lista de Pokémons (nome + url)
        const pokemonList = await getPokemonList(limit, offset);
        const pokemonResults = pokemonList.map((value) => {
          const urlValue = value.url;
          const i = urlValue.lastIndexOf('/');
          const pokemonIdUrl = Number(
            urlValue.substring(urlValue.lastIndexOf('/', i - 1) + 1, i)
          );

          console.log(pokemonIdUrl);

          const newPokemonValue = {
            nome: value.name,
            id: pokemonIdUrl,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIdUrl}.png`,
          };
          return newPokemonValue;
        });
        setPokemons(pokemonResults);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : 'Failed to fetch Pokémons'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [limit, offset]);

  return { pokemons, loading, error };
};
