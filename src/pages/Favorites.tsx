import React from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { removeFavorite } from '../store/favoritesSlice';
import { useFetchPokemons } from '../hooks/useFetchPokemons';
import Navbar from '../components/Navbar';
import PokemonCard from '../components/PokeCard';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Obtém a lista de favoritos do Redux
  const favorites = useSelector((state: RootState) => state.favorites);

  // Buscar todos os Pokémon
  const { pokemons, loading, error } = useFetchPokemons(150, 0); // Busca 150 Pokémon por padrão

  // Filtra os Pokémon que estão nos favoritos
  const favoritePokemons = pokemons.filter((pokemon) =>
    favorites.includes(pokemon.id)
  );

  return (
    <div>
      {/* Navbar */}
      <Navbar
        showFavorites={false}
        onSearch={(query) => console.log(`Search query: ${query}`)}
        onToggleShowFavorites={() => console.log('Toggle favorites clicked')}
      />

      <Container sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h3">Meus Favoritos</Typography>

        {/* Se estiver a carregar */}
        {loading && <Typography variant="h6">Carregando Pokémon...</Typography>}

        {/* Se houver erro */}
        {error && (
          <Typography color="error">Erro ao carregar Pokémon.</Typography>
        )}

        {/* Se não houver favoritos */}
        {!loading && !error && favoritePokemons.length === 0 && (
          <Typography variant="h6" sx={{ mt: 3 }}>
            Nenhum Pokémon foi adicionado aos favoritos.
          </Typography>
        )}

        {/* Lista de Pokémon Favoritos */}
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 3 }}>
          {favoritePokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.nome}
              sprites={pokemon.img}
              isFavorite={true}
              onToggleFavorites={() => dispatch(removeFavorite(pokemon.id))}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Favorites;
