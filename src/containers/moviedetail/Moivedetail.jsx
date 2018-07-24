import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { stylesmaterial } from '../../common/config/stylematerial';
import RenderMoviedetail from '../../components/moviedetail/rendermoviedetail/RenderMoviedetail';
import * as MovieDetailActions from '../../common/actions/moviedetails/moviedetailaction';
import CircularLoader from '../../common/components/loader/CircularLoader';

const MovieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  min-height: 100vh;
  padding-top: 60px;
`;

class Moivedetail extends Component {
  componentDidMount() {
    const { fetchdatadetail, match } = this.props;
    const params = match.params.movieId;
    fetchdatadetail(params);
  }

  mappathImages = (images, sizes, mode) => mappathsize =>
    images.base_url + mappathsize[sizes] + mode;

  mapDataService = () => {
    const { datamovie, dataconfig } = this.props;
    if (datamovie && dataconfig) {
      const { backdrop_path, poster_path } = datamovie.moviedetail;
      const { images } = dataconfig;
      const datamap = {
        ...datamovie,
        ...dataconfig,
        imgbackdrop: this.mappathImages(images, 3, backdrop_path)(images.backdrop_sizes),
        imgposter: this.mappathImages(images, 3, poster_path)(images.poster_sizes),
      };
      return datamap;
    }
    return null;
  };

  render() {
    const { loading, classes } = this.props;
    const mapdatamovie = this.mapDataService();
    return (
      <MovieContainer>
        {loading ? (
          <RenderMoviedetail dataapi={mapdatamovie} classes={classes} />
        ) : (
          <CircularLoader />
        )}
      </MovieContainer>
    );
  }
}

const mapStateToProps = state => ({
  datamovie: state.moviedetail.datamovie,
  dataconfig: state.movieconfig.dataconfig,
  loading: state.moviedetail.loading,
});
const mapDispatchToProps = dispatch => ({
  fetchdatadetail: movieid => dispatch(MovieDetailActions.fetchdatadetail(movieid)),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(stylesmaterial)
)(Moivedetail);
