import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


// const reducer = combineReducers({
//   user.Login: userLoginReducer,
// })

import thunk from 'redux-thunk';
import { userLoginReducer } from './reducers/userReducers';
// import { userLoginReducer } from './reducers/userReducers';
const reducer = combineReducers({
  userLogin: userLoginReducer,
})

const initialState = {};

const middlewere =[thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewere))
);

export default store;