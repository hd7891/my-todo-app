import { useDispatch, useSelector } from 'react-redux';
import { ITodoItem } from '../../interface';
import { selectFilterStatus } from '../../redux/filterStatusSlice';
import { selectTodoList, updateTodoList } from '../../redux/todoListSlice';
import TodoItem from '../TodoItem';
import styles from './item-list.module.css';

const ItemList = () => {
  const todoList = useSelector(selectTodoList);
  const filterStatus = useSelector(selectFilterStatus);
  const dispatch = useDispatch();

  const handleDoneTodo = (id: string) => {
    const newTodoList: ITodoItem[] = todoList.map((item) => {
      if (item.id === id) {
        if (item.status === 'UNDONE') return { ...item, status: 'DONE' };
        else return { ...item, status: 'UNDONE' };
      } else return item;
    });
    dispatch(updateTodoList(newTodoList));
  };

  return (
    <div className={styles['wrapper']}>
      {todoList
        ?.filter((item) =>
          filterStatus !== 'ALL' ? item.status === filterStatus : item
        )
        .map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => handleDoneTodo(item.id)}
              className={styles['todo-item']}
            >
              <TodoItem title={item.title} status={item.status} id={item.id} />
            </div>
          );
        })}
    </div>
  );
};

export default ItemList;
