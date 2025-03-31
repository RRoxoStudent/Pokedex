import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import {
  Container,
  Typography,
  CircularProgress,
  Card,
  Grid,
  Chip,
  Box,
  Button,
} from '@mui/material';
import Navbar from 'src/components/Navbar';
import { PokemonDetailsResponse } from 'src/types/pokemonDetails';
import { useFetchPokemonDetails } from '../hooks/useFetshPokemonDetails';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const PokemonDetails = () => {
  const { id } = useParams(); // Obtém o ID do Pokémon da URL
  const navigate = useNavigate(); // Hook para navegação

  //Detalhes do Pokémon usando  o hook SWR
  const { pokemon, loading, error } = useFetchPokemonDetails(id);

  if (error)
    return (
      <Typography color="error">Failed to load Pokémon details.</Typography>
    );
  if (!pokemon) return <CircularProgress />;

  return (
    <Container>
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
              <Chip label={typeInfo.type.name.toUpperCase()} color="primary" />
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

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={() => navigate('/')}
      >
        Voltar para Home
      </Button>
    </Container>
  );
};

export default PokemonDetails;
