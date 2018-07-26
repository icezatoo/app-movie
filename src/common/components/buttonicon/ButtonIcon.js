import React from 'react';
import styled from 'styled-components';

const Buttoncontent = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  border: 2px solid #000;
  border-color: #fff;
  color: #fff;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  width: 46px;
  height: 46px;
  padding-right: 2px;
  &:hover {
    color: #141313;
    background-color: #ffffff;
    border-color: rgba(100%, 100%, 100%, 0.2);
  }
`;

const ButtonIcon = ({ children, onClick }) => (
  <Buttoncontent onClick={onClick}>
    <span className="icon">{children}</span>
  </Buttoncontent>
);

export default ButtonIcon;
