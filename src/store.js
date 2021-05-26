import { createStore, applyMiddleware, combineReducers, compose  } from 'redux'
import itemReducer from './reducers/itemReducer'
import loginReducer from './reducers/loginReducer'
import userReducer from './reducers/userReducer'
import bidReducer from './reducers/bidReducer'
import thunk from "redux-thunk"

const rootReducer = combineReducers ({
  loginState: loginReducer, 
  items: itemReducer,
  user: userReducer, 
  bids: bidReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store 