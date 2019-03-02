import * as reducer from '../reducers/post.reducer';

export const getEntities = (state: reducer.State) => {
  return state.entities;
};
