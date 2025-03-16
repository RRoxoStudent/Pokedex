import axios from 'axios';
import { Pokemon, PokemonListItem } from "../types/pokemon";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0.";

export const getPokemonList = async (limit = 1000, offset = 0): Promise<PokemonListItem[]> => {
    const response = await axios.get(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`);
    return response.data.results; //para já so retorna nome e url de cada pokemon
};

export const getPokemonDetails = async (name: string): Promise<Pokemon> => {
    const response = await axios.get(`${API_URL}/pokemon/${name}`);
    return response.data;
};


