import environment from 'environment';
// import HttpUtility from '../../utils/HttpUtility';
import EffectUtility from '../../utils/EffectUtility';
// import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';
import TodoModel from './models/TodoModel';

export default class TodoEffect {
  static requestTodos = async () => {
    const endpoint = environment.api.todo.replace(':todoId', '');
    return EffectUtility.getToModel(TodoModel, endpoint);
  };
}
