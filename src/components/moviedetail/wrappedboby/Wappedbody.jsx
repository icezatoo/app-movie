// @ts-nocheck
import React, { Component } from 'react';
import GridContainer from '../../../common/components/grid/girdcontainer';
import Grid from '@material-ui/core/Grid';
import CardList from './components/CardList';
import HeaderTitle from '../headertitle/Headertitle';
import styled from 'styled-components';
import MenuMedia from './components/MenuMedia';

const PeopleList = styled.ol`
  list-style-type: none;
  list-style-position: inside;
  margin: 0;
  padding: 0;
  display: flex;
`;

const MenuContainers = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  align-items: baseline;
`;

class Wappedbody extends Component {
  _randerListCard = (moviedetail, images) => {
    const { credit } = moviedetail;
    const listcredit = credit.filter((val, index) => index < 5);
    return (
      <PeopleList>
        {listcredit.map(val => (
          <CardList key={val.id} images={images} credit={val} />
        ))}
      </PeopleList>
    );
  };

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
            <Grid item xs={12}>
              <HeaderTitle configstyleheader={configstyleheader}>
                Top Billed Cast
              </HeaderTitle>
            </Grid>
            <Grid item xs={10}>
              {this._randerListCard(moviedetail, images)}
              <hr />
            </Grid>
            <Grid item xs={12}>
              <MenuContainers>
                <HeaderTitle configstyleheader={configstyleheader}>
                  Media
                </HeaderTitle>
                <MenuMedia />
              </MenuContainers>
            </Grid>
            <Grid item xs={10}>
              terst
              <hr />
            </Grid>
          </GridContainer>
        </Grid>
      </GridContainer>
    );
  }
}

export default Wappedbody;
