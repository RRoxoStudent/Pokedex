import { useEffect, useState } from "react";
import { Grid, Container, CircularProgress } from "@mui/material";
import { getPokemonList, getPokemonDetails } from "../api/pokemonApi";
import { Pokemon, PokemonListItem } from "../types/pokemon";
import PokemonCard from "../components/PokeCard";
import { staticPokemonList } from "../utils/data";


const Home = () => {

    //State para o valor da pesquisa
    const[searchValue, setSearchValue] = useState<string>("");
    //State para os resultados filtrados
    const[filteredPokemon, setFilteredPokemon] = useState(staticPokemonList);

    useEffect(() => {
        const filtered = staticPokemonList.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
          );
          setFilteredPokemon(filtered);
        }, [searchValue]);

        const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchValue(event.target.value);
          };
    return (
        <div>
            {filteredPokemon.length > 0 ? (
                filteredPokemon.map((pokemon) => (
            <PokemonCard pokemon={pokemon} />
            ) : (
            <p>Nenhum Pokémon encontrado!</p>
          )}
        </div>

};
export default Home;