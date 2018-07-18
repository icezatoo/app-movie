import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';

const RenderPlayTrailer = ({ button, leftIcon, iconSmall, _handleShow }) => (
  <Button
    variant="outlined"
    onClick={_handleShow}
    className={button}
    style={{ color: 'white' }}
  >
    <Icon className={classNames(leftIcon, iconSmall)}>play_arrow</Icon>
    <p>Play Trailer</p>
  </Button>
);

export default RenderPlayTrailer;
