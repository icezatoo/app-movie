import React, { Fragment } from 'react';
import { compose } from 'recompose';
import HeaderTitle from '../../headertitle/Headertitle';
import RowList from '../../../../hoc/Rowlist';
import Listview from '../../../../hoc/Listview';

const RenderGenres = ({ genres }) => {
  const configstyleheader = { size: 1.3, height: 2.0, weight: 600 };
  return (
    <Fragment>
      <HeaderTitle configstyleheader={configstyleheader}>Genres</HeaderTitle>
      <div className="tags">
        {genres &&
          genres.map(val => (
            <span className="tag" key={val.id}>
              {val.name}
            </span>
          ))}
      </div>
    </Fragment>
  );
};

export default compose(
  Listview,
  RowList
)(RenderGenres);
