import styles from "./LikedBookItem.module.css"

function LikedBookItem({ bookData: { id, image, title } }) {
  return (
    <div className={styles.likedBookContainer}>
      <img src={image} alt="liked book" className={styles.likedBookImg} />
      <p className={styles.likedBookTitle}>{title}</p>
    </div>
  )
}

export default LikedBookItem