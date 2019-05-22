import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HomeView from './views/home/home.view';
import HeaderView from './views/header/header.view';
import CardsView from './views/cards/cards.view';

import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <HeaderView />
      {/* <HomeView /> */}
      <Route exact path="/" component={CardsView} />
      <Route path="/:tab/:groupName/:filter?" component={HomeView} />
    </Router>
  </Provider>
);

export default hot(module)(App);
