import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import './App.css';
import 'bulma/css/bulma.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeaderNavigation from './containers/headernavigation/HeaderNavigation';
import NotFound from './components/notfound/NotFound';
import CircularLoader from './common/components/loader/CircularLoader';
import Loadable from 'react-loadable';

const AppContainer = styled.div`
  font-family: 'Spirax';
`;
const ContentContainer = styled.section`
  padding: 0;
`;

const Home = Loadable({
  loader: () => import('./containers/homemain/Homemain'),
  loading: CircularLoader,
  delay: 300
});

const Search = Loadable({
  loader: () => import('./containers/searchmain/Searchmain'),
  loading: CircularLoader,
  delay: 300
});

const Movie = Loadable({
  loader: () => import('./containers/moviedetail/Moivedetail'),
  loading: CircularLoader,
  delay: 300
});

class App extends Component {
  render() {
    return (
      <AppContainer>
        <HeaderNavigation />
        <ContentContainer>
          <section className="hero">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/movie/:movieId" component={Movie} />
              <Route path="*" component={NotFound} />
            </Switch>
          </section>
        </ContentContainer>
      </AppContainer>
    );
  }
}

export default App;
