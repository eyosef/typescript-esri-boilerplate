import { loadModules, loadCss } from 'esri-loader';

const ARCGIS_URL = 'https://js.arcgis.com/4.11/';

export const loadAllModules = modules => {
  return new Promise((resolve, reject) => {
    loadModules(modules, { url: ARCGIS_URL })
      .then(results => {
        const regex = new RegExp(/[^\/]*$/);
        const allModulesObject = {};
        modules.forEach((module, i) => {
          allModulesObject[module.match(regex)] = results[i];
        });
        resolve(allModulesObject);
      })
      .catch(error => reject(error));
  });
};

export const loadEsriCss = () => {
  loadCss(`${ARCGIS_URL}esri/css/main.css`);
};
