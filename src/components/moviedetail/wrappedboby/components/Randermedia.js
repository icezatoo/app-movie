import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import MenuMedia from './MenuMedia';
import HeaderTitle from '../../headertitle/Headertitle';

class Randermedia extends Component {
  constructor(props) {
    super(props);
    this.props.setVideolist(this.props.videoslist);
  }

  handleChange = (event, value) => {
    console.log(value);
  };

  render() {
    console.log(this.props);
    const { selectmoviemedia, configstyleheader, videoslist } = this.props;
    return (
      <Fragment>
        <Grid item xs={3}>
          <HeaderTitle configstyleheader={configstyleheader}>Media</HeaderTitle>
        </Grid>
        <Grid item xs={8}>
          <MenuMedia
            handleChange={this.handleChange}
            selectmoviemedia={selectmoviemedia}
          />
        </Grid>
        <Grid item xs={10}>
          terst
          <hr />
        </Grid>
      </Fragment>
    );
  }
}

export default Randermedia;
