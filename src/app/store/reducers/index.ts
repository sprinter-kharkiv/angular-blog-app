import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import * as tutorialReducer from './tutorial.reducer';
import { AppState } from "../../app.state";



// export interface State {
//   tutorial: tutorialReducer.State;
// }

export const reducers: ActionReducerMap<AppState> = {
  tutorial: tutorialReducer.reducer,
};

export function logger(reducer: ActionReducer<AppState>):
  ActionReducer<AppState> {
  return function (state: AppState, action: any): AppState {
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = [logger];
