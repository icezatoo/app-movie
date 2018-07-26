import React from 'react';
import styled from 'styled-components';

const RowlistView = styled.li`
  font-size: 0.9em;
  margin-right: 20px;
  padding: 10px 0;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 68px;
`;

const RowViewInner = WrappedComponent => props => (
  <RowlistView>
    <WrappedComponent {...props} />
  </RowlistView>
);

export default RowViewInner;
