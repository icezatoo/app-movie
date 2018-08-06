import React from 'react';
import styled from 'styled-components';

const Innercontent = styled.ul`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
`;

const Listview = WrappedComponent => props => (
  <Innercontent>
    <WrappedComponent {...props} />
  </Innercontent>
);

export default Listview;
