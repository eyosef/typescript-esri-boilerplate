import * as MyTypes from '../../constants/actionTypesModel';
import { actionTypes } from '../../constants/actionTypes';

interface visibleLayersModel {
  id: Array<number>;
}

export const initialState: visibleLayersModel = {
  id: [],
};

// TO DO: https://medium.com/better-programming/react-redux-with-typescript-7ff678bc17ab

export default (
  state: visibleLayersModel = initialState,
  action: MyTypes.RootAction,
) => {
  switch (action.type) {
    case actionTypes.TOGGLE_VISIBLE_LAYER:
      debugger;
      break;
    // if (state.indexOf(action.id) === -1) {
    //   return [...state, action.id];
    // }
    // return [
    //   ...state.slice(0, state.indexOf(action.id)),
    //   ...state.slice(state.indexOf(action.id) + 1),
    // ];
    default:
      return state;
  }
};
