export const layerFactory = (esriModules, layer) => {
  let esriLayer = null;
  switch (layer.type) {
    case 'CSVLayer':
      esriLayer = new esriModules.CSVLayer(layer.options);
      break;
    case 'GraphicsLayer':
      esriLayer = new esriModules.GraphicsLayer(layer.options);
      break;
    case 'FeatureLayer':
      esriLayer = new esriModules.FeatureLayer(layer.options);
      break;
    case 'ImageryLayer':
      esriLayer = new esriModules.ImageryLayer(layer.options);
      break;
    case 'MapImageLayer':
      esriLayer = new esriModules.MapImageLayer(layer.options);
      break;
    case 'SceneLayer':
      esriLayer = new esriModules.SceneLayer(layer.options);
      break;
    case 'WebTiledLayer':
      esriLayer = new esriModules.WebTileLayer(layer.options);
      break;
    case 'TileLayer':
      esriLayer = new esriModules.TileLayer(layer.options);
      break;
    case 'VectorTileLayer':
      esriLayer = new esriModules.VectorTileLayer(layer.options);
      break;
    case 'WebScene':
      esriLayer = new esriModules.WebScene(layer.options);
      break;
    case 'WebMap':
      esriLayer = new esriModules.WebMap(layer.options);
      break;
    default:
      console.warn('No matching layer type for layer', layer);
  }

  return esriLayer;
};
