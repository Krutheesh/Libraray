import {createAsyncThunk} from "@reduxjs/toolkit";


export const getBooks = createAsyncThunk('books/getBooks', async(query,thunkApi) => {
  try {
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
    const res = await response.json()
    console.log(res)
    
    return res.docs
  } catch (error) {
    console.log(error)
    console.log(error.message)
    return thunkApi.rejectWithValue(error.message)
  }
})