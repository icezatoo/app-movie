import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import RanderViewMovie from '../../components/homemain/renderviewmovie/RanderViewMovie';

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  padding-top: 100px;
`;

class Homemain extends PureComponent {
  render() {
    const { datamovieconfig } = this.props;
    return (
      <HomeContainer>
        <RanderViewMovie dataconfigapi={datamovieconfig} />
      </HomeContainer>
    );
  }
}

const mapStateToProps = state => ({
  datamovieconfig: state.movieconfig.dataconfig,
});

export default connect(mapStateToProps)(Homemain);
