import React from 'react';
import { pathImage } from '../../../common/api/connect';
import { Link } from 'react-router-dom';
import ImageComponent from '../../../common/components/images/ImageComponent';
import './Boximage.css';

const BoxHover = ({ id }) => (
  <div className="iconstyle">
    <Link to={`/movie/${id}`}>
      <span class="icon">
        <i class="fas fa-search" />
      </span>
    </Link>
  </div>
);

const BoxImage = ({ poster_path, title, id }) => (
  <div className="BoxImageList">
    <ImageComponent
      src={pathImage + 'w342' + poster_path}
      alt={title}
      styleclasss="wapperimage"
    />
    <BoxHover id={id} />
  </div>
);

export default BoxImage;
