import { createStore, applyMiddleware, combineReducers, compose  } from 'redux'
import itemReducer from './reducers/itemReducer'
import loginReducer from './reducers/loginReducer'
import userReducer from './reducers/userReducer'
import bidReducer from './reducers/bidReducer'
import charityReducer from './reducers/charityReducer'
import thunk from "redux-thunk"

const rootReducer = combineReducers ({
  loginState: loginReducer, 
  items: itemReducer,
  user: userReducer, 
  bids: bidReducer,
  charities: charityReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store 