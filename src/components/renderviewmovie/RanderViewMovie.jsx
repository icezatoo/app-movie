import React, { Component } from 'react';
import { dataviewmovie } from '../../common/mockup/listdataview';
import { api_Key } from '../../common/api/connect';
import { withStyles } from '@material-ui/core/styles';
import GridContainer from '../../components/grid/girdcontainer';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MovielistItem from '../movielistitem/MovielistItem';
import WithSubscriptionRPC from '../../rpc/WithSubscriptionRPC';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

class RanderViewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: this.props.classes,
      justify: 'center',
      viewdata: [...dataviewmovie]
    };
  }

  render() {
    const { classes } = this.state;
    const configuration = `/configuration?api_key=${api_Key}`;
    return (
      <GridContainer spacing={24} classes={classes.root}>
        <WithSubscriptionRPC
          url={configuration}
          render={configuration =>
            configuration.data &&
            this.state.viewdata.map(valueview => (
              <Grid item xs={12} key={valueview.id}>
                <Paper className={classes.paper}>
                  <MovielistItem
                    viewdata={valueview}
                    configuration={configuration}
                  />
                </Paper>
              </Grid>
            ))
          }
        />
      </GridContainer>
    );
  }
}

export default withStyles(styles)(RanderViewMovie);
