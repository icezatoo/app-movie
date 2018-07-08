import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import { settings } from '../../common/api/settingsslick';
import './slider.css';
import { Motion, spring } from 'react-motion';

export class Sliderview extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      datamovie: [...props.sliderdata]
    };
    this.onhandleClick = this.onhandleClick.bind(this);
  }

  onhandleClick(val) {
    this.props.onclickDataMovie(val);
  }

  handleMouse(active, id) {
    // this.state.datamovie[index].ishover = active;
    // const datamap = this.state.datamovie[index];
    const mapdatahover = this.state.datamovie.map(val => {
      if (val.id === id) {
        return { ...val, ishover: active };
      } else {
        return val;
      }
    });
    this.setState({
      datamovie: [...mapdatahover]
    });
  }

  getSpringProps(index) {
    return {
      defaultStyle: {
        scale: 1,
        opacity: 1
      },
      style: {
        scale: spring(this.state.datamovie[index].ishover ? 1.15 : 1),
        opacity: spring(this.state.datamovie[index].ishover ? 0 : 1)
      }
    };
  }

  render() {
    return (
      <Slider {...settings}>
        {this.state.datamovie.map(val => (
          <div key={val.id} onClick={() => this.onhandleClick(val)}>
            <img
              onMouseOut={this.handleMouse.bind(this, false, val.id)}
              onMouseOver={this.handleMouse.bind(this, true, val.id)}
              className="wapperimage"
              src={
                val.backdrop_path
                  ? this.props.imgbaseurl + val.backdrop_path
                  : 'https://images-eu.ssl-images-amazon.com/images/I/51LGj5--KsL.png'
              }
              alt={val.id}
            />
          </div>
        ))}
      </Slider>
    );
  }
}

export default Sliderview;
