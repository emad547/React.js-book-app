import styles from "./BooksList.module.css"

import books from "../constants/mockData"

import BookItem from "./BookItem"

function BooksList({ searchText, bookLikeHandler, likedBooks }) {
  console.log(likedBooks);

  function filterBooks () {
    const filteredBooks = books.filter((book) => {
      return book.title.toLowerCase().includes(searchText) ||
             book.author.toLowerCase().includes(searchText) ||
             book.country.toLowerCase().includes(searchText) ||
             book.language.toLowerCase().includes(searchText) ||
             book.pages.toString().toLowerCase().includes(searchText)
    })

    return filteredBooks
  }

  function isBookLiked (id) {
    if (likedBooks.length) {
      const findedBook = likedBooks.find(book => book.id === id)
      if (findedBook) {
        return true
      } else {
        return false
      }
    } else {
      return false;
    }
  }

  // !!!!!!------ set the like for the books if them have a like -------!!!!
  return (
    <div className={styles.booksContainer}>
      {
        filterBooks().map(book => <BookItem key={book.id} bookData={book} bookLikeHandler={bookLikeHandler} isBookLiked={isBookLiked} />)
      }
    </div>
  )
}

export default BooksList