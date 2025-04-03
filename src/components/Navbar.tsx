import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { SvgIcon } from '@mui/material';
import Icon from '@mdi/react';
import { mdiHomeCircle, mdiHeart } from '@mdi/js';

import pokeball from '../assets/pokebola.png'; // Importação correta da imagem
import pokemonLogo from '../assets/International-Pokemon-logo.png';
import './NavbarStyles.css';
interface NavbarProps {
  onSearch: (searchValue: string) => void;
  showFavorites: boolean;
  onToggleShowFavorites: () => void;
}

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Navbar = ({
  onSearch,
  showFavorites,
  onToggleShowFavorites,
}: Readonly<NavbarProps>) => {
  const navigate = useNavigate();
  const handleSearchChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onSearch(event.target.value);
    },
    [onSearch]
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="navbar"
        position="static"
        sx={{ backgroundColor: 'black' }}
      >
        <Toolbar sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Icons and Logo */}
          <Box
            component="img"
            src={pokeball}
            height="3em"
            alt="Pokeball"
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate('/')}
          />
          <Box
            component="img"
            src={pokemonLogo}
            height="8em"
            alt="Pokemon Logo"
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate('/')}
          />

          {/* Search Bar */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: '5px',
                padding: '2px 8px',
                width: '250px',
              }}
            >
              <SearchIcon sx={{ color: 'gray', marginRight: '8px' }} />
              <StyledInputBase
                placeholder="Search..."
                onChange={handleSearchChange}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Box>
          </Box>

          {/* Botão de favoritos */}
          <Button
            className="nav-button"
            variant="contained"
            color="primary"
            onClick={() => navigate('/favorites')}
          >
            <SvgIcon>
              <path d={mdiHeart} />
            </SvgIcon>
            Favorites
          </Button>
          {/* Botão para Home */}
          <Button
            className="nav-button"
            variant="contained"
            color="primary"
            onClick={() => navigate('/')}
          >
            <Icon path={mdiHomeCircle} size={1} /> Home
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default React.memo(Navbar);
