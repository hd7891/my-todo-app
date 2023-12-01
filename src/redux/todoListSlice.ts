import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodoItem } from '../interface';
import type { RootState } from './store';

export type TodoListSlice = {
  todoList: ITodoItem[];
};

const initialState: TodoListSlice = {
  todoList: [],
};

export const TodoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    updateTodoList: (state, action: PayloadAction<ITodoItem[]>) => {
      state.todoList = action.payload;
    },
    addNewTodo: (state, action: PayloadAction<ITodoItem>) => {
      state.todoList = [action.payload, ...state.todoList];
      // This will make the new Item appear on top
    },
  },
});
export const { updateTodoList, addNewTodo } = TodoListSlice.actions;

export const selectTodoList = (state: RootState) => state.todo.todoList;

export default TodoListSlice.reducer;
