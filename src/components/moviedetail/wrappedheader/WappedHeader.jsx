import React, { PureComponent } from 'react';
import styled from 'styled-components';
import GridContainer from '../../../common/components/grid/girdcontainer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ImageComponent from '../../../common/components/images/ImageComponent';
import './wapped.css';
import HeaderTitle from '../headertitle/Headertitle';
import Percentagecircle from '../../../common/components/percentagecircle/Percentagecircle';

const MovieImages = styled.div`
  background-image: url(${props => props.img});
  width: auto;
  z-index: -1;
  background-position: 100% 30%;
  background-repeat: no-repeat;
  left: 0;
  right: 0;
  background-size: cover;
  will-change: opacity;
  transition: filter 1s;
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
    console.log(props);
  }
  render() {
    const { imgposter, imgbackdrop, moviedetail } = this.props.dataapi;
    const { original_title, overview, release_date } = moviedetail;
    const yeardate = release_date.split('-')[0];
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
              <div className="test">
                <GridContainer
                  spacing={16}
                  classes={this.props.classes}
                  alignItems="center"
                  justify="center"
                >
                  <Grid item xs={12}>
                    <HeaderTitle size="2.4" height="1.1" weight="700">
                      {original_title} ({yeardate})
                    </HeaderTitle>
                  </Grid>
                  <Grid item xs={12}>
                    <Percentagecircle radius={100} value={50 / 100}>
                      50%
                    </Percentagecircle>
                  </Grid>
                  <Grid item xs={12}>
                    <HeaderTitle size="1.3" height="2.0" weight="600">
                      Overview
                    </HeaderTitle>
                    <Typography style={{ color: 'white' }}>
                      {overview}
                    </Typography>
                  </Grid>
                </GridContainer>
              </div>
            </Grid>
          </GridContainer>
        </RadialMovieImages>
      </MovieImages>
    );
  }
}

export default WappedHeader;
