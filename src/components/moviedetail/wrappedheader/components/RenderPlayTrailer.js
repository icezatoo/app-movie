// @ts-nocheck
import React, { Fragment } from 'react';
import { withStateHandlers, pure, compose } from 'recompose';
import styled from 'styled-components';
import DialogVideo from './DialogVideo';

const Button = styled.button`
  background: white;
  color: black;
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;
`;

const enhance = withStateHandlers(
  {
    displaydialog: false,
  },
  {
    _showDialog: ({ displaydialog }) => () => ({ displaydialog: true }),
    _dialogClose: ({ displaydialog }) => () => ({ displaydialog: false }),
  }
);

const RenderPlayTrailer = ({ videoslist, displaydialog, _dialogClose, _showDialog }) => {
  const viedofilter = videoslist
    ? videoslist.filter(val => val.type === 'Trailer' && val.site === 'YouTube')
    : null;

  return (
    <Fragment>
      <Button onClick={_showDialog}>
        <span style={{ margin: 10 }}>
          <i className="fas fa-play" />
        </span>
        Play Trailer
      </Button>
      <DialogVideo
        showdialog={displaydialog}
        videodata={viedofilter[0]}
        _dialogClose={_dialogClose}
      />
    </Fragment>
  );
};

export default compose(
  pure,
  enhance
)(RenderPlayTrailer);
