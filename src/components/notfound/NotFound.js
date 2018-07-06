import React from 'react';
import styled from 'styled-components';
import PageNotFound from '../../assets/images/404.jpg';

const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

const NotFound = props => (
  <NotFoundContainer>
    <img src={PageNotFound} alt="404" />
  </NotFoundContainer>
);

export default NotFound;
