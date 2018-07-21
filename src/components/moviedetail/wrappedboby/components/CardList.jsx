import React, { Fragment } from 'react';
import ImageComponent from '../../../../common/components/images/ImageComponent';
import styled from 'styled-components';

const Card = styled.li`
  border: 1px solid #e3e3e3;
  padding-bottom: 10px;
  width: 140px;
  background-color: #fff;
  box-sizing: border-box;
  margin-right: 10px;
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

const CardimgItem = ({ images, profile_path, name }) => {
  const pathimg = images.base_url + images.profile_sizes[1] + profile_path;
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

const CardItem = ({ credit, images }) => (
  <Card>
    <CardimgItem {...credit} images={images} />
    <CardPeople {...credit} />
  </Card>
);

const CardList = ({ credit, images }) => {
  return (
    <Fragment>
      <CardItem credit={credit} images={images} />
    </Fragment>
  );
};

export default CardList;