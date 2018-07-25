// @ts-nocheck
import React, { Fragment, PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import { compose, setPropTypes, branch, renderNothing } from 'recompose';
import HeaderTitle from '../../headertitle/Headertitle';
import CircularLoader from '../../../../common/components/loader/CircularLoader';

const PATHURL = 'https://www.youtube.com/watch?v=';
const settings = {
  dots: true,
  lazyLoad: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const mapdatashowvideo = (videoslist, index) =>
  index === 0 ? { ...videoslist, showvideo: true } : { ...videoslist, showvideo: false };

const mapdataChangevideo = (datavideoslist, index, indexlist) =>
  index === indexlist
    ? { ...datavideoslist, showvideo: true }
    : { ...datavideoslist, showvideo: false };

class Randermedia extends PureComponent {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      datavideoslist: props.videoslist.map(mapdatashowvideo),
    };
    this.afterChangeSlider = this.afterChangeSlider.bind(this);
  }

  afterChangeSlider = indexlist => {
    const { datavideoslist } = this.state;
    const newdatamap = datavideoslist.map((val, index) =>
      mapdataChangevideo(val, index, indexlist)
    );
    this.setState({
      datavideoslist: newdatamap,
    });
  };

  render() {
    const { configstyleheader } = this.props;
    const { datavideoslist } = this.state;

    return (
      <Fragment>
        <Grid item xs={12}>
          <HeaderTitle configstyleheader={configstyleheader}>Media</HeaderTitle>
        </Grid>
        <Grid item xs={10}>
          <div style={{ background: 'black' }}>
            <Slider {...settings} afterChange={this.afterChangeSlider}>
              {datavideoslist.map(val => (
                <div key={val.id}>
                  {val.showvideo ? (
                    <ReactPlayer
                      style={{ display: 'inline-block' }}
                      url={PATHURL + val.key}
                      controls
                    />
                  ) : (
                    <div>
                      <CircularLoader />
                    </div>
                  )}
                </div>
              ))}
            </Slider>
          </div>
          <hr />
        </Grid>
      </Fragment>
    );
  }
}

const hideIfNoData = hasNoData => branch(hasNoData, renderNothing);
const enhance = hideIfNoData(props => !props.videoslist);

const withPropTypes = setPropTypes({
  videoslist: PropTypes.array.isRequired,
  configstyleheader: PropTypes.object.isRequired,
});

export default compose(
  withPropTypes,
  enhance
)(Randermedia);
