// @ts-nocheck
import React, { PureComponent, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import Formsearch from '../../components/searchmovie/formsearch/Formsearch';
import ListMovie from '../../components/searchmovie/listmovie/ListMovie';
import CircularLoader from '../../common/components/loader/CircularLoader';
import * as MovieListActions from '../../common/actions/movielist/movielist';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  padding-top: 100px;
`;

class Searchmain extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      valueserach: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    const { fetchdataListsearch } = this.props;
    fetchdataListsearch({ search: 'a', page: 0 });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { valueserach } = this.state;
    const { fetchdataListsearch } = this.props;
    const serachdata = valueserach || 'a';
    fetchdataListsearch({ search: serachdata, page: 0 });
  };

  handleChange = event => {
    this.setState({ valueserach: event.target.value });
  };

  handleReset = event => {
    this.setState({ valueserach: '' });
  };

  handlePageClick = event => {
    const { valueserach } = this.state;
    const { fetchdataListsearch } = this.props;
    const serachdata = valueserach || 'a';
    fetchdataListsearch({ search: serachdata, page: event.selected });
  };

  checkDatalistTotalPage = totalpages => {
    if (totalpages > 1000) {
      return 1000;
    }
    return totalpages;
  };

  render() {
    const { valueserach, pageselect } = this.state;
    const { datalist, errorres } = this.props;
    const pagetotle = datalist ? this.checkDatalistTotalPage(datalist.total_pages) : 0;
    const page = datalist && datalist.page - 1;
    return (
      <SearchContainer>
        <section className="section">
          <Formsearch
            handleReset={this.handleReset}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            valueserach={valueserach}
          />
          {datalist ? (
            <ListMovie datalist={datalist} pageselect={pageselect} />
          ) : (
            <Fragment>{errorres ? <p>{errorres}</p> : <CircularLoader />}</Fragment>
          )}
          {!errorres && (
            <ReactPaginate
              previousLabel="previous"
              nextLabel="next"
              breakLabel={<a onClick={e => e.preventDefault()}>...</a>}
              breakClassName="break-me"
              pageCount={pagetotle}
              onPageChange={this.handlePageClick}
              marginPagesDisplayed={2}
              forcePage={page}
              pageRangeDisplayed={5}
              containerClassName={`${datalist ? 'pagination' : 'paginationoff'}`}
              activeClassName="active"
            />
          )}
        </section>
      </SearchContainer>
    );
  }
}

const mapStateToProps = state => ({
  datalist: state.moviedatalist.datalist,
  loading: state.moviedatalist.loading,
  errorres: state.moviedatalist.error,
});

const mapDispatchToProps = dispatch => ({
  fetchdataListsearch: dataserach => dispatch(MovieListActions.fetchdataListsearch(dataserach)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchmain);
