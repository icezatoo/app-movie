import React, { PureComponent, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { stylesmaterial } from '../../../common/config/stylematerial';
import { settings } from '../../../common/api/settingsslick';
import ImageComponent from '../../../common/components/images/ImageComponent';
import './slider.css';

const Imagesno = styled.div`
  width: 100%;
  height: 169px;
  background: #d0d0d1;
`;

const ContainerImage = props => {
  const { imgbaseurl, data, classes } = props;
  const pathimg = imgbaseurl + data.backdrop_path;
  return (
    <div className="containerimage">
      {data.backdrop_path ? (
        <Fragment>
          <ImageComponent src={pathimg} alt={data.title} styleclasss="wapperimage" />
          <ContainerHover classes={classes} {...data} />
        </Fragment>
      ) : (
        <Imagesno>
          <div className="wapperimage" />
          <ContainerHover classes={classes} {...data} />
        </Imagesno>
      )}
    </div>
  );
};

const ContainerHover = ({ classes, id, title }) => (
  <div className="iconstyle">
    <div>
      <Link to={`/movie/${id}`}>
        <IconButton
          className={classes.button}
          color="primary"
          style={{ fontSize: 30 }}
          aria-label="search"
        >
          <Icon>search</Icon>
        </IconButton>
      </Link>
    </div>
    <div>{title}</div>
  </div>
);

export class Sliderview extends PureComponent {
  render() {
    const { classes, imgbaseurl, sliderdata } = this.props;
    return (
      <Slider {...settings}>
        {sliderdata.map(val => (
          <ContainerImage data={val} key={val.id} classes={classes} imgbaseurl={imgbaseurl} />
        ))}
      </Slider>
    );
  }
}

export default withStyles(stylesmaterial)(Sliderview);
