// @ts-nocheck
import React, { Component, Fragment } from 'react';
import GridContainer from '../../../common/components/grid/girdcontainer';
import Grid from '@material-ui/core/Grid';
import RanderCardPeople from './components/RanderCardPeople';
import Moviemedia from '../../../containers/moviemedia/Moviemedia';

class Wappedbody extends Component {
  render() {
    const configstyleheader = {
      size: 1.3,
      height: 2.0,
      weight: 600,
      color: 'black',
      float: 'left'
    };
    const { moviedetail, images } = this.props.dataapi;
    return (
      <GridContainer spacing={16} alignItems="center" justify="center">
        <Grid item xs={8}>
          <GridContainer spacing={8} alignItems="center" justify="center">
            <Fragment>
              <RanderCardPeople
                configstyleheader={configstyleheader}
                {...moviedetail}
                {...images}
              />
            </Fragment>
            <Fragment>
              <Moviemedia configstyleheader={configstyleheader}    {...moviedetail} />
            </Fragment>
          </GridContainer>
        </Grid>
      </GridContainer>
    );
  }
}

export default Wappedbody;
