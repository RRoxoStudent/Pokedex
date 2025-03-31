import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Usa o localStorage para persistência

import { combineReducers } from 'redux';

// Combina os reducers(podemos adicionar mais no futuro)
const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

//Configuração do persist
const persistConfig = {
  key: 'root', // Chave usada no localStorage
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Cria a store com persistência
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Necessário para Redux Persist
    }),
});

// Criar o persistor
export const persistor = persistStore(store);

//Tipos do redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
