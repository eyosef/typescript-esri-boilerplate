// TO DO: refactor into TypeScript
// https://github.com/piotrwitek/react-redux-typescript-guide#store-configuration

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/mapview/visibleLayers';
// import esriMiddleware from 'middlewares/esriMapview';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// // Configure middleware used by redux
const middlewares = [
  // esriMiddleware
];

// Environment specific middlewares configuration - constant from webpack.DefinePlugin
// if (ENV === 'development') {
//   const { logger } = require('redux-logger');
//   middlewares.push(logger);
// }

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export default store;
