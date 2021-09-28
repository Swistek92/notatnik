import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { noteCreateReducer, noteDeleteReducer, noteUpdateReducer } from "./reducers/notesReducers";
import { userLoginReducer, userRegisterReducer, userUpdateReducer } from './reducers/userReducers';

import { noteListReducer } from './reducers/notesReducers';


const reducer = combineReducers({
  userLogin: userLoginReducer,
 userRegister: userRegisterReducer,
 noteList: noteListReducer,
 noteCreate: noteCreateReducer,
 noteUpdate: noteUpdateReducer,
 noteDelete: noteDeleteReducer,
 userUpdate: userUpdateReducer,
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