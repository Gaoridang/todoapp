import { ADD_TODO, DELETE_TODO } from './types';

let nextId = 1;

export const addTodo = (title: string) => ({
  type: ADD_TODO,
  payload: {
    title: title,
    id: nextId++,
    done: false,
  },
});

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  id,
});
