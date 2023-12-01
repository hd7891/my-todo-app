import { configureStore } from '@reduxjs/toolkit';
import TodoListReducer from './todoListSlice';
import FilterStatusReducer from './filterStatusSlice';

export const store = configureStore({
  reducer: {
    todo: TodoListReducer,
    filterStatus: FilterStatusReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
