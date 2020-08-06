import { combineReducers } from 'redux';
import userReducer from './user.reducer';

export default function rootReducer() {
  const reducerMap = {
    user: userReducer,
  };

  return combineReducers(reducerMap);
}
