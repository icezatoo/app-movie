import React from 'react';
import Percentagecircle from '../../../../common/components/percentagecircle/Percentagecircle';

const RenderPercentagecircle = ({ vote_average }) => {
  const percentage = Math.ceil((vote_average / 10) * 100);
  const color =
    '#' +
    Math.random()
      .toString(16)
      .substr(2, 6);
  const stylepercentage = {
    strokecircle: 8.8,
    strokecirclebg: 10.8,
    colors: color
  };
  return (
    <div>
      <Percentagecircle
        radius={30}
        value={percentage / 100}
        settingsstyle={stylepercentage}
      >
        {percentage}%
      </Percentagecircle>
      <p>UserScore</p>
    </div>
  );
};

export default RenderPercentagecircle;
