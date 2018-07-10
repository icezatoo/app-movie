import React from 'react';
import PropTypes from 'prop-types';
const ImageComponent = props => {
  return (
    <img
      className={props.styleclasss}
      style={props.styles}
      src={props.src}
      alt={props.alt}
      width={props.widths}
      height={props.height}
    />
  );
};

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default ImageComponent;
