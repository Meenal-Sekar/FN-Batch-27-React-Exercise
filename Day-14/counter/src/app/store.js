import { configureStore } from "@reduxjs/toolkit";

import counterReducer from '../features/counterSlice'

export const brindha = configureStore({
  reducer: {
    counter: counterReducer
  }
});