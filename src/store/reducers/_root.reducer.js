import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import userReducer from './user.reducer';

export default function rootReducer(history) {
  const reducerMap = {
    user: userReducer,
    router: connectRouter(history),
  };

  return combineReducers(reducerMap);
}
