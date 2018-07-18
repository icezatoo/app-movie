import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import { stylesmaterial } from '../../common/config/stylematerial';
import RenderMoviedetail from '../../components/moviedetail/rendermoviedetail/RenderMoviedetail';
import * as MovieDetailActions from '../../common/actions/moviedetails/moviedetailaction';
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
    this.props.fetchdatadetail(params);
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
    const { loading } = this.props;
    const mapdatamovie = this._mapDataService();
    return (
      <MovieContainer>
        {loading ? (
          <RenderMoviedetail
            dataapi={mapdatamovie}
            classes={this.props.classes}
          />
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
  loading: state.moviedetail.loading
});
const mapDispatchToProps = dispatch => ({
  fetchdatadetail: movieid =>
    dispatch(MovieDetailActions.fetchdatadetail(movieid))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(stylesmaterial)
)(Moivedetail);
