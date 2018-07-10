import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { settings } from '../../common/api/settingsslick';
import Slider from 'react-slick';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ImageComponent from '../images/ImageComponent';
import './slider.css';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
});

export class Sliderview extends PureComponent {
  render() {
    const { classes, imgbaseurl } = this.props;
    return (
      <Slider {...settings}>
        {this.props.sliderdata.map(val => {
          const pathimg = val.backdrop_path
            ? imgbaseurl + val.backdrop_path
            : 'https://images-eu.ssl-images-amazon.com/images/I/51LGj5--KsL.png';
          return (
            <div className="containerimage" key={val.id}>
              <ImageComponent
                src={pathimg}
                alt={val.title}
                styleclasss="wapperimage"
              />
              <div className="iconstyle">
                <Link to={`/movie/${val.id}`}>
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
            </div>
          );
        })}
      </Slider>
    );
  }
}

export default withStyles(styles)(Sliderview);
