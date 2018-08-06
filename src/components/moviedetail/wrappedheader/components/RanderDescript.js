import React, { Fragment } from 'react';
import { compose } from 'recompose';
import HeaderTitle from '../../headertitle/Headertitle';
import RowViewInner from '../../../../hoc/Rowview';
import styled from 'styled-components';

const Textdescript = styled.span`
  margin-right: 10px;
  margin-left: 10px;
  color: #00fc87;
  font-size: 1.6em;
  line-height: 1.1em;
`;

const ConvertNumberFormat = value =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);

const RenderDescript = ({ revenue, release_date, runtime }) => {
  const configstyleheader = { size: 1.3, height: 2.0, weight: 600 };
  return (
    <Fragment>
      <HeaderTitle configstyleheader={configstyleheader}>
        Box Office:
      </HeaderTitle>
      <Textdescript>{ConvertNumberFormat(revenue)}</Textdescript>
      <HeaderTitle configstyleheader={configstyleheader}>
        Running Time:
      </HeaderTitle>
      <Textdescript>{runtime} mins</Textdescript>
    </Fragment>
  );
};

export default compose(RowViewInner)(RenderDescript);
