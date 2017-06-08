import * as actions from './constants';

export default function todos(state, action) {
  switch (action.type) {
  case actions.ADD_TODO:
    return {
      todos: [
        ...state.todos,
        {
          name: action.payload,
          completed: false
        }
      ]
    };
  case actions.REMOVE_TODO: //broke
    return {
      todos: {
        name: action.payload,
        completed: true
      }
    };
  default:
    return state;
  }
}