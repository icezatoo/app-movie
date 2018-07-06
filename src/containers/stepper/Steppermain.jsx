import React, { Component } from 'react';
import './steppermain.css';
import { withStyles } from '@material-ui/core/styles';
import GridContainer from '../../components/grid/girdcontainer';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { pathMovie, api_Key } from '../../common/api/connect';
import Renderview from '../renderview/Renderview';
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

class Steppermain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: this.props.classes,
      justify: 'center',
      viewdata: [
        {
          id: 1,
          header: 'NowPlaying',
          apipath: `${pathMovie}/movie/now_playing?api_key=${api_Key}&language=en-US&page=1`
        },
        {
          id: 2,
          header: 'Popular',
          apipath: `${pathMovie}/movie/popular?api_key=${api_Key}&language=en-US&page=1`
        },
        {
          id: 3,
          header: 'TopRated',
          apipath: `${pathMovie}/movie/top_rated?api_key=${api_Key}&language=en-US&page=1`
        },
        {
          id: 4,
          header: 'Upcoming',
          apipath: `${pathMovie}/movie/upcoming?api_key=${api_Key}&language=en-US&page=1`
        }
      ]
    };
  }

  render() {
    const { classes } = this.state;
    const configuration = `${pathMovie}/configuration?api_key=${api_Key}`;
    return (
      <GridContainer spacing={24} classes={classes.root}>
        <WithSubscriptionRPC
          url={configuration}
          render={configuration =>
            configuration.data &&
            this.state.viewdata.map(valueview => (
              <Grid item xs={12} key={valueview.id}>
                <Paper className={classes.paper}>
                  <Renderview
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

export default withStyles(styles)(Steppermain);
