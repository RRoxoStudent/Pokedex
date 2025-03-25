import React, { useMemo, useState } from 'react';
import { Grid, Container } from '@mui/material';
import PokemonCard from '../components/PokeCard';
import Navbar from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { addFavorite, removeFavorite } from '../store/favoritesSlice';
import { useFetchPokemons } from '../hooks/useFetchPokemons';
import ErrorAlert from '../components/ErrorAlert';
import '../styles.css';

const Home = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [showFavorites, setShowFavorites] = useState(false);
  const { pokemons, loading, error } = useFetchPokemons(50, 0); // Buscar 50 Pokémons, a partir do primeiro.

  const favorites = useSelector((state: RootState) => state.favorites);
  const dispatch = useDispatch();

  const filteredPokemon = useMemo(() => {
    let result = pokemons.filter((pokemon) =>
      pokemon.nome.toLowerCase().includes(searchValue.toLowerCase().trim())
    );

    if (showFavorites) {
      result = result.filter((pokemon) => favorites.includes(pokemon.id));
    }

    return result;
  }, [pokemons, searchValue, showFavorites, favorites]);

  const toggleFavorite = (pokemonId: number) => {
    if (favorites.includes(pokemonId)) {
      dispatch(removeFavorite(pokemonId));
    } else {
      dispatch(addFavorite(pokemonId));
    }
  };

  return (
    <div>
      <Navbar
        onSearch={setSearchValue}
        showFavorites={showFavorites}
        onToggleShowFavorites={() => setShowFavorites((prev) => !prev)}
      />

      <Container>
        {loading && <h3>Loading Pokémons...</h3>}
        {error && (
          <ErrorAlert
            title="Error!!"
            message="An unknown error as ocurred! Please try again later"
          />
        )}

        <Grid className="Grid_1" container spacing={5}>
          {!loading && !error && filteredPokemon.length > 0 ? (
            filteredPokemon.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.nome}
                sprites={pokemon.img}
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

export default React.memo(Home);
