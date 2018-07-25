import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FadeIn from 'react-lazyload-fadein';

const ImageComponent = ({ styleclasss, styles, src, alt, widths, height }) => (
  <Fragment>
    <FadeIn height={500}>
      {onload => (
        <img
          className={styleclasss}
          style={styles}
          src={src}
          alt={alt}
          width={widths}
          height={height}
          onLoad={onload}
        />
      )}
    </FadeIn>
  </Fragment>
);

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageComponent;
