import {configureStore} from '@reduxjs/toolkit'
import bookReducer from '../features/Books/bookSlice'
export const store = configureStore({
  reducer:{
    books:bookReducer,
  }
})