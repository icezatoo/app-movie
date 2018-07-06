import React, { Component } from 'react';
import styled from 'styled-components';
import Steppermain from '../stepper/Steppermain';
// min-height: 100vh;
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
        <Steppermain />
      </HomeContainer>
    );
  }
}

export default Homemain;
