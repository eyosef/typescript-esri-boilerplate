import { loadAllModules, loadEsriCss } from '../utils/esriLoader';

import { layers } from '../config/layers.config';

import { layerFactory } from '../controllers/esriMap.util';

let _esriModules;
let _graphicsLayer;
let _homeWidget;
let _map;
let _mapview;
let _initialExtent;
let _legend;
let _basemap;

export const loadEsriResources = async () => {
  loadEsriCss();

  const esriImports = [
    'esri/symbols/SimpleMarkerSymbol',
    'esri/geometry/Point',
    'esri/core/watchUtils',
    'esri/Map',
    'esri/views/MapView',
    'esri/widgets/Legend',
    'esri/widgets/Search',
    'esri/tasks/QueryTask',
    'esri/layers/GraphicsLayer',
    'esri/Graphic',
    'esri/widgets/Sketch/SketchViewModel',
    'esri/tasks/support/Query',
    'esri/widgets/AreaMeasurement2D',
    'esri/widgets/DistanceMeasurement2D',
    'esri/geometry/geometryEngineAsync',
    'esri/geometry/geometryEngine',
    'esri/layers/CSVLayer',
    'esri/layers/GraphicsLayer',
    'esri/layers/FeatureLayer',
    'esri/layers/MapImageLayer',
    'esri/layers/TileLayer',
    'esri/layers/VectorTileLayer',
    'esri/Basemap',
    'esri/Color',
    'esri/symbols/SimpleFillSymbol',
    'esri/geometry/Point',
    'esri/symbols/PictureMarkerSymbol',
    'esri/geometry/Extent',
    'esri/widgets/BasemapGallery',
    'esri/widgets/BasemapGallery/support/LocalBasemapsSource',
    'esri/tasks/PrintTask',
    'esri/tasks/support/PrintParameters',
    'esri/tasks/support/PrintTemplate',
    'esri/widgets/Home',
    'esri/Viewpoint',
    'esri/tasks/Locator',
  ];
  _esriModules = await loadAllModules(esriImports);
};

export const initializeMap = domRef => {
  const {
    Map,
    MapView,
    GraphicsLayer,
    Basemap,
    Extent,
    Home,
    watchUtils,
    Legend,
  } = _esriModules;

  _initialExtent = new Extent({
    xmin: -8591349.995937862,
    ymin: 4691178.363632755,
    xmax: -8560851.621652117,
    ymax: 4721753.174946784,
    spatialReference: {
      wkid: 102100,
    },
  });

  const mapLayers = layers.map(layer => {
    return layerFactory(_esriModules, layer);
  });

  _map = new Map({
    basemap: 'dark-gray',
  });

  _map.addMany(mapLayers);

  _mapview = new MapView({
    container: domRef.current,
    map: _map,
    extent: _initialExtent,
  });

  _homeWidget = new Home({
    view: _mapview,
  });

  _legend = new Legend({
    view: _mapview,
  });

  _mapview
    .when(() => {
      console.log('_mapview is loaded - YAS Queen!');

      // Zoom widget position
      _mapview.ui.move(['zoom'], 'top-left');

      //add home widget
      _mapview.ui.add(_homeWidget, 'top-left');

      //add legend widget
      _mapview.ui.add(_legend, 'top-right');
    })
    .catch(error => console.log('error:', error));
};
