// provides info on action creators and reducer state

declare module 'MyTypes' {
  import { StateType, ActionType } from 'typesafe-actions';
  // 1 for reducer, 1 for action creators
  export type ReducerState = StateType<
    typeof import('../reducers/mapview/reducer')
    // typeof import('../reducers/mapview/visibleLayers').default
  >;
  export type RootAction = ActionType<
    typeof import('../reducers/mapview/actions')
  >;
}
