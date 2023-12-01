import { FC } from 'react';
import AddTodoForm from './components/AddTodoForm';
import Filter from './components/Filter';
import ItemList from './components/ItemList';
import './style.css';
import styles from './app.module.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div className={styles['wrapper']}>
      <AddTodoForm />
      <Filter />
      <ItemList />
    </div>
  );
};
