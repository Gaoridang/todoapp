import { ADD_TODO, Actions } from './types';
import { Todo } from './types';

const initialState: Todo[] = [];

export const todosReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};
