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
        if (this.props.mode === 'datamovie') {
          const datamap = response.data.results.map(val => {
            return { ...val, ishover: false };
          });
          this.setState({
            data: [...datamap],
            errors: null,
            loader: false
          });
        } else {
          this.setState({
            data: response.data,
            errors: null,
            loader: false
          });
        }
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
