import { connect } from 'react-redux';
import Randermedialist from '../../components/moviedetail/wrappedboby/components/Randermedialist';
import * as MovieMadiaActions from '../../common/actions/moviemedia/moviemedia';

const mapStateToProps = (state, ownProps) => ({
  selectmoviemedia: state.moviemedia.moviemediaMenuFilterReducer.filterselect
});
const mapDispatchToProps = dispatch => ({
  handleChange: value => dispatch(MovieMadiaActions.setMenuFilter(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Randermedialist);
