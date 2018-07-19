import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import {
  RenderHeaderTitle,
  RenderOverview,
  RenderPercentagecircle,
  RenderPlayTrailer
} from './index';

const RanderBody = props => {
  const { moviedetail, classes } = props;
  return (
    <Fragment>
      <Grid item xs={12}>
        <RenderHeaderTitle {...moviedetail} />
      </Grid>
      <Grid item xs={3}>
        <RenderPercentagecircle {...moviedetail} />
      </Grid>
      <Grid item xs={8}>
        <RenderPlayTrailer {...classes} moviedetail={moviedetail} />
      </Grid>
      <Grid item xs={12}>
        <RenderOverview {...moviedetail} />
      </Grid>
    </Fragment>
  );
};

export default RanderBody;
