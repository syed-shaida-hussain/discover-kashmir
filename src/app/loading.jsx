import React from 'react'
import styles from "./homepage.module.css"

const Loading = () => {
  return (
    <div className={styles.loader}>Loading....
        <p>Hopefully not for so long :)</p>
    </div>
  )
}

export default Loading