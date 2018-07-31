import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Formsearch from '../formsearch/Formsearch';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  padding-top: 100px;
`;

class Searchmain extends PureComponent {
  render() {
    return (
      <SearchContainer>
        <Formsearch />
      </SearchContainer>
    );
  }
}

export default Searchmain;
