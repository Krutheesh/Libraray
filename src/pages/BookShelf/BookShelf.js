import React from 'react'
import '../../components/BooksList/booklist.css'
import { useDispatch,useSelector } from 'react-redux'
import './bookshelf.css'
const BookShelf = () => {
  const {bookShelf} = useSelector(store => store.books)
  return (
    <div className='bookshelf-container'>
      
      <h1 className='bookshelf-heading'>MY BOOKSHELF</h1>
      <div className='booklist'>
      {
        bookShelf?.length?bookShelf.map(book => 
          <div key={book.
            _version_} className='booklist_book'>
              <div className='booklist_book_info'>
              <h2>Book Title : {book.title}</h2>
            <p>Edition Count : {book.edition_count}</p>
  
            
  
              </div>
             
              </div>
            ):<div> No Books present </div>
      }
    </div>
    </div>
  )
}

export default BookShelf
