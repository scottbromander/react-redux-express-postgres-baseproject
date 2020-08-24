import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';
import reduxFreeze from 'redux-freeze';
import environment from 'environment';
import rootReducer from './reducers/_root.reducer';

export default function rootStore(initialState, history) {
  const middleware = [
    environment.isDevelopment ? logger : null,
    environment.isDevelopment ? reduxFreeze : null,
    routerMiddleware(history),
  ];

  const store = createStore(
    rootReducer(history),
    initialState,
    applyMiddleware(...middleware)
  );

  return store;
}
