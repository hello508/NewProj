import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import NavBar from './components/NavBar/NavBar'
import SimpleTabs from './components/Tabs/Tabs'
import HomeView from './views/home/home.view'

import store from './store'

const App = () => (
  <Provider store={store}>
    <NavBar />
    <SimpleTabs />
  </Provider>
)

export default hot(module)(App)
