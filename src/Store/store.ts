// this is store.ts
import { configureStore } from '@reduxjs/toolkit';
// import { counterSlice } from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    // Add other slices here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;