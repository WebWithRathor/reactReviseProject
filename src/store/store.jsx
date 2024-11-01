import { configureStore } from '@reduxjs/toolkit'
import BookSlice  from './reducers/BooksSlice'

export const store = configureStore({
  reducer: {
    BookSlice
  },
})