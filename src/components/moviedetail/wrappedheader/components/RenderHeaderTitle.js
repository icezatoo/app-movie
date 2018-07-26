import React from 'react';
import styled from 'styled-components';
import HeaderTitle from '../../headertitle/Headertitle';

const TextWidth = styled.div`
  width: 70%;
`;

const RenderHeaderTitle = ({ original_title, release_date }) => {
  const yeardate = release_date.split('-')[0];
  const configstyleheader = {
    size: 2.4,
    height: 1.1,
    weight: 700,
    color: 'white',
  };
  return (
    <TextWidth>
      <HeaderTitle configstyleheader={configstyleheader}>
        {original_title} ({yeardate})
      </HeaderTitle>
    </TextWidth>
  );
};

export default RenderHeaderTitle;
