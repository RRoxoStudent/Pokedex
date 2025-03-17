import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


interface PokeCardProps{
  id: number;
  name: string;
  sprites: string;

}


const PokemonCard = ({ id, name, sprites } : PokeCardProps) => {
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
        
        <Button size="small">Add to Favorites</Button>
      </CardActions>
    </Card>
  );
}

export default React.memo(PokemonCard);