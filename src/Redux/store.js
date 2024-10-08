import { configureStore } from '@reduxjs/toolkit';
import dishes from './dishesSlice';
import cartSlice from './cartSlice';

export const store = configureStore({
  reducer: {
    // our own reducer here (dishes: dishes)
    dishes,
    cartSlice
  },
})