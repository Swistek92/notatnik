import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { } from "./reducers/notesReducers";
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';

import { noteListReducer } from './reducers/notesReducers';


const reducer = combineReducers({
  userLogin: userLoginReducer,
 userRegister: userRegisterReducer,
 noteList: noteListReducer,
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