import React, { Component, createRef } from 'react';

import { initializeMap, loadEsriResources } from '../controllers/mapController';

type MapViewProps = {};
type MapViewState = {};

class MapView extends Component<MapViewProps, MapViewState> {
  private mapview = createRef<HTMLDivElement>();

  componentDidMount() {
    loadEsriResources().then(() => {
      initializeMap(this.mapview);
    });
  }

  render() {
    return (
      <div className='mapview-container'>
        <div className='mapview' ref={this.mapview} />
      </div>
    );
  }
}

export default MapView;
