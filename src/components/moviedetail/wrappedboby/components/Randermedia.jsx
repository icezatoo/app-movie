import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';
import HeaderTitle from '../../headertitle/Headertitle';

const Randermedia = ({ configstyleheader, videoslist }) => {
  const settings = {
    dots: true,
    lazyLoad: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const path = 'https://www.youtube.com/watch?v=';

  return (
    <Fragment>
      {videoslist && (
        <Fragment>
          <Grid item xs={12}>
            <HeaderTitle configstyleheader={configstyleheader}>Media</HeaderTitle>
          </Grid>
          <Grid item xs={10}>
            <div>
              <Slider {...settings}>
                {videoslist.map(val => (
                  <div key={val.id}>
                    <ReactPlayer
                      style={{ display: 'inline-block' }}
                      url={path + val.key}
                      controls
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <hr />
          </Grid>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Randermedia;
