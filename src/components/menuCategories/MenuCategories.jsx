import React from 'react';
import styles from "./menuCategories.module.css"
import Link from 'next/link';

const MenuCategories = () => {
  return (
    <div className= {styles.categoryList}>
    <Link href= "/" className= {`${styles.categoryItem} ${styles.gulmarg}`}>Gulmarg</Link>
    <Link href= "/" className= {`${styles.categoryItem} ${styles.aharbal}`}>Aharbal</Link>
    <Link href= "/" className= {`${styles.categoryItem} ${styles.pahalgam}`}>Pahalgam</Link>
    <Link href= "/" className= {`${styles.categoryItem} ${styles.yusmarg}`}>Yusmarg</Link>
  </div>
  )
}

export default MenuCategories