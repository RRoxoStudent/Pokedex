import { useEffect, useState } from "react";
import { useMemo } from 'react';
import { Grid, Container, CircularProgress } from "@mui/material";
import { getPokemonList, getPokemonDetails } from "../api/pokemonApi";
import { Pokemon, PokemonListItem } from "../types/pokemon";
import PokemonCard from "../components/PokeCard";
import { staticPokemonList } from "../utils/data";


const Home = () => {

    //State para o valor da pesquisa
    const[searchValue, setSearchValue] = useState<string>(" ");
    //State para os resultados filtrados
 
    const filteredPokemon = useMemo(() => {
      return staticPokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchValue.toLowerCase().trim())
      );
    }, [staticPokemonList, searchValue]);

        const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchValue(event.target.value);
          };
          console.log(filteredPokemon);
          return (
            <div>
                {filteredPokemon.length > 0 ? (
                    filteredPokemon.map((pokemon) => (
                        <PokemonCard key={pokemon.id} id={pokemon.id} name={pokemon.name} sprites={pokemon.sprites.front_default} />
                    ))
                ) : (
                    <p>Nenhum Pokémon encontrado!</p>
                )}
            </div>
        );

};
export default Home;