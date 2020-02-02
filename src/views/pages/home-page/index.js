import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';
import TodoAction from '../../../stores/todos/TodoAction';
import { selectRequesting } from '../../../selectors/requesting/RequestingSelector';
import { selectTodos } from '../../../selectors/todos/TodosSelector';
import Card from './components/card';

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TodoAction.requestTodos());
  }, [dispatch]);

  const isRequesting = useSelector((state) => selectRequesting(state, [TodoAction.REQUEST_TODO]));
  const todos = useSelector(selectTodos);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>TODOS</h1>

      {isRequesting ? (
        <div>Loading todos...</div>
      ) : (
        <div className={styles.items}>
          {todos.map((todo) => {
            return <Card item={todo} key={todo.id} />;
          })}
        </div>
      )}
    </div>
  );
};
