import React from 'react';
import styled from 'styled-components';
// import ImageComponent from '../../../common/components/images/ImageComponent';

const BoxContainer = styled.li`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const pathImage = 'http://image.tmdb.org/t/p/w154';

const Noimageholder = styled.div`
  display: inline-block;
  width: 154px;
  height: 154px;
  text-align: center;
  background-color: #dbdbdb;
  color: #b5b5b5;
  box-sizing: border-box;
  font-size: 1em;
  border-radius: 4px;
  border: 1px solid #d7d7d7;
`;

// http://image.tmdb.org/t/p/w342/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg

const BoxMediaImages = ({ poster_path, title }) => (
  <div className="media-left">
    <figure className="image is-154x154">
      {poster_path ? <img src={pathImage + poster_path} alt={title} /> : <Noimageholder />}
    </figure>
  </div>
);

const BoxMediaContent = ({ overview, title }) => (
  <div className="content">
    <h1 className="title">{title}</h1>
    <p>
      <strong>Overview</strong>
      <br />
      {overview ||
        'We dont have an overview translated in English. Help us expand our database by adding one'}
    </p>
    <hr />
  </div>
);

const Boxviewlist = ({ poster_path, overview, title, id }) => (
  <BoxContainer>
    <div className="box">
      <article className="media">
        <BoxMediaImages poster_path={poster_path} title={title} />
        <div className="media-content">
          <BoxMediaContent overview={overview} title={title} />
          <p style={{ float: 'right' }}>More Info</p>
        </div>
      </article>
    </div>
  </BoxContainer>
);

export default Boxviewlist;
