import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import './App.css';
import 'bulma/css/bulma.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeaderNavigation from './containers/headernavigation/HeaderNavigation';
import asyncComponent from './AsyncComponent';
import NotFound from './components/notfound/NotFound';

const AppContainer = styled.div`
  font-family: 'Spirax';
`;

const ContentContainer = styled.section`
  padding: 0;
`;

const Home = asyncComponent(() =>
  import('./containers/homemain/Homemain').then(module => module.default)
);

const Search = asyncComponent(() =>
  import('./containers/searchmain/Searchmain').then(module => module.default)
);

class App extends Component {
  render() {
    return (
      <AppContainer>
        <HeaderNavigation />
        <ContentContainer>
          <section className="hero">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/search" component={Search} />
              <Route path="*" component={NotFound} />
            </Switch>
          </section>
        </ContentContainer>
      </AppContainer>
    );
  }
}

export default App;
