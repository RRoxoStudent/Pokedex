import { useState, useMemo } from 'react';
import { Grid, Container } from '@mui/material'; // Removi o Button aqui
import { staticPokemonList } from '../utils/data';
import PokemonCard from '../components/PokeCard';
import Navbar from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { addFavorite, removeFavorite } from '../store/favoritesSlice';

const Home = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [showFavorites, setShowFavorites] = useState(false);

  const favorites = useSelector((state: RootState) => state.favorites);
  const dispatch = useDispatch();

  const toggleFavorite = (pokemonId: number) => {
    if (favorites.includes(pokemonId)) {
      dispatch(removeFavorite(pokemonId));
    } else {
      dispatch(addFavorite(pokemonId));
    }
  };

  const filteredPokemon = useMemo(() => {
    const searchFiltered = staticPokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchValue.toLowerCase().trim())
    );

    if (showFavorites) {
      return searchFiltered.filter((pokemon) => favorites.includes(pokemon.id));
    }

    return searchFiltered;
  }, [searchValue, favorites, showFavorites]);

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div>
      <Navbar
        onSearch={handleSearch}
        showFavorites={showFavorites}
        onToggleShowFavorites={() => setShowFavorites((prev) => !prev)}
      />

      <Container>
        {/* Agora só temos o Grid */}
        <Grid container spacing={4}>
          {filteredPokemon.length > 0 ? (
            filteredPokemon.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                sprites={pokemon.sprites.front_default}
                isFavorite={favorites.includes(pokemon.id)}
                onToggleFavorites={() => toggleFavorite(pokemon.id)}
              />
            ))
          ) : (
            <h1>No Pokémon were found!</h1>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
