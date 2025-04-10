import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface favoritePokemon {
  id: number;
  nome: string;
}

const initialState: favoritePokemon[] = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<favoritePokemon>) => {
      if (!state.find((fav) => fav.id === action.payload.id)) {
        state.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      return state.filter((fav) => fav.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
