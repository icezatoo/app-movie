// @ts-nocheck
import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { compose, setPropTypes, pure } from 'recompose';
import ImageComponent from '../../../../common/components/images/ImageComponent';
import nophoto from '../../../../assets/images/nophoto.png';

const Card = styled.li`
  border: 1px solid #e3e3e3;
  padding-bottom: 10px;
  width: 140px;
  background-color: #fff;
  box-sizing: border-box;
  margin-right: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const CardHeader = styled.p`
  padding: 10px 10px 0 10px;
  font-weight: bold;
  color: #000;
`;

const Carddetail = styled.p`
  padding: 0 10px;
  color: #000;
  font-size: 0.9em;
`;

const Cardimg = styled.div`
  width: 138px;
  display: block;
`;

const CardimgItem = ({ path, profile_path, name }) => {
  const pathimg = profile_path ? path + profile_path : nophoto;
  return (
    <Cardimg>
      <ImageComponent src={pathimg} alt={name} />
    </Cardimg>
  );
};

const CardPeople = ({ name, character }) => (
  <Fragment>
    <CardHeader>{name}</CardHeader>
    <Carddetail>{character}</Carddetail>
  </Fragment>
);

const CardItem = ({ credit, path }) => (
  <Card>
    <CardimgItem {...credit} path={path} />
    <CardPeople {...credit} />
  </Card>
);

const CardList = ({ credit, path }) => (
  <Fragment>
    <CardItem credit={credit} path={path} />
  </Fragment>
);

const withPropTypes = setPropTypes({
  credit: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired
});

export default compose(
  pure,
  withPropTypes
)(CardList);
