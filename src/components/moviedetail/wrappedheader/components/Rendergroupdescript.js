import React, { Fragment } from 'react';
import Listview from '../../../../hoc/Listview';
import { RenderDescript } from './index';

const Rendergroupdescript = ({ moviedetail }) => (
  <Fragment>
    <RenderDescript {...moviedetail} />
  </Fragment>
);

export default Listview(Rendergroupdescript);
