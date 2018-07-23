import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import MenuMedia from './MenuMedia';

class Randermedialist extends Component {
  handleChange = (event, value) => {
    this.props.handleChange(value);
  };

  render() {
    console.log(this.props);
    const { selectmoviemedia } = this.props;
    return (
      <Fragment>
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

export default Randermedialist;
