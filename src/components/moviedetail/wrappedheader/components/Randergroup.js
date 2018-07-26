import React, { Fragment } from 'react';
import Listview from '../../../../hoc/Listview';
import { RenderPlayTrailer, RenderPercentagecircle } from './index';

const Randergroup = ({ moviedetail }) => (
  <Fragment>
    <RenderPercentagecircle {...moviedetail} />
    <RenderPlayTrailer {...moviedetail} />
  </Fragment>
);

export default Listview(Randergroup);
