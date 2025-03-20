import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: number[] = JSON.parse(
  localStorage.getItem('favorites') || '[]'
);

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<number>) => {
      state.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(state));
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      const newState = state.filter((id) => id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
