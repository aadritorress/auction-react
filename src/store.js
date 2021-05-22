import { createStore, applyMiddleware, combineReducers, compose } from 'redux'


import itemReducer from './reducers/itemReducer'
import loginReducer from './reducers/loginReducer'

import thunk from "redux-thunk"

const rootReducer = combineReducers ({
  loginState: loginReducer, 
  items: itemReducer
})

const store = createStore (rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk)))

export default store 