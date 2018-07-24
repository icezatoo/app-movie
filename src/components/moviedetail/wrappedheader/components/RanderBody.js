import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import {
  RenderHeaderTitle,
  RenderOverview,
  RenderPercentagecircle,
  RenderPlayTrailer,
  RenderGenres,
} from './index';

const RanderBody = props => {
  const { moviedetail } = props;
  return (
    <Fragment>
      <Grid item xs={12}>
        <RenderHeaderTitle {...moviedetail} />
      </Grid>
      <Grid item xs={3}>
        <RenderPercentagecircle {...moviedetail} />
      </Grid>
      <Grid item xs={8}>
        <RenderPlayTrailer {...moviedetail} />
      </Grid>
      <Grid item xs={12}>
        <RenderOverview {...moviedetail} />
      </Grid>
      <Grid item xs={12}>
        <RenderGenres {...moviedetail} />
      </Grid>
    </Fragment>
  );
};

export default RanderBody;
