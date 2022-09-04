import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productAPI";

// State - data (init)
const initialState = {
  products: [],
};

export const getProductsAsync = createAsyncThunk(
  "product/getProducts",
  async (cat_id) => {
    const response = await getProducts(cat_id);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},

  //   happens when async done - callback
  extraReducers: (builder) => {
    builder.addCase(getProductsAsync.fulfilled, (state, action) => {
      state.products = action.payload;
      console.log(state.products);
    });
  },
});

// export sync method
export const { logout } = productSlice.actions;

// export any part of the state
export const selectProducts = (state) => state.product.products;
// export the reducer to the applicaion
export default productSlice.reducer;
