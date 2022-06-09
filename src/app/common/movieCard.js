import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const MovieCard = (props) => {
  const { movie, key, movieClick } = props;
  const handleCardClick = () => {
    movieClick(movie);
  };

  return (
    <Card sx={{ maxWidth: 360, maxHeight: 240 }}>
      <CardActionArea onClick={handleCardClick}>
        <CardMedia
          component="img"
          height="140"
          image={
            movie.imageUrl
              ? movie.imageUrl
              : "http://www.onlylondon.properties/application/modules/themes/views/default/assets/images/image-placeholder.png"
          }
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
