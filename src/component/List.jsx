import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Typography, Card, CardMedia, CardContent,Grid  } from '@mui/material';
import useStyles from './styles'; // Update the import path as necessary
import PlaceDetails from './PlaceDetails'; // Update the path as necessary

const List = ({ places, childClicked, isLoading }) => {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    // Create refs for all the items in the list
    setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);

  return (
    <div className={classes.listContainer}>
      <Typography variant="h5" gutterBottom>Food & Dining around you</Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        places.map((place, i) => (
          <Card ref={elRefs[i]} className={classes.listItem} key={i}>
            <PlaceDetails
                  place={place}
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                />
          </Card>
        ))
      )}
    </div>
  );
};

export default List;