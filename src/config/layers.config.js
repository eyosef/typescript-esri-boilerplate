export const layers = [
  {
    type: 'FeatureLayer',
    options: {
      url:
        'https://gis.arlingtonva.us/arlgis/rest/services/public/Bike_Routes/MapServer/4',
      id: 'bike_routes',
      label: 'Bike Routes',
      visible: true,
    },
  },
  {
    type: 'FeatureLayer',
    options: {
      url: 'https://gis.arlingtonva.us/arlgis/rest/services/public/Bus_Routes/MapServer/2',
      id: 'bus_routes',
      label: 'Bike Routes',
      visible: true
    }
  }
];
