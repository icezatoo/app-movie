import React, { Fragment } from 'react';
import Listview from '../../../../hoc/Listview';
import { RenderPlayTrailer, RenderPercentagecircle } from './index';
import styled from 'styled-components';
import HeaderTitle from '../../headertitle/Headertitle';

const Textdescript = styled.span`
  margin-right: 10px;
  margin-left: 10px;
  color: #00fc87;
  font-size: 1.6em;
  line-height: 1.1em;
`;

const configstyleheader = { size: 1.3, height: 2.0, weight: 600 };

const Randergroup = ({ moviedetail }) => (
  <Fragment>
    <RenderPercentagecircle {...moviedetail} />
    <RenderPlayTrailer {...moviedetail} />
    <HeaderTitle configstyleheader={configstyleheader}>
      Original Release:
    </HeaderTitle>
    <Textdescript>{moviedetail.release_date} </Textdescript>
  </Fragment>
);

export default Listview(Randergroup);
