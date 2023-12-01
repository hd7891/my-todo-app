import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilterStatus,
  setFilterStatus,
} from '../../redux/filterStatusSlice';
import styles from './filter.module.css';

const Filter = () => {
  const filterStatus = useSelector(selectFilterStatus);
  const dispatch = useDispatch();

  const handleClickStatus = (status) => {
    dispatch(setFilterStatus(status));
  };
  return (
    <div>
      <span className={styles['text']}>Show</span>
      <span
        className={
          filterStatus === 'ALL' ? styles['active'] : styles['inactive']
        }
        onClick={() => handleClickStatus('ALL')}
      >
        All
      </span>
      <span className={styles['divider']}>|</span>
      <span
        className={
          filterStatus === 'DONE' ? styles['active'] : styles['inactive']
        }
        onClick={() => handleClickStatus('DONE')}
      >
        Done
      </span>
      <span className={styles['divider']}>|</span>
      <span
        onClick={() => handleClickStatus('UNDONE')}
        className={
          filterStatus === 'UNDONE' ? styles['active'] : styles['inactive']
        }
      >
        Undone
      </span>
      <span className={styles['text']}>Items</span>
    </div>
  );
};

export default Filter;
