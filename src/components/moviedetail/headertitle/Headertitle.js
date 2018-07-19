import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.h1`
  font-size: ${props => props.size}em;
  line-height: ${props => props.height}em;
  font-weight: ${props => props.weight};
  float: ${props => props.float};
  color: ${props => props.color};
`;

const HeaderTitle = ({
  children,
  size,
  weight,
  height,
  float = 'none',
  color
}) => (
  <HeaderStyle
    size={size}
    height={height}
    weight={weight}
    float={float}
    color={color}
  >
    {children}
  </HeaderStyle>
);

export default HeaderTitle;
