import React, { Component } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  padding-top: 100px;
`;

class Searchmain extends Component {
  render() {
    return (
      <SearchContainer>
        <p>testsearch</p>
      </SearchContainer>
    );
  }
}

export default Searchmain;
