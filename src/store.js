import { createStore, applyMiddleware, combineReducers } from 'redux'
import itemReducer from './reducers/itemReducer'
import loginReducer from './reducers/loginReducer'
import userReducer from './reducers/userReducer'
// import bidReducer from './reducers/bidReducer'
import thunk from "redux-thunk"

const rootReducer = combineReducers ({
  loginState: loginReducer, 
  items: itemReducer,
  user: userReducer, 
  // bid: bidReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store 