import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'

import HomeView from './views/home/home.view'
import HeaderView from './views/header/header.view'
import CardsView from './views/cards/cards.view'

import store from './store'

const App = () => (
  <Provider store={store}>
    <HeaderView />
    {/* <HomeView /> */}
    <CardsView />
  </Provider>
)

export default hot(module)(App)
