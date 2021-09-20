import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


// const reducer = combineReducers({
//   user.Login: userLoginReducer,
// })

import thunk from 'redux-thunk';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';
// import { userLoginReducer } from './reducers/userReducers';
const reducer = combineReducers({
  userLogin: userLoginReducer,
 userRegister: userRegisterReducer,
})

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
userLogin: { userInfo: userInfoFromStorage },

};

const middlewere =[thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewere))
);

export default store;