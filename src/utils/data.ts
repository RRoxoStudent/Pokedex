//Pedir GPT PARA GERAR LISTA ESTATICA ARRAY
import { Pokemon } from "../types/pokemon";

export const staticPokemonList: Pokemon[] = [
  {
    id: 1,
    name: "bulbasaur",
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    types: [
      {
        type: {
          name: "grass",
        },
      },
      {
        type: {
          name: "poison",
        },
      },
    ],
  },
  {
    id: 4,
    name: "charmander",
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    types: [
      {
        type: {
          name: "fire",
        },
      },
    ],
  },
  {
    id: 7,
    name: "squirtle",
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    types: [
      {
        type: {
          name: "water",
        },
      },
    ],
  },
];

