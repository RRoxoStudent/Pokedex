import { Pokemon } from '../types/pokemon'; // ou o caminho correto para o tipo que definiste

export const staticPokemonList: Pokemon[] = [
  {
    id: 1,
    name: 'bulbasaur',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    },
    types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
  },
  {
    id: 4,
    name: 'charmander',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    },
    types: [{ type: { name: 'fire' } }],
  },
  {
    id: 7,
    name: 'squirtle',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    },
    types: [{ type: { name: 'water' } }],
  },
  {
    id: 10,
    name: 'caterpie',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
    },
    types: [{ type: { name: 'bug' } }],
  },
  {
    id: 25,
    name: 'pikachu',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    },
    types: [{ type: { name: 'electric' } }],
  },
  {
    id: 39,
    name: 'jigglypuff',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
    },
    types: [{ type: { name: 'normal' } }, { type: { name: 'fairy' } }],
  },
  {
    id: 52,
    name: 'meowth',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
    },
    types: [{ type: { name: 'normal' } }],
  },
  {
    id: 54,
    name: 'psyduck',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png',
    },
    types: [{ type: { name: 'water' } }],
  },
  {
    id: 63,
    name: 'abra',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png',
    },
    types: [{ type: { name: 'psychic' } }],
  },
  {
    id: 66,
    name: 'machop',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png',
    },
    types: [{ type: { name: 'fighting' } }],
  },
  {
    id: 74,
    name: 'geodude',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png',
    },
    types: [{ type: { name: 'rock' } }, { type: { name: 'ground' } }],
  },
  {
    id: 92,
    name: 'gastly',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png',
    },
    types: [{ type: { name: 'ghost' } }, { type: { name: 'poison' } }],
  },
  {
    id: 95,
    name: 'onix',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png',
    },
    types: [{ type: { name: 'rock' } }, { type: { name: 'ground' } }],
  },
  {
    id: 116,
    name: 'horsea',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png',
    },
    types: [{ type: { name: 'water' } }],
  },
  {
    id: 120,
    name: 'staryu',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png',
    },
    types: [{ type: { name: 'water' } }],
  },
  {
    id: 129,
    name: 'magikarp',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png',
    },
    types: [{ type: { name: 'water' } }],
  },
  {
    id: 133,
    name: 'eevee',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
    },
    types: [{ type: { name: 'normal' } }],
  },
  {
    id: 147,
    name: 'dratini',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png',
    },
    types: [{ type: { name: 'dragon' } }],
  },
  {
    id: 150,
    name: 'mewtwo',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
    },
    types: [{ type: { name: 'psychic' } }],
  },
  {
    id: 151,
    name: 'mew',
    sprites: {
      front_default:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png',
    },
    types: [{ type: { name: 'psychic' } }],
  },
];
