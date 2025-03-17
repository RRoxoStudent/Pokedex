import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Icon from '@mdi/react';
import { mdiHeartOutline } from '@mdi/js'


interface PokeCardProps{
  id: number;
  name: string;
  sprites: string;
  isFavorite: boolean
  onToggleFavorites: () => void;

}


const PokemonCard = ({ id, name, sprites, isFavorite, onToggleFavorites } : PokeCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}        
        image={sprites}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>    
        <Typography variant="body2" color="text.secondary">
          ID: {id}
        </Typography>  
      </CardContent>
      <CardActions>
        
        <Button onClick={onToggleFavorite} size="small">Add to Favorites< Icon path={mdiHeartOutline} size={1} />{isFavorite ? 
        <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Button>
      </CardActions>
    </Card>
  );
}

export default React.memo(PokemonCard);