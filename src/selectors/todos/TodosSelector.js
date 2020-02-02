import { createSelector } from 'reselect';

export class TodosSelector {
  static selectTodos(todos) {
    return todos.map(({ userId, ...rest }) => {
      return rest;
    });
  }
}

export const selectTodos = createSelector((state) => state.todos, TodosSelector.selectTodos);
