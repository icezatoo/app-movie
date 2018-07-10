import React, { Component } from 'react';
import styled from 'styled-components';
import RanderViewMovie from '../../components/renderviewmovie/RanderViewMovie';
const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  padding-top: 100px;
`;

class Homemain extends Component {
  render() {
    return (
      <HomeContainer>
        <RanderViewMovie />
      </HomeContainer>
    );
  }
}

export default Homemain;
