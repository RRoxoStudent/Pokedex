import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: number[] = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<number>) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      return state.filter((id) => id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
