// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { compose, defaultProps, setPropTypes } from 'recompose';

const HeaderStyle = styled.h1`
  font-size: ${props => props.config.size}em;
  line-height: ${props => props.config.height}em;
  font-weight: ${props => props.config.weight};
  float: ${props => props.config.float};
  color: ${props => props.config.color};
`;

const HeaderTitle = props => {
  const { children, configstyleheader } = props;
  return <HeaderStyle config={configstyleheader}>{children}</HeaderStyle>;
};

// Enhancers
const withPropTypes = setPropTypes({
  configstyleheader: PropTypes.object.isRequired,
});
const withDefaultProps = defaultProps({
  configstyleheader: {
    size: 1.0,
    weight: 700,
    height: 2.0,
    float: 'none',
    color: 'black',
  },
});

export default compose(
  withPropTypes,
  withDefaultProps
)(HeaderTitle);
