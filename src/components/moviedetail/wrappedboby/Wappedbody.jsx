// @ts-nocheck
import React, { Component, Fragment } from 'react';
import GridContainer from '../../../common/components/grid/girdcontainer';
import Grid from '@material-ui/core/Grid';
import HeaderTitle from '../headertitle/Headertitle';
import RanderCardPeople from './components/RanderCardPeople';
import Randermedialist from './components/Randermedialist';
import Menulistmadia from '../../../containers/moviedetail/Menulistmadia';

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
              <Grid item xs={12}>
                <HeaderTitle configstyleheader={configstyleheader}>
                  Top Billed Cast
                </HeaderTitle>
              </Grid>
              <RanderCardPeople
                configstyleheader={configstyleheader}
                {...moviedetail}
                {...images}
              />
            </Fragment>
            <Fragment>
              <Grid item xs={3}>
                <HeaderTitle configstyleheader={configstyleheader}>
                  Media
                </HeaderTitle>
              </Grid>
              <Menulistmadia />
              {/* <Randermedialist /> */}
            </Fragment>
          </GridContainer>
        </Grid>
      </GridContainer>
    );
  }
}

export default Wappedbody;
