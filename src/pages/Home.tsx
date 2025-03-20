import { useState, useMemo, useCallback } from 'react';
import { Grid, Container, Button } from '@mui/material';
import { staticPokemonList } from '../utils/data'; // Lista estática dos Pokémon
import PokemonCard from '../components/PokeCard';
import Navbar from '../components/Navbar';
import { stringify } from 'querystring';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { addFavorite, removeFavorite } from '../store/favoritesSlice';

const Home = () => {
  // Estado para a pesquisa
  const [searchValue, setSearchValue] = useState<string>('');

  // Estado local para alternar entre todos e favoritos
  const [showFavorites, setShowFavorites] = useState(false);

  // Aceder aos favoritos do Redux
  const favorites = useSelector((state: RootState) => state.favorites);

  // Dispatch para chamar ações do Redux
  const dispatch = useDispatch();

  // Filtra os Pokémon com base na pesquisa e no estado de favoritos
  const filteredPokemon = useMemo(() => {
    const searchFiltered = staticPokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchValue.toLowerCase().trim())
    );

    if (showFavorites) {
      return searchFiltered.filter((pokemon) => favorites.includes(pokemon.id));
    }

    return searchFiltered;
  }, [searchValue, favorites, showFavorites]);

  // Função de pesquisa vinda do Navbar
  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  // Função para alternar favoritos no Redux
  const toggleFavorite = useCallback(
    (id: number) => {
      if (favorites.includes(id)) {
        dispatch(removeFavorite(id));
      } else {
        dispatch(addFavorite(id));
      }
    },
    [favorites, dispatch]
  );

  return (
    <div>
      {/* Navbar com campo de pesquisa */}
      <Navbar onSearch={handleSearch} />

      <Container>
        {/* Botão para alternar entre todos e favoritos */}
        <Button
          variant={showFavorites ? 'contained' : 'outlined'}
          onClick={() => setShowFavorites((prev) => !prev)}
          sx={{ marginY: 2 }}
        >
          {showFavorites ? 'Mostrar Todos' : 'Mostrar Favoritos'}
        </Button>

        {/* Grid de cards dos Pokémon */}
        <Grid container spacing={4}>
          {filteredPokemon.length > 0 ? (
            filteredPokemon.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                sprites={pokemon.sprites.front_default}
                isFavorite={favorites.includes(pokemon.id)} // Pega a flag direto do Redux
                onToggleFavorites={() => toggleFavorite(pokemon.id)} // Alterna no Redux
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
