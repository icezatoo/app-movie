import React, { Component } from 'react';
import { connect } from 'react-redux';
import RenderMoviedetail from '../../components/moviedetail/rendermoviedetail/RenderMoviedetail';
import * as movieActions from '../../common/actions/moviedetails/moviedetailaction';
import CircularLoader from '../../common/components/loader/CircularLoader';
import styled from 'styled-components';
const MovieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  padding-top: 60px;
`;

class Moivedetail extends Component {
  componentDidMount() {
    const params = this.props.match.params.movieId;
    this.props.fetchMoviedetails(params);
  }

  _mappathImages = (images, sizes, mode) => mappathsize => {
    return images.base_url + mappathsize[sizes] + mode;
  };

  _mapDataService = () => {
    if (this.props.datamovie && this.props.dataconfig) {
      const { datamovie, dataconfig } = this.props;
      const { backdrop_path, poster_path } = datamovie.moviedetail;
      const { images } = dataconfig;
      const datamap = {
        ...datamovie,
        ...dataconfig,
        imgbackdrop: this._mappathImages(images, 3, backdrop_path)(
          images.backdrop_sizes
        ),
        imgposter: this._mappathImages(images, 3, poster_path)(
          images.poster_sizes
        )
      };
      return datamap;
    }
  };

  render() {
    const { loaddata } = this.props;
    const mapdatamovie = this._mapDataService();
    return (
      <MovieContainer>
        {!loaddata ? (
          <RenderMoviedetail dataapi={mapdatamovie} />
        ) : (
          <CircularLoader />
        )}
      </MovieContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  datamovie: state.moviedetail.datamovie,
  dataconfig: state.movieconfig.dataconfig,
  loaddata: state.moviedetail.loader
});
const mapDispatchToProps = dispatch => ({
  fetchMoviedetails: movieid =>
    dispatch(movieActions.fetchMoviedetails(movieid))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moivedetail);
