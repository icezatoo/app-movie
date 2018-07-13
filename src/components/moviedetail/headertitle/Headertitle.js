import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.h1`
  font-size: ${props => props.size}em;
  line-height: ${props => props.height}em;
  font-weight: ${props => props.weight};
`;

const HeaderTitle = ({ children, size, weight, height }) => (
  <HeaderStyle size={size} height={height} weight={weight}>
    {children}
  </HeaderStyle>
);

export default HeaderTitle;
