import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import * as tutorialReducer from './tutorial.reducer';
import * as postReducer from './post.reducer';




export interface State {
  // tutorial: tutorialReducer.State;
  post: postReducer.State;
  // readonly tutorial: Tutorial[];
}


export const reducers: ActionReducerMap<State> = {
  // tutorial: tutorialReducer.reducer,
  post: postReducer.reducer,
};

export function logger(reducer: ActionReducer<State>):
  ActionReducer<State> {
  return function (state: State, action: any): State {
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = [logger];
