// @ts-nocheck
import React, { Fragment, PureComponent } from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';
import DialogVideo from './DialogVideo';

class RenderPlayTrailer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showdialogs: false
    };
  }

  _showDialog = () => {
    this.setState({
      showdialogs: true
    });
  };

  _dialogClose = () => {
    this.setState({
      showdialogs: false
    });
  };

  render() {
    const { button, leftIcon, iconSmall, moviedetail } = this.props;
    const { showdialogs } = this.state;
    return (
      <Fragment>
        <Button
          variant="outlined"
          onClick={this._showDialog}
          className={button}
          style={{ color: 'white' }}
        >
          <Icon className={classNames(leftIcon, iconSmall)}>play_arrow</Icon>
          <p>Play Trailer</p>
        </Button>
        <DialogVideo
          showdialog={showdialogs}
          videodata={moviedetail.videoslist[0]}
          _dialogClose={this._dialogClose}
        />
      </Fragment>
    );
  }
}

export default RenderPlayTrailer;
