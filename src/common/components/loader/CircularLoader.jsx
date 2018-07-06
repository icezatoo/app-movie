import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  placeholder: {
    height: 80
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class CircularLoader extends Component {
  timer = null;
  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.placeholder}>
          <CircularProgress className={classes.progress} color="secondary" />
        </div>
      </div>
    );
  }
}

CircularLoader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CircularLoader);
