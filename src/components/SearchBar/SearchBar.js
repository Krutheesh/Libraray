import React from 'react'
import { useRef } from 'react'
import {useDispatch, useSelector} from "react-redux"
import toast, { Toaster } from 'react-hot-toast';
import { getBooks } from '../../features/Books/bookApi';
import './searchbar.css'
const SearchBar = () => {
  const dispatch = useDispatch()
  const {booksInfo,isLoading,errorMessage} = useSelector(store => store.books)
  const searchInput = useRef(null)
  const searchHandler = async(e) => {
     e.preventDefault()
   if(!(searchInput?.current?.value)){
     toast.error("Please enter the book name")
   }
   else{
    dispatch(getBooks(searchInput?.current?.value))
   }
   
  }
  return (
    <div>
      <form className='search_bar' action="" onSubmit={searchHandler}>
        <input className='search_input' ref={searchInput} type="text" name="" id="" placeholder='Please Enter Book Name'/>
        <button className='search_btn' type="submit">Enter</button>
      </form>
      <Toaster />
    </div>
  )
}

export default SearchBar
