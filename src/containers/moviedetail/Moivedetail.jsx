import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import GridContainer from '../../components/grid/girdcontainer';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import img from '../../assets/images/pun.jpg';
const MovieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  padding-top: 60px;
`;

const MovieImages = styled.div`
  background-image: url(${img});
  width: auto;
  height: 250px;
`;

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

class Moivedetail extends Component {
  constructor(props) {
    super(props);
    console.log(props.match);
  }
  render() {
    const { classes } = this.props;
    return (
      <MovieContainer>
        <GridContainer spacing={16} classes={classes.root}>
          <Grid item xs={12}>
            <div>
              <MovieImages />
              {/* <p>testhead</p> */}
            </div>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={16}>
              <Grid item xs>
                <Paper className={classes.paper}>
                  <div>
                    <div>
                      <img src={img} width="450" height="250" alt="" />
                    </div>
                    <div>
                      <p>vote : 7.7</p>
                      <p>vote count : 2000</p>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={8}>
                <Paper className={classes.paper}>
                  <div>
                    <p>test</p>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </GridContainer>
      </MovieContainer>
    );
  }
}

Moivedetail.propTypes = {};

export default withStyles(styles)(Moivedetail);
