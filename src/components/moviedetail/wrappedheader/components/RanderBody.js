import React, { Fragment } from 'react';
import { RenderHeaderTitle, RenderOverview, RenderGenres } from './index';

import Randergroup from './Randergroup';

const RanderBody = props => {
  const { moviedetail } = props;
  return (
    <Fragment>
      <RenderHeaderTitle {...moviedetail} />
      <Randergroup moviedetail={moviedetail} />
      <RenderOverview {...moviedetail} />
      <RenderGenres {...moviedetail} />
    </Fragment>
  );
};

export default RanderBody;
