import { combineReducers } from 'redux';

export default function rootReducer() {
  const reducerMap = {
    // error: errorReducer,
  };

  return combineReducers(reducerMap);
}
