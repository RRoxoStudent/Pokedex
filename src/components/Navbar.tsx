import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

interface SearchAppBarProps {
  onSearch: (searchValue: string) => void;
}


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
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

export default function SearchAppBar({onSearch}: SearchAppBarProps) {

const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  onSearch(event.target.value); 
};

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          
          {/* Ícones e Logo */}
          <Box component="img" src="src\assets\pokebola.png" height="3em" alt="Pokeball" />
          <Box component="img" src="src\assets\International-Pokemon-logo.png" height="8em" alt="PokémonLog" />

          {/* Campo de pesquisa */}
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: "5px",
                padding: "2px 8px",
                width: "250px",
              }}
            >
          <SearchIcon sx={{ color: "gray", marginRight: "8px" }} />
              <InputBase
                placeholder="Search..."
                sx={{ flex: 1 }}
                inputProps={{ "aria-label": "search" }}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}