import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';
import reduxFreeze from 'redux-freeze';
import environment from 'environment';
import rootReducer from './reducers/_root.reducer';
// import rootSaga from './sagas/_root.saga';

export default function rootStore(initialState, history) {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [
    environment.isDevelopment ? logger : null,
    environment.isDevelopment ? reduxFreeze : null,
    routerMiddleware(history),
    // sagaMiddleware,
  ];

  const store = createStore(
    rootReducer(history),
    initialState,
    applyMiddleware(...middleware)
  );

  // sagaMiddleware.run(rootSaga);

  return store;
}
