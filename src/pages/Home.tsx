import { useState, useMemo } from "react";
import { Grid, Container } from "@mui/material";
import { staticPokemonList } from "../utils/data"; // Lista estática dos Pokémon
import PokemonCard from "../components/PokeCard";
import Navbar from "../components/Navbar";
import { stringify } from "querystring";

const Home = () => {
  // State for the search value
  const [searchValue, setSearchValue] = useState<string>("");

  //State for the favorite array
  const [favorites, setFavorites] =useState<number[]>([]);


// Load favorites from localStorage when starting the app
  const storedFavorites = useMemo(() => {
  return localStorage.getItem("favorites");
}, []);

// Save favorites in localStorage every time you change
useMemo(() => {
  localStorage.setItem("favorites", JSON.stringify(favorites))
},[favorites]);

//Add or remove from favorites function 
const toggleFavorite = (pokemonId: number) => {
  setFavorites((prev) => {
    if (prev.includes(pokemonId)) {
      return prev.filter((id) => id !== pokemonId); // Remove
    } else {
      return [...prev, pokemonId]; // Add
    }
  });
};



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
                isFavorite={pokemon.isFavorite}
                onToggleFavorites={pokemon.onToggleFavorites}
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
