import { configureStore } from "@reduxjs/toolkit";

import groceryReducer from '../feature/grocerySlice'

export const store = configureStore({
  reducer: {
    grocery: groceryReducer
  }
});