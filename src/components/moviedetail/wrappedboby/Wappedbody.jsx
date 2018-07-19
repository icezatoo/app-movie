// @ts-nocheck
import React, { Component } from 'react';
import GridContainer from '../../../common/components/grid/girdcontainer';
import Grid from '@material-ui/core/Grid';
import CardItem from './components/CardItem';
import HeaderTitle from '../headertitle/Headertitle';
import PropTypes from 'prop-types';

class Wappedbody extends Component {
  _randerListCard = (moviedetail, classes, images) => {
    const { credit } = moviedetail;
    const pathurl = images.base_url + images.profile_sizes[1];
    const listcredit = credit.filter((val, index) => index < 5);
    return listcredit.map(val => (
      <CardItem key={val.id} classes={classes} baseurl={pathurl} {...val} />
    ));
  };

  render() {
    const { classes } = this.props;
    const { moviedetail, images } = this.props.dataapi;
    return (
      <GridContainer spacing={16} alignItems="center" justify="center">
        <Grid item xs={8}>
          <GridContainer spacing={8} alignItems="center" justify="center">
            <Grid item xs={12}>
              <HeaderTitle
                size="2.3"
                height="2.0"
                weight="600"
                float="left"
                color="black"
              >
                Top Billed Cast
              </HeaderTitle>
            </Grid>
            <Grid item xs={12}>
              <GridContainer spacing={8} alignItems="center" justify="center">
                {this._randerListCard(moviedetail, classes, images)}
              </GridContainer>
            </Grid>
          </GridContainer>
        </Grid>

        <Grid item xs={12}>
          <p>test2</p>
        </Grid>
        <Grid item xs={12}>
          <p>test3</p>
        </Grid>
      </GridContainer>
    );
  }
}

Wappedbody.propTypes = {};

export default Wappedbody;
