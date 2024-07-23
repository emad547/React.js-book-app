import styles from "./Search.module.css"

import search from "../assets/search.svg"

function Search() {
  return (
    <div className={styles.searchContainer}>
      <input type="text" className={styles.searchInput} placeholder="Search..." />
      <button className={styles.searchBtn}><img src={search} alt="search" /></button>
    </div>
  )
}

export default Search