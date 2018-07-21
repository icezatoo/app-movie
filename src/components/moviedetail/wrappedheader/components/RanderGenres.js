import React, { Fragment } from 'react';
import HeaderTitle from '../../headertitle/Headertitle';

const RenderGenres = ({ genres }) => {
  const configstyleheader = { size: 1.3, height: 2.0, weight: 600 };
  const genresname =
    genres.length !== 0
      ? genres.map(val => val.name).join(' , ')
      : ' No Genres';
  return (
    <Fragment>
      <HeaderTitle configstyleheader={configstyleheader}>Genres</HeaderTitle>
      <Fragment>{genresname}</Fragment>
    </Fragment>
  );
};

export default RenderGenres;
