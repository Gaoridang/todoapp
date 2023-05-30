import { Action } from 'redux';

export interface Todo {
  title: string;
  id: number;
  done: boolean;
}

export type AppState = {
  todos: Todo[];
};

// action types
export const ADD_TODO = 'todos/ADD_TODO';

export type AddTodoAction = Action<typeof ADD_TODO> & {
  type: string;
  payload: Todo;
};

// actions
export type Actions = AddTodoAction;
