import { BaseModel } from 'sjs-base-model';

export default class TodoModel extends BaseModel {
  userId = 0;
  id = 0;
  title = '';
  completed = false;

  /*
   * Client-Side properties (Not from API)
   */

  constructor(data) {
    super();

    this.update(data);
  }
}
