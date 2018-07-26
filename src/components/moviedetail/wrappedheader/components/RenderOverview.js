import React, { Fragment } from 'react';
import styled from 'styled-components';
import { compose } from 'recompose';
import HeaderTitle from '../../headertitle/Headertitle';
import RowList from '../../../../hoc/Rowlist';
import Listview from '../../../../hoc/Listview';

const TextOverview = styled.p`
  white-space: 'normal';
  width: 750px;
  font-size: 1.2em;
`;

const RenderOverview = ({ overview }) => {
  const configstyleheader = { size: 1.3, height: 2.0, weight: 600 };
  return (
    <Fragment>
      <HeaderTitle configstyleheader={configstyleheader}>Overview</HeaderTitle>
      <TextOverview>{overview}</TextOverview>
    </Fragment>
  );
};

export default compose(
  Listview,
  RowList
)(RenderOverview);
