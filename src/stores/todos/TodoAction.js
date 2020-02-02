import TodoEffect from './TodoEffect';
import ActionUtility from '../../utils/ActionUtility';

export default class TodoAction {
  static REQUEST_TODO = 'TodoAction.REQUEST_TODO';
  static REQUEST_TODO_FINISHED = 'TodoAction.REQUEST_TODO_FINISHED';

  static requestTodos() {
    return async (dispatch, getState) => {
      await ActionUtility.createThunkEffect(dispatch, TodoAction.REQUEST_TODO, TodoEffect.requestTodos);
    };
  }
}
