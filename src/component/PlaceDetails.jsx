import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import useStyles from './styles'; // Ensure the import path is correct

const PlaceDetails = ({ place }) => {
  const classes = useStyles();

  return (
    <div className={classes.placeItem}>
      <a href={place.website} target="_blank" rel="noopener noreferrer">
        <CardMedia
          className={classes.placeImage}
          image={place.photo ? place.photo.images.large.url : 'default-image.jpg'}
          title={place.name}
        />
      </a>
      <CardContent className={classes.placeContent}>
        <Typography variant="subtitle1">{place.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {place.rating && (
            <span>{`${place.rating} out of 5 stars`}</span>
          )}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {place.ranking && (
            <span>{`Ranking: ${place.ranking}`}</span>
          )}
        </Typography>
        {/* Other details here */}
      </CardContent>
    </div>
  );
};

export default PlaceDetails;