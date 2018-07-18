// @ts-nocheck
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import GridContainer from '../../../common/components/grid/girdcontainer';
import Grid from '@material-ui/core/Grid';
import ImageComponent from '../../../common/components/images/ImageComponent';

import {
  RenderHeaderTitle,
  RenderOverview,
  RenderPercentagecircle,
  RenderPlayTrailer,
  DialogVideo
} from './components';

const MovieImages = styled.div`
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: 100% 30%;
  z-index: -1;
  left: 0;
  right: 0;
  background-size: cover;
  will-change: opacity;
  transition: 1s filter linear;
  -webkit-transition: 1s -webkit-filter linear;
  -moz-transition: 1s -moz-filter linear;
  -ms-transition: 1s -ms-filter linear;
  -o-transition: 1s -o-filter linear;
`;

const RadialMovieImages = styled.div`
  background-image: radial-gradient(
    circle at 20% 50%,
    rgba(16.86%, 18.04%, 14.9%, 0.98) 0%,
    rgba(16.86%, 18.04%, 14.9%, 0.88) 20%
  );
`;

const BobyHeaderStyle = styled.div`
  height: 513px;
  color: white;
`;

class WappedHeader extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showdialog: false
    };

    this._handleShow = this._handleShow.bind(this);
    this._handleClose = this._handleClose.bind(this);
  }

  _handleShow = () => {
    console.log('test');
    this.setState({
      showdialog: true
    });
  };

  _handleClose = () => {
    this.setState({
      showdialog: false
    });
  };

  render() {
    const {
      imgposter,
      imgbackdrop,
      moviedetail,
      movievideos
    } = this.props.dataapi;
    const { results } = movievideos;
    const { showdialog } = this.state;
    return (
      <MovieImages img={imgbackdrop}>
        <RadialMovieImages>
          <GridContainer spacing={16} alignItems="center" justify="center">
            <Grid item xs={4}>
              <GridContainer alignItems="center" justify="center">
                <ImageComponent src={imgposter} alt="backf" />
              </GridContainer>
            </Grid>
            <Grid item xs={5}>
              <BobyHeaderStyle>
                <GridContainer
                  spacing={16}
                  alignItems="center"
                  justify="center"
                >
                  <Grid item xs={12}>
                    <RenderHeaderTitle {...moviedetail} />
                  </Grid>
                  <Grid item xs={3}>
                    <RenderPercentagecircle {...moviedetail} />
                  </Grid>
                  <Grid item xs={8}>
                    <RenderPlayTrailer
                      _handleShow={this._handleShow}
                      {...this.props.classes}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <RenderOverview {...moviedetail} />
                  </Grid>
                </GridContainer>
              </BobyHeaderStyle>
            </Grid>
          </GridContainer>
          {showdialog && (
            <DialogVideo
              _handleClose={this._handleClose}
              showdialog={showdialog}
              videodata={results[1]}
            />
          )}
        </RadialMovieImages>
      </MovieImages>
    );
  }
}

export default WappedHeader;
