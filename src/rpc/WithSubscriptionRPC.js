import React from 'react';
import axios from 'axios';
class WithSubscriptionRPC extends React.Component {
  state = {
    data: null,
    errors: null,
    loader: true
  };

  componentDidMount() {
    axios
      .get(this.props.url)
      .then(response => {
        this.setState({
          data: response.data,
          errors: null,
          loader: false
        });
      })
      .catch(error => {
        this.setState({
          data: null,
          errors: error,
          loader: false
        });
      });
  }

  render() {
    return this.props.render(this.state);
  }
}

export default WithSubscriptionRPC;
