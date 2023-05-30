import { Action } from 'redux';

export interface Todo {
  title: string;
  id: string;
  done: boolean;
}

export type AppState = {
  todos: Todo[];
};

// action types
export const ADD_TODO = 'todos/ADD_TODO';
export const DELETE_TODO = 'todos/DELETE_TODO';

export type AddTodoAction = Action<typeof ADD_TODO> & {
  type: string;
  payload: Todo;
};

export type DeleteTodoAction = Action<typeof DELETE_TODO> & {
  id: string;
};

// actions
export type Actions = AddTodoAction | DeleteTodoAction;
