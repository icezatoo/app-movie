import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { dataviewmovie } from '../../../common/config/listdataview';
import { stylesmaterial } from '../../../common/config/stylematerial';
import GridContainer from '../../../common/components/grid/girdcontainer';
import CircularLoader from '../../../common/components/loader/CircularLoader';
import MovielistItem from '../movielistitem/MovielistItem';

class RanderViewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props.classes,
      viewdata: [...dataviewmovie],
    };
  }

  render() {
    const { classes, viewdata } = this.state;
    const { dataconfigapi } = this.props;
    return (
      <GridContainer spacing={24} classes={classes.root}>
        {viewdata.map(valueview => (
          <Grid item xs={12} key={valueview.id}>
            <Paper className={classes.paper}>
              {dataconfigapi ? (
                <MovielistItem viewdata={valueview} configuration={dataconfigapi} />
              ) : (
                <CircularLoader />
              )}
            </Paper>
          </Grid>
        ))}
      </GridContainer>
    );
  }
}

export default withStyles(stylesmaterial)(RanderViewMovie);
