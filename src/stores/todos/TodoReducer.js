import TodoAction from './TodoAction';
import BaseReducer from '../../utils/BaseReducer';

export default class TodoReducer extends BaseReducer {
  initialState = [];

  [TodoAction.REQUEST_TODO_FINISHED](state, action) {
    return [...action.payload];
  }
}
