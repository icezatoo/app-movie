// @ts-nocheck
import React, { Fragment } from 'react';
import { withStateHandlers, pure, compose } from 'recompose';
import styled from 'styled-components';
import DialogVideo from './DialogVideo';
import ButtonIcon from '../../../../common/components/buttonicon/ButtonIcon';
import RowViewInner from '../../../../hoc/Rowview';

const PlayTrailerText = styled.div`
  font-weight: 700;
  margin-left: 7px;
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
      <ButtonIcon onClick={_showDialog}>
        <i className="fas fa-play" />
      </ButtonIcon>
      <PlayTrailerText>
        <p>Play Trailer</p>
      </PlayTrailerText>
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
  enhance,
  RowViewInner
)(RenderPlayTrailer);
