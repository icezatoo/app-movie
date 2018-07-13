import React from 'react';
import PropTypes from 'prop-types';
const ImageComponent = ({ styleclasss, styles, src, alt, widths, height }) => {
  return (
    <img
      className={styleclasss}
      style={styles}
      src={src}
      alt={alt}
      width={widths}
      height={height}
    />
  );
};

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default ImageComponent;
