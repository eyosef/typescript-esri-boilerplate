import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';

const composeEnhancers = compose;

const middlewares = [
  thunk
];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

// TO DO: refactor into TypeScript
// https://github.com/piotrwitek/react-redux-typescript-guide#store-configuration

export default store;
