import { useState, useMemo } from "react";
import { Grid, Container } from "@mui/material";
import { staticPokemonList } from "../utils/data"; // Lista estática dos Pokémon
import PokemonCard from "../components/PokeCard";
import Navbar from "../components/Navbar";

const Home = () => {
  // State for the search value
  const [searchValue, setSearchValue] = useState<string>("");

  // State for filtered results based on the search value
  const filteredPokemon = useMemo(() => {
    return staticPokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchValue.toLowerCase().trim())
    );
  }, [searchValue]); //  searchValue dependenci

  //Function that will be called to update the search value
  const handleSearch = (value: string) => {
    setSearchValue(value);  
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} /> 
      <Container>
        <Grid container spacing={4}>
          {filteredPokemon.length > 0 ? (
            filteredPokemon.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                sprites={pokemon.sprites.front_default}
              />
            ))
          ) : (
            <p>Nenhum Pokémon encontrado!</p>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
