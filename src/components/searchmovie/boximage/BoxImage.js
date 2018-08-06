import React from 'react';
import { pathImage } from '../../../common/api/connect';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import nophoto from '../../../assets/images/nophoto.png';

const ImageContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  width: 20%;
  height: 403px;
  cursor: pointer;
  border: 1px solid #ccc;
  overflow: hidden;
`;

const ImageShow = styled.div`
  background-image: url(${props => props.img});
  height: 100%;
  width: 100%;
  background-size: ${props => props.cover};
  background-repeat: no-repeat;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  ${ImageContainer}:hover & {
    transform: scale(1.2);
  }
  &:before {
    content: '';
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(52, 73, 94, 0.75);
    ${ImageContainer}:focus & {
      display: block;
    }
    ${ImageContainer}:hover & {
      display: block;
    }
  }
`;

const ImagesText = styled.span`
  display: none;
  font-size: 35px;
  color: #ffffff !important;
  font-family: sans-serif;
  text-align: center;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 50px;
  cursor: pointer;
  ${ImageContainer}:focus & {
    display: block;
  }
  ${ImageContainer}:hover & {
    display: block;
  }
`;

const BoxImage = ({ poster_path, id }) => {
  const pathimage = poster_path ? pathImage + 'w342' + poster_path : nophoto;
  const coverimage = poster_path ? 'cover' : 'contain';
  return (
    <ImageContainer>
      <ImageShow img={pathimage} cover={coverimage}>
        <Link to={`/movie/${id}`}>
          <ImagesText>
            <i className="fas fa-search" />
          </ImagesText>
        </Link>
      </ImageShow>
    </ImageContainer>
  );
};

export default BoxImage;
