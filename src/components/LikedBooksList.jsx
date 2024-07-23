import styles from "./LikedBooksList.module.css"

import LikedBookItem from "./LikedBookItem"

function LikedBooksList({ likedBooks }) {
  return (
    <div className={styles.likedBooksContainer}>
      <h3 className={styles.likedBooksTitle}>Favorites</h3>
      {
        likedBooks.map(book => <LikedBookItem key={book.id} bookData={book} />)
      }
    </div>
  )
}

export default LikedBooksList