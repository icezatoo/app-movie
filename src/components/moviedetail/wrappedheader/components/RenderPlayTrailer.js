// @ts-nocheck
import React, { Fragment } from 'react';
import { withStateHandlers, pure, compose } from 'recompose';
import DialogVideo from './DialogVideo';

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
      <a className="button is-rounded" onClick={_showDialog}>
        <span style={{ margin: 10 }}>
          <i className="fas fa-play" />
        </span>
        <span> Play Trailer</span>
      </a>
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
