import React, { Fragment } from 'react';
import { RenderHeaderTitle, RenderOverview, RenderGenres } from './index';

import Randergroup from './Randergroup';
import Rendergroupdescript from './Rendergroupdescript';

const RanderBody = props => {
  const { moviedetail } = props;
  return (
    <Fragment>
      <RenderHeaderTitle {...moviedetail} />
      <Randergroup moviedetail={moviedetail} />
      <Rendergroupdescript moviedetail={moviedetail} />
      <RenderOverview {...moviedetail} />
      <RenderGenres {...moviedetail} />
    </Fragment>
  );
};

export default RanderBody;
