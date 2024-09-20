import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../slices/todoSlice";

export const store = configureStore({
  reducer: todoSlice,
});

// import todoReducer from "../slices/todoSlice";

// const store = configureStore({
//   reducer: todoReducer,
// });

export default store;
