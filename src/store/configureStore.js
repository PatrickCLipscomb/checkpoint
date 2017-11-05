import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux'
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import createHistory from 'history/createBrowserHistory'

export const history = createHistory();
const enhancers = [];
const middleWare = [
  thunk,
  routerMiddleware(history),
  createLogger
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleWare),
  ...enhancers
);

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        composedEnhancers
    );
}
