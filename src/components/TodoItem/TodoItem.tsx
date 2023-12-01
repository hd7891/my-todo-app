import { ITodoItem } from '../../interface';
import styles from './todo-item.module.css';

const TodoItem = ({ title, id, status }: ITodoItem) => {
  return (
    <div
      className={
        status === 'DONE' ? styles['item-done'] : styles['item-undone']
      }
      id={id}
    >
      {title}
    </div>
  );
};

export default TodoItem;
