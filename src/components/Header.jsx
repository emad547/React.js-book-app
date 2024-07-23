import styles from "./Header.module.css"

function Header() {
  return (
    <header className={styles.header}>
      <h1>Book App</h1>
      <p><a href="#">Botostart</a> | React.js Full Course</p>
    </header>
  )
}

export default Header