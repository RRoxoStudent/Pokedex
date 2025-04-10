import useSWR from 'swr';
import { useState } from 'react';
import { getPokemonList } from '../api/pokemonApi';

interface PokemonCardData {
  nome: string;
  id: number;
  img: string;
}
const PAGE_SIZE = 20;
const fetcher = async (offset: number): Promise<PokemonCardData[]> => {
  const pokemonList = await getPokemonList(PAGE_SIZE, offset);
  return pokemonList.map((pokemon) => {
    const url = pokemon.url;
    const id = Number(url.split('/').filter(Boolean).pop()); // extrai o ID da URL
    return {
      nome: pokemon.name,
      id,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    };
  });
};

export const useFetchPaginatedPokemons = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const offset = (currentPage - 1) * PAGE_SIZE;

  const { data, error, isLoading } = useSWR([offset], ([offset]) =>
    fetcher(offset)
  );

  return {
    pokemons: data || [],
    loading: isLoading,
    error,
    currentPage,
    setCurrentPage,
    totalPages: 57, // 1140 Pokémon atualmente /
  };
};
