import React, { PureComponent } from 'react';
import styled from 'styled-components';
import GridContainer from '../../../common/components/grid/girdcontainer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ImageComponent from '../../../common/components/images/ImageComponent';
import HeaderTitle from '../headertitle/Headertitle';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Percentagecircle from '../../../common/components/percentagecircle/Percentagecircle';
import './wapped.css';

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
    const {
      original_title,
      overview,
      release_date,
      vote_average
    } = moviedetail;
    const yeardate = release_date.split('-')[0];
    const { root, button, leftIcon, iconSmall } = this.props.classes;
    const stylepercentage = { strokecircle: 8.8, strokecirclebg: 10.8 };
    const percentage = (vote_average / 10) * 100;
    return (
      <MovieImages img={imgbackdrop}>
        <RadialMovieImages>
          <GridContainer
            spacing={16}
            classes={root}
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
                  classes={root}
                  alignItems="center"
                  justify="center"
                >
                  <Grid item xs={12}>
                    <HeaderTitle size="2.4" height="1.1" weight="700">
                      {original_title} ({yeardate})
                    </HeaderTitle>
                  </Grid>
                  <Grid item xs={3}>
                    <Percentagecircle
                      radius={30}
                      value={percentage / 100}
                      settingsstyle={stylepercentage}
                    >
                      {percentage}%
                    </Percentagecircle>
                    <p>UserScore</p>
                  </Grid>

                  <Grid item xs={8}>
                    <Button
                      variant="outlined"
                      className={button}
                      style={{ color: 'white' }}
                    >
                      <Icon className={classNames(leftIcon, iconSmall)}>
                        play_arrow
                      </Icon>
                      <p>Play Trailer</p>
                    </Button>
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
