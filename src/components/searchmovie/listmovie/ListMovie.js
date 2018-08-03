import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import Boxviewlist from '../boxview/Boxviewlist';

const ListMovieContainer = styled.div`
  display: flex;
  margin-top: 40px;
`;

const ListMovieHeader = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
`;

const ListMovieHeaderTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ListMovieHeaderButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ListHeader = ({ selected, handleselectview }) => (
  <ListMovieHeader>
    <ListMovieHeaderTitle>
      <h1 className="title">Movie Results</h1>
    </ListMovieHeaderTitle>
    <ListMovieHeaderButton>
      <div className="buttons has-addons">
        <span
          className={`button  ${selected === 0 ? 'is-info selected' : ''}`}
          onClick={() => handleselectview(0)}
        >
          <i className="fas fa-list-ul" />
        </span>
        <span
          className={`button  ${selected === 1 ? 'is-info selected' : ''}`}
          onClick={() => handleselectview(1)}
        >
          <i className="fas fa-th-large" />
        </span>
      </div>
    </ListMovieHeaderButton>
  </ListMovieHeader>
);

class ListMovie extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }

  handleselectview = value => {
    this.setState({ selected: value });
  };

  randerBoxlist = results => (
    <ul>
      {results.map(val => (
        <LazyLoad once={val.once} key={`${val.id}-${val.title}`} height={200} offset={[-200, 0]}>
          <Boxviewlist {...val} />
        </LazyLoad>
      ))}
    </ul>
  );

  render() {
    const { selected } = this.state;
    const { datalist } = this.props;
    const { results } = datalist;
    return (
      <ListMovieContainer>
        <div className="container">
          <ListHeader selected={selected} handleselectview={this.handleselectview} />
          {selected === 0 ? this.randerBoxlist(results) : <p>test</p>}
        </div>
      </ListMovieContainer>
    );
  }
}

export default ListMovie;
