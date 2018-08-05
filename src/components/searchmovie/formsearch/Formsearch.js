// @ts-nocheck
import React, { PureComponent } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Autosuggest from 'react-autosuggest';
import { api_Key } from '../../../common/api/connect';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const getSuggestionValue = suggestion => suggestion.title;
const renderSuggestion = suggestion => <div>{suggestion.title}</div>;

class Formsearch extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: []
    };
  }

  onSuggestionsFetchRequested = ({ value }) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    if (inputLength === 0) {
      this.setState({
        suggestions: []
      });
    }
    axios
      .get(
        `/search/movie?api_key=${api_Key}&language=en-US&page=1&query=${inputValue}&include_adult=false`
      )
      .then(response => {
        const { results } = response.data;
        this.setState({
          suggestions: results
        });
      });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { suggestions } = this.state;
    const { handleSubmit, handleReset, value, onChanges } = this.props;
    const inputProps = {
      placeholder: 'Search Movie ',
      value,
      onChange: onChanges
    };

    return (
      <FormContainer>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
              />
            </div>
            <div className="field is-grouped is-grouped-centered">
              <p className="control">
                <input className="button" type="submit" value="Search" />
              </p>
              <p className="control">
                <input
                  className="button"
                  type="reset"
                  value="Reset"
                  onClick={handleReset}
                />
              </p>
            </div>
          </form>
        </div>
      </FormContainer>
    );
  }
}

export default Formsearch;
