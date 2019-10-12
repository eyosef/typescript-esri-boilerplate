import React, { Component } from 'react';
import 'regenerator-runtime/runtime';

import MapView from './MapView';

import '../styles/index.css';

type AppProps = {};
type AppState = {};

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <MapView />
      </div>
    );
  }
}

export default App;
