import { action } from 'typesafe-actions';
import { actionTypes } from '../../constants/actionTypes';

export const mapViewActions = {
  initMap: (container: string) => action(actionTypes.INIT_MAP, container),
  toggleVisibleLayer: (id: number) =>
    action(actionTypes.TOGGLE_VISIBLE_LAYER, id),
};
