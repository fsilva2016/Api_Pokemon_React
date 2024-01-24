import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';


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

const Logo = styled('img')(({ theme }) => ({
  width: '10%',
  padding: '5px'

}))

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
  background: "#fff",
  'border-radius': 5,
  color: "#ef5350",
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '120ch'
    },
  },
}));


export default function Navbar() {
  return (

    <Box sx={{ marginBottom: "2em", }}>
      <AppBar position="static" sx={{ background: "#ef5350" }} >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Logo component="img" src="/assets/logo_Pokemon.png" />
          <Search>
            <SearchIconWrapper  >
              <SearchIcon sx={{ 'z-index': 1, color: "#ef5350" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar Pokemon"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}