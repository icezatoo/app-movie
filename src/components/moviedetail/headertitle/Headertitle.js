// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { compose, defaultProps, setPropTypes } from 'recompose';

const HeaderStyle = styled.h1`
  font-size: ${props => props.size}em;
  line-height: ${props => props.height}em;
  font-weight: ${props => props.weight};
  float: ${props => props.float};
  color: ${props => props.color};
`;

const HeaderTitle = props => {
  const { children, configstyleheader } = props;
  return (
    <HeaderStyle
      size={configstyleheader.size}
      height={configstyleheader.height}
      weight={configstyleheader.weight}
      float={configstyleheader.float}
      color={configstyleheader.color}
    >
      {children}
    </HeaderStyle>
  );
};

// Enhancers
const withPropTypes = setPropTypes({
  configstyleheader: PropTypes.object.isRequired
});
const withDefaultProps = defaultProps({
  configstyleheader: {
    size: 1.0,
    weight: 700,
    height: 2.0,
    float: 'none',
    color: 'black'
  }
});

export default compose(
  withPropTypes,
  withDefaultProps
)(HeaderTitle);
