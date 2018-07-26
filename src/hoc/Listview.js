import React from 'react';
import styled from 'styled-components';

const Innercontent = styled.ul`
  margin-bottom: 30px;
  margin-top: 40px;
  width: 100%;
  height: 68px;
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
