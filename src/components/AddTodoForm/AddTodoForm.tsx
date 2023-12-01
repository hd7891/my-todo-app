import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ITodoItem } from '../../interface';
import { addNewTodo } from '../../redux/todoListSlice';
import styles from './add-todo-form.module.css';

const AddTodoForm = () => {
  const dispatch = useDispatch();
  const [newTodoValue, setNewTodoValue] = useState('');
  const handleInput = (event) => {
    setNewTodoValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue !== '') {
      const newTodo: ITodoItem = {
        title: newTodoValue,
        id: Date.now().toString(),
        // We can use uuid to generate random ID, but in this scope I think we can use timestamp for unique ID
        status: 'UNDONE',
      };
      dispatch(addNewTodo(newTodo));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={newTodoValue}
        onChange={handleInput}
        className={styles['input']}
      />
      <input
        type="submit"
        value="Add new Todo"
        className={styles['button-submit']}
      ></input>
    </form>
  );
};

export default AddTodoForm;
