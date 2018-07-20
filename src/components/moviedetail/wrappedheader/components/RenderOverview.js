import React, { Fragment } from 'react';
import HeaderTitle from '../../headertitle/Headertitle';
import Typography from '@material-ui/core/Typography';

const RenderOverview = ({ overview }) => {
  const configstyleheader = { size: 1.3, height: 2.0, weight: 600 };
  return (
    <Fragment>
      <HeaderTitle configstyleheader={configstyleheader}>Overview</HeaderTitle>
      <Typography style={{ color: 'white' }}>{overview}</Typography>
    </Fragment>
  );
};

export default RenderOverview;
