// @ts-nocheck
import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import GridContainer from '../../../common/components/grid/girdcontainer';
import WappedHeader from '../wrappedheader/WappedHeader';
import Wappedbody from '../wrappedboby/Wappedbody';

class RenderMoviedetail extends PureComponent {
  render() {
    const { classes, dataapi } = this.props;
    return (
      <GridContainer spacing={16} classes={classes.root}>
        <Grid item xs={12}>
          <WappedHeader classes={classes} dataapi={dataapi} />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs>
              <Paper className={classes.paper}>
                <Wappedbody classes={classes} dataapi={dataapi} />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </GridContainer>
    );
  }
}

export default RenderMoviedetail;
