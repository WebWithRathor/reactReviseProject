import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  book: null,
};

export const BookSlice = createSlice({
  name: "Book",
  initialState,
  reducers: {
    load: (state, action) => {
      state.books = action.payload;
    },
    loadBook: (state, action) => {
      state.book = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { load , loadBook } = BookSlice.actions;

export default BookSlice.reducer;
