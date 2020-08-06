import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import environment from 'environment';
import rootReducer from './reducers/_root.reducer';
import rootSaga from './sagas/_root.saga';

export default function rootStore() {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [
    environment.isDevelopment ? logger : null,
    sagaMiddleware,
  ];

  const store = createStore(rootReducer(), applyMiddleware(...middleware));

  sagaMiddleware.run(rootSaga);

  return store;
}
