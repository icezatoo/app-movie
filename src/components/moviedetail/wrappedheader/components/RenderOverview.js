import React from 'react';
import HeaderTitle from '../../headertitle/Headertitle';
import Typography from '@material-ui/core/Typography';

const RenderOverview = ({ overview }) => (
  <div>
    <HeaderTitle size="1.3" height="2.0" weight="600">
      Overview
    </HeaderTitle>
    <Typography style={{ color: 'white' }}>{overview}</Typography>
  </div>
);

export default RenderOverview;
