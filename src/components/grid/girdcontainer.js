import React from 'react';
import Grid from '@material-ui/core/Grid';
const GridContainer = props => (
  <Grid
    container
    className={props.classes}
    spacing={props.spacing}
    justify={props.justify}
  >
    {props.children}
  </Grid>
);

export default GridContainer;
