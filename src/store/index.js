import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { homeReducer } from '../views/home/home.redux'
import { cardReducer } from '../views/cards/cards.redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({
    home: homeReducer,
    cards: cardReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
)

export default store
