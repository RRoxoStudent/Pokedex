import React, { useMemo, useState } from 'react';
import { Grid, Container, Typography, Button } from '@mui/material';
import PokemonCard from '../components/PokeCard';
import Navbar from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import {
  addFavorite,
  favoritePokemon,
  removeFavorite,
} from '../store/favoritesSlice';
import ErrorAlert from '../components/ErrorAlert';
import { useFetchPaginatedPokemons } from '../hooks/useFetchPaginatedPokemons';

const Home = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [showFavorites, setShowFavorites] = useState(false);

  const { pokemons, loading, error, currentPage, setCurrentPage, totalPages } =
    useFetchPaginatedPokemons();

  const favorites = useSelector((state: RootState) => state.favorites);
  const dispatch = useDispatch();

  const toggleFavorite = (pokemonFav: favoritePokemon) => {
    if (favorites.find((fav) => fav.id === pokemonFav.id)) {
      dispatch(removeFavorite(pokemonFav.id));
    } else {
      dispatch(addFavorite(pokemonFav));
    }
  };

  const filteredPokemon = useMemo(() => {
    let result = pokemons.filter((pokemon) =>
      pokemon.nome.toLowerCase().includes(searchValue.toLowerCase().trim())
    );

    if (showFavorites) {
      result = result.filter((pokemon) =>
        favorites.find((fav) => fav.id === pokemon.id)
      );
    }

    return result;
  }, [pokemons, searchValue, showFavorites, favorites]);

  return (
    <div>
      <Navbar
        onSearch={setSearchValue}
        showFavorites={showFavorites}
        onToggleShowFavorites={() => setShowFavorites((prev) => !prev)}
      />

      <Container>
        {loading && <Typography variant="h6">Loading Pokémons...</Typography>}

        {error && (
          <ErrorAlert
            title="Error!"
            message="An unknown error occurred! Please try again later."
          />
        )}

        {!loading && !error && filteredPokemon.length === 0 && (
          <Typography variant="h6" align="center">
            Nenhum Pokémon encontrado!
          </Typography>
        )}

        <Grid container spacing={5} justifyContent="center">
          {filteredPokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.nome}
              sprites={pokemon.img}
              isFavorite={
                favorites.find((fav) => fav.id === pokemon.id) !== undefined
              }
              onToggleFavorites={() =>
                toggleFavorite({ id: pokemon.id, nome: pokemon.nome })
              }
            />
          ))}
        </Grid>

        {/* Paginação */}
        {!showFavorites && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '30px',
            }}
          >
            <Button
              variant="contained"
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 1}
            >
              Anterior
            </Button>
            <Typography variant="h6" style={{ margin: '0 20px' }}>
              Página {currentPage} de {totalPages}
            </Typography>
            <Button
              variant="contained"
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage === totalPages}
            >
              Próxima
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default React.memo(Home);
