export interface PokemonListItem {
    name: string;
    url: string;
}

export interface Pokemon {
    id: number;
    name: string;
    isFavorite: boolean;
    onToggleFavorites: () => void;
    sprites: {
        front_default: string;
};
types: {
   type: {
     name: string;
   };
 }[];
}