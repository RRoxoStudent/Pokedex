import { useParams, useNavigate } from 'react-router-dom';
import { mdiHeartOutline } from '@mdi/js';
import { mdiHeart } from '@mdi/js';
import Icon from '@mdi/react';
import { mdiHomeCircle } from '@mdi/js';
import {
  Container,
  Typography,
  CircularProgress,
  Card,
  Grid,
  Chip,
  Box,
  Button,
  Grid2,
  SvgIcon,
} from '@mui/material';

import { useFetchPokemonDetails } from '../hooks/useFetshPokemonDetails';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addFavorite, removeFavorite } from '../store/favoritesSlice';
import Navbar from '../components/Navbar';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const PokemonDetails = () => {
  const { id } = useParams(); // Obtém o ID do Pokémon da URL
  const navigate = useNavigate(); // Hook para navegação
  const dispatch = useDispatch(); // Redux dispatcher

  //Detalhes do Pokémon usando  o hook SWR
  const { pokemon, loading, error } = useFetchPokemonDetails(id);

  // Obtém a lista de favoritos do Redux
  const favorites = useSelector((state: RootState) => state.favorites);

  // Verifica se o Pokémon atual está nos favoritos
  const isFavorite = id ? favorites.includes(Number(id)) : false;

  // Alternar entre adicionar/remover favorito
  const toggleFavorite = () => {
    if (!id) return;
    const pokemonId = Number(id);
    if (isFavorite) {
      dispatch(removeFavorite(pokemonId));
    } else {
      dispatch(addFavorite(pokemonId));
    }
  };

  if (error)
    return (
      <Typography color="error">Failed to load Pokémon details.</Typography>
    );
  if (!pokemon) return <CircularProgress />;

  return (
    <div>
      {/* Navbar com botão para Home */}
      <Navbar
        showFavorites={false}
        onSearch={() => console.log('Search triggered')}
        onToggleShowFavorites={() => console.log('Toggle favorites triggered')}
      />
      <Container>
        {/* Botões de Ação */}
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
          <Grid item>
            <Button
              variant="contained"
              color={isFavorite ? 'secondary' : 'primary'}
              onClick={toggleFavorite}
            >
              {isFavorite ? (
                <SvgIcon>
                  <path d={mdiHeart} />
                </SvgIcon>
              ) : (
                <SvgIcon>
                  <path d={mdiHeartOutline} />
                </SvgIcon>
              )}
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/')}
            >
              <Icon path={mdiHomeCircle} size={1} />
              Home
            </Button>
          </Grid>
        </Grid>
        <Typography variant="h3" align="center">
          {pokemon.name.toUpperCase()}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            style={{ width: '300px', height: 'auto' }}
          />
        </Box>
        <Card sx={{ mt: 3, p: 2 }}>
          <Typography variant="h6">ID: {pokemon.id}</Typography>
          <Typography variant="h6">Height: {pokemon.height}</Typography>
          <Typography variant="h6">Weight: {pokemon.weight}</Typography>
        </Card>
        {/* Tipos do Pokémon */}
        <Card sx={{ mt: 3, p: 2 }}>
          <Typography variant="h5">Types</Typography>
          <Grid container spacing={1} justifyContent="center">
            {pokemon.types.map((typeInfo) => (
              <Grid item key={typeInfo.type.name}>
                <Chip
                  label={typeInfo.type.name.toUpperCase()}
                  color="primary"
                />
              </Grid>
            ))}
          </Grid>
        </Card>

        {/* Habilidades */}
        <Card sx={{ mt: 3, p: 2 }}>
          <Typography variant="h5">Skills</Typography>
          <Grid container spacing={1} justifyContent="center">
            {pokemon.abilities.map((abilityInfo) => (
              <Grid item key={abilityInfo.ability.name}>
                <Chip
                  label={abilityInfo.ability.name.toUpperCase()}
                  color="secondary"
                />
              </Grid>
            ))}
          </Grid>
        </Card>

        {/* Estatísticas */}
        <Card sx={{ mt: 3, p: 2 }}>
          <Typography variant="h5">Statistics</Typography>
          <Grid container spacing={2} justifyContent="center">
            {pokemon.stats.map((statInfo) => (
              <Grid item xs={6} sm={4} md={3} key={statInfo.stat.name}>
                <Typography variant="body1">
                  {statInfo.stat.name.toUpperCase()}:{' '}
                  <strong>{statInfo.base_stat}</strong>
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Card>

        {/* Movimentos principais */}
        <Card sx={{ mt: 3, p: 2 }}>
          <Typography variant="h5">Main Movements</Typography>
          <Grid container spacing={1} justifyContent="center">
            {pokemon.moves.slice(0, 6).map((moveInfo) => (
              <Grid item key={moveInfo.move.name}>
                <Chip label={moveInfo.move.name.toUpperCase()} />
              </Grid>
            ))}
          </Grid>
        </Card>
      </Container>
    </div>
  );
};

export default PokemonDetails;
