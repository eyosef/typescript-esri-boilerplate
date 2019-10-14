import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';

import store from '../store/store';

import 'regenerator-runtime/runtime';

import MapView from './MapView';

import '../styles/index.css';

type AppProps = {};
type AppState = {};

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <Provider store={store}>
        <div>
          <MapView />
        </div>
      </Provider>
    );
  }
}

export default hot(module)(App);
