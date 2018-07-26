import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Circlebackground = styled.circle`
  fill: none;
  stroke: #eee;
  stroke-width: ${props => props.strokecirclebg};
`;

const Circle = styled.circle`
  fill: none;
  stroke-width: ${props => props.strokecircle};
  stroke-linecap: round;
  stroke: ${props => props.colors};
  animation: progress 1s ease-out forwards;
`;

const Percentage = styled.text`
  fill: #fffdfd;
  font-size: 2em;
  text-anchor: middle;
  font-family: 'Teko', sans-serif;
  font-weight: bold;
`;

const Percentagecircle = ({ radius, value = 1, children, settingsstyle }) => {
  const { strokecircle = 8.8, strokecirclebg = 10.8, colors = 'orange' } = settingsstyle;
  const pct = (1 - value) * Math.PI * 100;

  return (
    <svg
      width={radius * 2}
      height={radius * 2}
      viewBox="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circlebackground r="40" cx="50" cy="50" fill="transparent" strokecirclebg={strokecirclebg} />
      <Circle
        r="40"
        cx="50"
        cy="50"
        fill="transparent"
        strokecircle={strokecircle}
        strokeDasharray={Math.PI * 90}
        strokeDashoffset={pct}
        colors={colors}
      />
      <Percentage x="50" y="55">
        {children}
      </Percentage>
    </svg>
  );
};

Percentagecircle.propTypes = {
  radius: PropTypes.number.isRequired,
  settingsstyle: PropTypes.object.isRequired,
};

export default Percentagecircle;
