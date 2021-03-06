// @ts-nocheck
import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import GridContainer from '../../../common/components/grid/girdcontainer';
import RanderCardPeople from './components/RanderCardPeople';
import Randermedia from './components/Randermedia';

class Wappedbody extends PureComponent {
  render() {
    const configstyleheader = {
      size: 1.3,
      height: 2.0,
      weight: 600,
      color: 'black',
      float: 'left',
    };
    const { dataapi } = this.props;
    const { moviedetail, images } = dataapi;
    return (
      <GridContainer spacing={16} alignItems="center" justify="center">
        <Grid item xs={8}>
          <GridContainer spacing={8} alignItems="center" justify="center">
            <RanderCardPeople configstyleheader={configstyleheader} {...moviedetail} {...images} />
            <Randermedia configstyleheader={configstyleheader} {...moviedetail} />
          </GridContainer>
        </Grid>
      </GridContainer>
    );
  }
}

export default Wappedbody;
