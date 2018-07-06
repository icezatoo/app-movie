import React from 'react';
import axios from 'axios';
const HasData = ({ url, params }) => WrappedComponent => {
  class HasDatas extends React.Component {
    state = {
      data: []
    };

    componentDidMount() {
      console.log(url, 'url');
      axios
        .get(url, { params })
        .then(({ data }) => {
          this.setState({
            data
          });
        })
        .catch(error => {
          console.log(error);
        });
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  }

  return HasDatas;
};
export default HasData;
