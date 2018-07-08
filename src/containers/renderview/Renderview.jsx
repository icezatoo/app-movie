import React, { PureComponent } from 'react';
import WithSubscriptionRPC from '../../rpc/WithSubscriptionRPC';
import CircularLoader from '../../common/components/loader/CircularLoader';
import styled from 'styled-components';
import Sliderview from '../../components/slider/Sliderview';
const HeaderContainer = styled.h1`
  text-align: left;
  color: black;
  font-weight: bold;
  font-size: 25px;
`;

class Renderview extends PureComponent {
  onclickDataMovie(movie) {
    console.log(movie, 'movie');
  }

  render() {
    const { header, apipath } = this.props.viewdata;
    const { images } = this.props.configuration.data;
    return (
      <div>
        <HeaderContainer> {header} </HeaderContainer>
        <ul>
          <WithSubscriptionRPC
            url={apipath}
            mode='datamovie'
            render={({ data, loader }) => (
              <div>
                {loader && <CircularLoader />}
                {data && (
                  <Sliderview
                    imgbaseurl={images.base_url + images.backdrop_sizes[0]}
                    sliderdata={data}
                    onclickDataMovie={this.onclickDataMovie}
                  />
                )}
              </div>
            )}
          />
        </ul>
      </div>
    );
  }
}
export default Renderview;
