import React, { PureComponent } from 'react';
import styled from 'styled-components';
import GridContainer from '../../../common/components/grid/girdcontainer';
import Grid from '@material-ui/core/Grid';
import ImageComponent from '../../../common/components/images/ImageComponent';

const MovieImages = styled.div`
  background-image: url(${props => props.img});
  width: auto;
  z-index: -1;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  left: 0;
  right: 0;
  background-size: cover;
`;

const RadialMovieImages = styled.div`
  background-image: radial-gradient(
    circle at 20% 50%,
    rgba(16.86%, 18.04%, 14.9%, 0.98) 0%,
    rgba(16.86%, 18.04%, 14.9%, 0.88) 20%
  );
`;

class WappedHeader extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { imgposter, imgbackdrop } = this.props.dataapi;
    return (
      <MovieImages img={imgbackdrop}>
        <RadialMovieImages>
          <GridContainer
            spacing={16}
            classes={this.props.classes}
            alignItems="center"
            justify="center"
          >
            <Grid item xs={3} />
            <Grid item xs={3}>
              <ImageComponent src={imgposter} alt="backf" />
            </Grid>
            <Grid item xs={6}>
              <p style={{ color: 'white' }}>Tests</p>
            </Grid>
          </GridContainer>
        </RadialMovieImages>
      </MovieImages>
    );
  }
}

export default WappedHeader;
