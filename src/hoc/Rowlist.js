import React from 'react';
import styled from 'styled-components';

const Rowlist = styled.li`
  font-size: 0.9em;
  margin-right: 20px;
  padding: 10px 0;
  width: 75%;
`;

const RowList = WrappedComponent => props => (
  <Rowlist>
    <WrappedComponent {...props} />
  </Rowlist>
);

export default RowList;
