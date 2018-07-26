import React, { Fragment } from 'react';
import styled from 'styled-components';
import Percentagecircle from '../../../../common/components/percentagecircle/Percentagecircle';
import RowViewInner from '../../../../hoc/Rowview';

const PercentageText = styled.div`
  font-weight: 700;
  margin-left: 7px;
`;

const RenderPercentagecircle = ({ vote_average }) => {
  const percentage = Math.ceil((vote_average / 10) * 100);
  const color = `#${Math.random()
    .toString(16)
    .substr(2, 6)}`;
  const stylepercentage = {
    strokecircle: 6.8,
    strokecirclebg: 10.8,
    colors: color,
  };
  return (
    <Fragment>
      <Percentagecircle radius={40} value={percentage / 100} settingsstyle={stylepercentage}>
        {percentage}%
      </Percentagecircle>
      <PercentageText>
        <p>UserScore</p>
      </PercentageText>
    </Fragment>
  );
};

export default RowViewInner(RenderPercentagecircle);
