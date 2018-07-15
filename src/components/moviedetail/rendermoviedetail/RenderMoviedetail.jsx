import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { stylesmaterial } from '../../../common/config/stylematerial';
import GridContainer from '../../../common/components/grid/girdcontainer';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import WappedHeader from '../wrappedheader/WappedHeader';

class RenderMoviedetail extends Component {
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
                <div>
                  <p>test</p>
                </div>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </GridContainer>
    );
  }
}

RenderMoviedetail.propTypes = {};

export default withStyles(stylesmaterial)(RenderMoviedetail);
