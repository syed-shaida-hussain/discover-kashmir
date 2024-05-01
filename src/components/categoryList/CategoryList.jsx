import React from 'react';
import styles from "./categoryList.module.css"
import Link from 'next/link';

const CategoryList = () => {
  return (
    <div className= {styles.container}>
      <h1 className= {styles.title}>Popular Categories </h1>
      <div className= {styles.categories}>
          <Link href= "/blog?cat=winter-wonders" className={`${styles.category} ${styles.winter}`}>
              Winter wonders
          </Link>
          <Link href= "/blog?cat=old-city" className={`${styles.category} ${styles.oldCity}`}>
              Old city
          </Link>
          <Link href= "/blog?cat=mughal-gardens" className={`${styles.category} ${styles.mughalGardens}`}>
              Mughal gardens
          </Link>
          <Link href= "/blog?cat=glaciers" className={`${styles.category} ${styles.glaciers}`}>
              Glaciers
          </Link>
          <Link href= "/blog?cat=meadows" className={`${styles.category} ${styles.meadows}`}>
              Meadows
          </Link>

          <Link href= "/blog?cat=dal-lake" className={`${styles.category} ${styles.dal}`}>
              Dal lake
          </Link>
      </div>
    </div>
  )
}

export default CategoryList