import { useEffect, useState } from 'react';
import { getPokemonList, getPokemonDetails } from '../api/pokemonApi';
import { Pokemon, PokemonListItem } from '../types/pokemon';
import useSWR from 'swr';

interface PokemonCardData {
  nome: string;
  id: number;
  img: string;
}
//Função para ir buscar dados da API
const fetcher = async (
  limit: number,
  offset: number
): Promise<PokemonCardData[]> => {
  const pokemonList = await getPokemonList(limit, offset);
  return pokemonList.map((value) => {
    const urlValue = value.url;
    const i = urlValue.lastIndexOf('/');
    const pokemonIdUrl = Number(
      urlValue.substring(urlValue.lastIndexOf('/', i - 1) + 1, i)
    );

    return {
      nome: value.name,
      id: pokemonIdUrl,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIdUrl}.png`,
    };
  });
};

// Custum Hook com SWR
export const useFetchPokemons = (limit: number, offset: number) => {
  const { data, error, isLoading } = useSWR([limit, offset], () =>
    fetcher(limit, offset)
  );

  return {
    pokemons: data || [],
    loading: isLoading,
    error,
  };
};
