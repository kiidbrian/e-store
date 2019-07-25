import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware];

  if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');

    middlewares.push(logger);
  }

  const store = compose(applyMiddleware(...middlewares))(createStore)(reducers);
  return store;
}