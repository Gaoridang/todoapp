import { ADD_TODO, Actions, DELETE_TODO } from './types';
import { Todo } from './types';

const initialState: Todo[] = [];

export const todosReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};
