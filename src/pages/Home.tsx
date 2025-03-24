import React, { useState, useMemo, useCallback } from 'react';
import { Grid, Container } from '@mui/material'; // Removi o Button aqui
// import { staticPokemonList } from '../utils/data';
import PokemonCard from '../components/PokeCard';
import Navbar from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { addFavorite, removeFavorite } from '../store/favoritesSlice';
import { useFetchPokemons } from '../hooks/useFetchPokemons';

const Home = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [showFavorites, setShowFavorites] = useState(false);

  const favorites = useSelector((state: RootState) => state.favorites);
  const dispatch = useDispatch();

  //Hook personalizado que vai buscar os Pokémons
  const { pokemons, loading, error } = useFetchPokemons(100, 0);

  const filteredPokemon = useMemo(() => {
    if (!pokemons) return []; //para o caso de o pokemon ser null ou undefined
    const searchFiltered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchValue.toLowerCase().trim())
    );

    if (showFavorites) {
      return searchFiltered.filter((pokemon) => favorites.includes(pokemon.id));
    }

    return searchFiltered;
  }, [searchValue, favorites, showFavorites, pokemons]);

  const handleSearch = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const toggleFavorite = useCallback(
    (pokemonId: number) => {
      if (favorites.includes(pokemonId)) {
        dispatch(removeFavorite(pokemonId));
      } else {
        dispatch(addFavorite(pokemonId));
      }
    },
    [dispatch, favorites]
  );

  return (
    <div>
      <Navbar
        onSearch={handleSearch}
        showFavorites={showFavorites}
        onToggleShowFavorites={() => setShowFavorites((prev) => !prev)}
      />

      <Container>
        {loading && <h2>Loading Pokémons...</h2>}

        {error && <h2>Error: {error}</h2>}

        {!loading && !error && (
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
        )}
      </Container>
    </div>
  );
};

export default React.memo(Home);
