import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

// State - data (init)
const initialState = {
  value: 0,
  status: 'idle',
};
// async (1)
// simple async method (component can call it...)
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: { 
    //   sync methods
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
//  async  (3)
//   happens when async done - callback
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

// export sync method
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export any part of the state
export const selectCount = (state) => state.counter.value;
// export the reducer to the applicaion
export default counterSlice.reducer;
