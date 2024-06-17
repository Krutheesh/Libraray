import { createSlice,current } from '@reduxjs/toolkit';
import { getBooks } from './bookApi';
import {toast} from "react-hot-toast"
const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('bookShelf')
    return data? JSON.parse(data):[]
  } catch (error) {
    console.log('Could not load bookshelf from local storage')
    return []
  }
}
const initialState = {
  isLoading:null,
  booksInfo:null,
  bookShelf:loadFromLocalStorage(),
  errorMessage:null
}

export const bookSlice = createSlice({
  name:"books",
  initialState,
  reducers:{
 addToBookShelf:(state,action) => {
 console.log(state.bookShelf.length)
  const isFound =state.bookShelf.length?state.bookShelf.filter(book => book._version_ === action.payload) :false

  // console.log("-----",isFound)
  // console.log(current(state.bookShelf))
  if(!isFound[0]) {
    
  const newBook = state.booksInfo.filter(book => book._version_ === action.payload);
  // console.log(current(newBook[0]))
  state.bookShelf = [...state.bookShelf,newBook[0]]
  toast.success("Added Successfully")
 }
 else{
  toast.error("Already added")
 }
  try {
    localStorage.setItem('bookShelf',JSON.stringify(state.bookShelf))
  } catch (error) {
    console.log('Could not save bookshelf to local storage')
  }

  
 }
  },
  extraReducers:(builder) => {
    builder.addCase(getBooks.pending,(state) => {
      state.isLoading=true
      state.errorMessage =false
    }).addCase(getBooks.fulfilled,(state,{payload}) => {
      state.isLoading = false;
      state.booksInfo = payload
    }).addCase(getBooks.rejected,(state,{payload}) => {
      state.isLoading=false
      state.errorMessage =payload
    })
  }

})

export const{addToBookShelf} = bookSlice.actions
export default bookSlice.reducer