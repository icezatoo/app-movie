import React, { PureComponent } from 'react';
import styled from 'styled-components';
import WithSubscriptionRPC from '../../../rpc/WithSubscriptionRPC';
import Sliderview from '../slider/Sliderview';
import CircularLoader from '../../../common/components/loader/CircularLoader';

const HeaderContainer = styled.h1`
  text-align: left;
  color: black;
  font-weight: bold;
  font-size: 25px;
`;

const SliderViewContainer = styled.div`
  height: 200px;
`;

const MovielistContainer = styled.div`
  margin-left: 25px;
  margin-right: 25px;
`;

class MovielistItem extends PureComponent {
  render() {
    const { header, apipath } = this.props.viewdata;
    const { images } = this.props.configuration;
    return (
      <MovielistContainer>
        <HeaderContainer> {header} </HeaderContainer>
        <ul>
          <WithSubscriptionRPC
            url={apipath}
            render={({ data, loader }) => (
              <SliderViewContainer>
                {loader && <CircularLoader />}
                {data && (
                  <Sliderview
                    imgbaseurl={images.base_url + images.backdrop_sizes[0]}
                    sliderdata={data.results}
                  />
                )}
              </SliderViewContainer>
            )}
          />
        </ul>
      </MovielistContainer>
    );
  }
}
export default MovielistItem;
