import * as reducer from '../reducers/post.reducer';

export const getEntities = (state: reducer.State) => {
  console.log('seelctors', state)
  return state.entities;
};
