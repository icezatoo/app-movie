import React from 'react';
import Grid from '@material-ui/core/Grid';
const GridContainer = ({ classes, spacing, justify, alignItems, children }) => (
  <Grid
    container
    className={classes}
    spacing={spacing}
    justify={justify}
    alignItems={alignItems}
  >
    {children}
  </Grid>
);

export default GridContainer;
