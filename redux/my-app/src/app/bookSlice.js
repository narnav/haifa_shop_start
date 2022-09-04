import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { orderBook, addBook, getAllBooks, getOrders } from "./bookAPI";

// State - data (init)
const initialState = {
  books: [],
  error_msg: "",
};
// async (1)
// simple async method (component can call it...)
export const doOrderAsync = createAsyncThunk(
  "book/signin",
  async (orderData) => {
    const response = await orderBook(orderData);
    return response.data;
  }
);
export const doGetAllOrdersAsync = createAsyncThunk(
  "book/getOrders",
  async (token) => {
    // console.log(token);
    const response = await getOrders(token);
    return response;
  }
);

export const doAddBookAsync = createAsyncThunk(
  "book/addBook",
  async (bookData) => {
    const response = await addBook(bookData);
    return response;
  }
);
export const doGetAllBooksAsync = createAsyncThunk(
  "book/getAllBooks",
  async () => {
    const response = await getAllBooks();
    return response.data;
  }
);

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  //  async  (3)
  //   happens when async done - callback
  extraReducers: (builder) => {
    builder
      .addCase(doAddBookAsync.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      .addCase(doGetAllBooksAsync.fulfilled, (state, action) => {
        state.books = action.payload;
      })
      .addCase(doGetAllOrdersAsync.fulfilled, (state, action) => {
        console.log(action.payload);
      });
  },
});
// doGetAllOrdersAsync
// export const {  } = bookSlice.actions;
export const selectBooks = (state) => state.book.books;
export default bookSlice.reducer;
