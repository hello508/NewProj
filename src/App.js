import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { Switch, BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

import HomeView from './views/home/home.view'
import HeaderView from './views/header/header.view'
import CardsView from './views/cards/cards.view'

import store from './store'

const App = () => (
  <Provider store={store}>
    <Router>
      <HeaderView />
      {/* <HomeView /> */}
      <Route exact path="/:tab" component={CardsView} />
      <Route path="/tabs/:tab/:groupName" component={HomeView} />
      <Route exact path="/" render={() => <Redirect to="/tabOne" />} />
    </Router>
  </Provider>
)

export default hot(module)(App)
