import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import bookReducer from "./bookSlice";
import categoryReducer from "./categorySlice";
import loginReducer from "./loginSlice";
import noteReducer from "./noteSlice";
import productReducer from "./productSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    note: noteReducer,
    book: bookReducer,
    category: categoryReducer,
    product: productReducer,
  },
});
