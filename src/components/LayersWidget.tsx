import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import MyTypes from '../constants/typesModule';
import { mapViewActions } from '../reducers/mapview/actions';

import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

interface StateToProps {}

interface DispatchToProps {
  toggleVisibleLayer: (id: number) => void;
}

type LayersWidgetProps = {
  layers: any[];
};

type LayersWidgetState = {};

class LayersWidget extends Component<LayersWidgetProps, LayersWidgetState> {
  componentDidMount() {
    // load layers into layer widget component
    // console.log('componentDidMount()', this.props)
  }

  toggleLayer = (layer: any) => {
    const { toggleVisibleLayer, layers } = this.props;

    layer.visible = !layer.visible;
    toggleVisibleLayer(layers.filter(l => l.visible).map(l => l.title));

    // TO DO: Update reducer logic in mapview/reducer.tsx
    // TO DO: Create helper function in esriMapController.js
    // that updates map with toggled layers
    debugger;
  };

  render() {
    const { layers } = this.props;
    const { toggleLayer } = this;

    return (
      <div className='layersWidget-wrapper'>
        <h2>LayersWidget</h2>
        {layers.length &&
          layers.map((layer: any) => {
            return (
              <div className='layers-toggle' key={layer.id}>
                <FormControlLabel
                  key={layer.title}
                  control={
                    <Switch
                      size='medium'
                      color='primary'
                      // checked={}
                      onChange={() => toggleLayer(layer)}
                    />
                  }
                  label={layer.title}
                />
              </div>
            );
          })}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps => ({
  toggleVisibleLayer: layer =>
    dispatch(mapViewActions.toggleVisibleLayer(layer)),
});

// const mapDispatchToProps = (dispatch: MyTypes.RootAction) => {
//   bindActionCreators(
//     { toggleVisibleLayer: mapViewActions.toggleVisibleLayer },
//     dispatch
//   );
// };

const mapStateToProps = (state: MyTypes.ReducerState) => ({
  layers: state.mapViewLayers,
});

export default connect<StateToProps, DispatchToProps, void>(
  mapStateToProps,
  mapDispatchToProps
)(LayersWidget);
