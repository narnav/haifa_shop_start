import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./categoryAPI";

// State - data (init)
const initialState = {
  categories: [],
};

export const getCategoriesAsync = createAsyncThunk(
  "category/getCategories",
  async () => {
    const response = await getCategories();
    return response.data;
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},

  //   happens when async done - callback
  extraReducers: (builder) => {
    builder.addCase(getCategoriesAsync.fulfilled, (state, action) => {
      state.categories = action.payload;
      console.log(state.categories);
    });
  },
});

// export sync method
export const { logout } = categorySlice.actions;

// export any part of the state
export const selectcategories = (state) => state.category.categories;
// export the reducer to the applicaion
export default categorySlice.reducer;
