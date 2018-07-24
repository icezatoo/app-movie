import React, { Fragment } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import CardList from './CardList';
import HeaderTitle from '../../headertitle/Headertitle';

const PeopleList = styled.ol`
  list-style-type: none;
  list-style-position: inside;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const randerListCard = (credit, pathimg) => {
  const listcredit = credit.filter((val, index) => index < 12);
  return (
    <PeopleList>
      {listcredit.map(val => <CardList key={val.id} path={pathimg} credit={val} />)}
    </PeopleList>
  );
};

const RanderCardPeople = ({ credit, base_url, profile_sizes, configstyleheader }) => {
  const pathimg = base_url + profile_sizes[1];
  return (
    <Fragment>
      <Grid item xs={12}>
        <HeaderTitle configstyleheader={configstyleheader}>Top Billed Cast</HeaderTitle>
      </Grid>
      <Grid item xs={10}>
        {randerListCard(credit, pathimg)}
        <hr />
      </Grid>
    </Fragment>
  );
};

export default RanderCardPeople;
