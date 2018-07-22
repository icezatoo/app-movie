import React from 'react';
import menudata from '../../../../common/config/menumadia';
import styled from 'styled-components';

const MenuList = styled.ul`
  width: 30%;
  box-sizing: border-box;
`;

const Menuitem = styled.li`
  display: inline-block;
  margin-right: 24px;
  padding-bottom: 5px;
  font-size: 1.1em;
  line-height: 1em;
  box-sizing: border-box;
`;

const MenuMedia = props => {
  return (
    <MenuList>
      {menudata &&
        menudata.map(val => <Menuitem key={val.id}>{val.name}</Menuitem>)}
    </MenuList>
  );
};

export default MenuMedia;
