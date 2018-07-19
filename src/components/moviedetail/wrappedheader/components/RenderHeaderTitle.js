import React from 'react';
import HeaderTitle from '../../headertitle/Headertitle';

const RenderHeaderTitle = ({ original_title, release_date }) => {
  const yeardate = release_date.split('-')[0];
  return (
    <HeaderTitle size="2.4" height="1.1" weight="700">
      {original_title} ({yeardate})
    </HeaderTitle>
  );
};

export default RenderHeaderTitle;
