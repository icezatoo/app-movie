import { connect } from 'react-redux';
import Randermedia from '../../components/moviedetail/wrappedboby/components/Randermedia';
import * as MoviemediaActions from '../../common/actions/moviemedia/moviemedia';
const mapStateToProps = (state, ownProps) => ({
  selectmoviemedia: state.moviemedia.selectfilter
});

const mapDispatchToProps = dispatch => ({
  setVideolist: videolist => dispatch(MoviemediaActions.setVideolist(videolist))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Randermedia);
