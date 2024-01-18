import { createSlice } from "@reduxjs/toolkit";

const initialTodoListState = {
  items: ["Finish learning how to use Redux!", "Get a job as a developer!"],
  tasksCompleted: 0,
};

const todoListSlice = createSlice({
  name: `todolist`,
  initialState: initialTodoListState,
  reducers: {
    addItem: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    removeItem: (state, action) => {
      const tempArray = state.items.filter((item) => action.payload !== item);
      return {
        ...state,
        items: tempArray,
      };
    },
    increaseCompleted: (state, action) => {
      return {
        ...state,
        tasksCompleted: state.tasksCompleted + action.payload,
      };
    },
    decreaseCompleted: (state, action) => {
      return {
        ...state,
        tasksCompleted: state.tasksCompleted - action.payload,
      };
    },
  },
});

export const { addItem, removeItem } = todoListSlice.actions;
export default todoListSlice.reducer;
