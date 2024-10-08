// Redux State Slice
// colour change on hover
// here we change the INITIAL STATE 
// and then send it to other components 

import { createSlice } from '@reduxjs/toolkit'

export const dishesSlice = createSlice({
    name: 'dishes',
    initialState: {
        selectedCategory: 'ITALIAN'
    },

  
  reducers: {
    filterCategory: (state, action) => {
        state.selectedCategory = action.payload;
    }
  },
})

export const getSelectedCategory = state => state.dishes.selectedCategory;
export const { filterCategory } = dishesSlice.actions;
export default dishesSlice.reducer