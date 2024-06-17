import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import "./booklist.css"
import { addToBookShelf } from '../../features/Books/bookSlice'
import Shimmer from '../shimmer/Shimmer'
import { Toaster } from 'react-hot-toast'
const BookList = () => {
const dispatch = useDispatch()
const {booksInfo,isLoading,errorMessage} = useSelector(store => store.books)
console.log(booksInfo,isLoading,errorMessage)
const bookShelfHandler = (version) => {
  
  if(!version) return "no version as parameter"
  dispatch(addToBookShelf(version))
}
if(isLoading){
  return(
    <div className=''>
    
  <Shimmer/>
         
    
    
     </div>
  )
}
if(booksInfo?.length === 0){
  return(<div className='center-text'>
  No results found

  </div>)
}
  return (
    
    ( booksInfo?.length)? 
    <div className='booklist'>
      {
        booksInfo.map(book => 
        <div key={book.
          _version_} className='booklist_book'>
            <div className='booklist_book_info'>
            <h2>Book Title : {book.title}</h2>
          <p>Edition Count : {book.edition_count}</p>

          <button onClick={() => bookShelfHandler(book.
          _version_)} className='book-btn'>Add to Bookshelf</button>

            </div>
           <Toaster/>
            </div>)
      }
      
       </div> : <div className='center-text' > Search for books    </div>
     
   
  )
}

export default BookList
