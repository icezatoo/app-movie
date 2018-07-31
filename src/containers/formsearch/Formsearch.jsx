// @ts-nocheck
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as MovieListActions from '../../common/actions/movielist/movielist';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

class Formsearch extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { valueserarch: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange = event => {
    this.setState({ valueserarch: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { valueserarch } = this.state;
    const { fetchdataListsearch } = this.props;
    fetchdataListsearch(valueserarch);
  };

  handleReset = event => {
    this.setState({ valueserarch: '' });
  };

  render() {
    const { valueserarch } = this.state;
    return (
      <FormContainer>
        <section className="section">
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <input
                  className="input is-rounded"
                  type="text"
                  value={valueserarch}
                  onChange={this.handleChange}
                  placeholder="Search"
                />
              </div>
              <div className="field is-grouped is-grouped-centered">
                <p className="control">
                  <input className="button" type="submit" value="Search" />
                </p>
                <p className="control">
                  <input className="button" type="reset" value="Reset" onClick={this.handleReset} />
                </p>
              </div>
            </form>
          </div>
        </section>
      </FormContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchdataListsearch: dataserach => dispatch(MovieListActions.fetchdataListsearch(dataserach)),
});

export default connect(
  null,
  mapDispatchToProps
)(Formsearch);
