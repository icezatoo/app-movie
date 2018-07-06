import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import { settings } from '../../common/api/settingsslick';

export class Sliderview extends PureComponent {
  constructor(props) {
    super(props);
    this.onhandleClick = this.onhandleClick.bind(this);
  }

  onhandleClick(val) {
    this.props.onclickDataMovie(val);
  }

  render() {
    return (
      <Slider {...settings}>
        {this.props.sliderdata.map(val => (
          <div key={val.id} onClick={() => this.onhandleClick(val)}>
            <img
              src={
                val.backdrop_path
                  ? this.props.imgbaseurl + val.backdrop_path
                  : 'https://images-eu.ssl-images-amazon.com/images/I/51LGj5--KsL.png'
              }
              alt={val.id}
              height="180"
              width="300"
            />
          </div>
        ))}
      </Slider>
    );
  }
}

export default Sliderview;
