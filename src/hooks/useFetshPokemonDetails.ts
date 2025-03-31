import { PokemonDetailsResponse } from 'src/types/pokemonDetails';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useFetchPokemonDetails = (id: string | undefined) => {
  const { data, error } = useSWR<PokemonDetailsResponse>(
    id ? `https://pokeapi.co/api/v2/pokemon/${id}` : null,
    fetcher
  );

  return {
    pokemon: data,
    loading: !data && !error,
    error,
  };
};
