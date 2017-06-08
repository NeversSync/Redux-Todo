import * as actions from './actions';

export function reducer(state, action) {
  switch (action.type) {
  case actions.ADD_TODO:
    return {
      ...state,
      todo: action.payload
    };
  case actions.REMOVE_TODO:
    return {
      ...state,
      todo: action.payload
    };
  default:
    return state;
  }
}