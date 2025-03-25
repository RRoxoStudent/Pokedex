export interface PokemonListItem {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

export interface GetPokemonListResponse {
  count: number;
  next: string;
  previous: null | string;
  results: PokemonListItem[];
}
