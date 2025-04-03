import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Icon from '@mdi/react';
import { mdiHeartOutline, mdiHeart } from '@mdi/js';
import { Link } from 'react-router-dom';
import './PokeCardStyles.css';

interface PokeCardProps {
  id: number;
  name: string;
  sprites: string;
  isFavorite: boolean;
  onToggleFavorites: () => void;
}

const PokemonCard: React.FC<PokeCardProps> = ({
  id,
  name,
  sprites,
  isFavorite,
  onToggleFavorites,
}) => {
  return (
    <Card className="card-container" sx={{ maxWidth: 345, maxHeight: 550 }}>
      <CardMedia
        component="img"
        sx={{ height: 300 }}
        image={sprites}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ID: {id}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onToggleFavorites} size="small">
          <Icon path={isFavorite ? mdiHeart : mdiHeartOutline} size={1} />
        </Button>
        <Button
          className="detail-button"
          size="small"
          component={Link}
          to={`/pokemon/${id}`}
          color="primary"
        >
          Pokémon Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default React.memo(PokemonCard);
