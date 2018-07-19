import React from 'react';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Dialog from '@material-ui/core/Dialog';
import ReactPlayer from 'react-player';

const DialogVideo = props => {
  const { showdialog, _dialogClose, videodata } = props;
  const pathvideo = 'https://www.youtube.com/watch?v=' + videodata.key;
  return (
    <Dialog
      open={showdialog}
      onClose={_dialogClose}
      maxWidth={false}
      aria-labelledby="responsive-dialog-title"
    >
      <ReactPlayer url={pathvideo} playing controls />
    </Dialog>
  );
};

export default withMobileDialog()(DialogVideo);
