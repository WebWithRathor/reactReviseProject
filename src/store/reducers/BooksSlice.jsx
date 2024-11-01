import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  books: [],
}

export const BookSlice = createSlice({
  name: 'Book',
  initialState,
  reducers: {
    load:(state,action)=>{
        state.books = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {load} = BookSlice.actions

export default BookSlice.reducer