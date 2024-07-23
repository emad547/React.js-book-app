import { useState } from "react"

import styles from "./BooksContainer.module.css"

import books from "../constants/mockData"

import searchIcon from "../assets/search.svg"

import BooksList from "./BooksList"
import LikedBooksList from "./likedBooksList"

// let likedBooksArray = []

// if (localStorage.getItem("likedBooks")) {
//   const stringBooks = localStorage.getItem("likedBooks")
//   likedBooksArray = [...JSON.parse(stringBooks)]
// }

// console.log(likedBooksArray);


function BooksContainer() {
  const [searchText, setSearchText] = useState("")

  const [likedBooks, setLikedBooks] = useState([])

  function bookLikeHandler (id) {
    if (likedBooks.length) {
      const isFindBook = likedBooks.find(book => book.id === id)
      if (isFindBook) {
        const filtredBooks = likedBooks.filter(book => book.id !== id)
        setLikedBooks(filtredBooks)
        // if (localStorage.getItem("likedBooks")) {
        //   const stringBooks = localStorage.getItem("likedBooks")
        //   console.log(JSON.parse(stringBooks));
        // }
        return;
      }
    }

    const currentBook = books.find(book => book.id === id)

    const newLikedBook = {
      id: currentBook.id,
      image: currentBook.image,
      title: currentBook.title
    }

    // likedBooksArray.push(newLikedBook)

    // localStorage.setItem("likedBooks", JSON.stringify(likedBooksArray))

    setLikedBooks(prevBooks => [...prevBooks, newLikedBook])
  }

  function searchHandler (event) {
    setSearchText(event.target.value)
  }

  return (
    <>
      <div className={styles.searchContainer}>
        <input type="text" className={styles.searchInput} placeholder="Search..." value={searchText} onChange={searchHandler} />
        <button className={styles.searchBtn}><img src={searchIcon} alt="search" /></button>
      </div>
      <div className={`${likedBooks.length && styles.booksContainer}`}>
        <BooksList searchText={searchText} bookLikeHandler={bookLikeHandler} likedBooks={likedBooks} />
        {
          likedBooks.length !== 0 && <LikedBooksList likedBooks={likedBooks} />
        }
      </div>
    </>
  )
}

export default BooksContainer