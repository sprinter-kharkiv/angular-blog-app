import * as actions from './../actions/post.actions';
import { PostModel } from "../models/post.model";

export interface State {
  entities: PostModel[];
}

export const initialState: State = {
  entities: [],
};

export function reducer(state = initialState, action: actions.Action) {
  switch (action.type) {
    case actions.GET_POST: {
      return state;
    }

    case actions.GET_POST_SUCCESS: {
      return {
        ...state,
        ...action.payload
      };
    }

    case actions.GET_POST_FAILED: {
      return state;
    }

    default:
      return state;
  }
}
