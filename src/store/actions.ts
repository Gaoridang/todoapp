import { ADD_TODO, DELETE_TODO } from './types';
import { nanoid } from 'nanoid';

export const addTodo = (title: string) => ({
  type: ADD_TODO,
  payload: {
    title: title,
    id: nanoid(),
    done: false,
  },
});

export const deleteTodo = (id: string) => ({
  type: DELETE_TODO,
  id,
});
