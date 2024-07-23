import { useState } from "react"

import styles from "./BookItem.module.css"

import heartFill from "../assets/suit-heart-fill.svg"
import heart from "../assets/suit-heart.svg"

function BookItem({ bookData, bookLikeHandler, isBookLiked }) {

  
  const { id, title, author, image, language, pages } = bookData
  // console.log(isBookLiked(id));

  const [isLiked, setIsLiked] = useState(false)

  // if (isBookLiked(id)) setIsLiked(true)

  function isLikedHandler () {
    setIsLiked(isLiked => !isLiked)
    // localStorage.setItem({id: id, isLiked: isLiked})
    bookLikeHandler(id)
  }

  return (
    <div className={styles.bookContainer}>
      <div className={styles.infoContainer}>
        <img src={image} alt="book-image" />
        <div className={styles.bookInfo}>
          <p className={styles.bookTitle}>{title}</p>
          <p className={styles.bookAuthor}>{author}</p>
          <p><span>{language}</span> {pages} pages</p>
        </div>
      </div>
      <button className={styles.likeBtn} onClick={isLikedHandler}><img src={isLiked ? heartFill : heart} alt="like" /></button>  
    </div>
  )
}

export default BookItem