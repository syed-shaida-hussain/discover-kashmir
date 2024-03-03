import React from 'react';
import styles from "./categoryList.module.css"
import Link from 'next/link';
import Image from 'next/image';

const CategoryList = () => {
  return (
    <div className= {styles.container}>
      <h1 className= {styles.title}>Popular places </h1>
      <div className= {styles.categories}>
          <Link href= "/blog?cat=gulmarg" className={`${styles.category} ${styles.gulmarg}`}>
              <Image src= "/gulmarg.avif" alt='category-logo' width={32} height={32} className= {styles.image} /> Gulmarg
          </Link>
          <Link href= "/blog?cat=pahalgam" className={`${styles.category} ${styles.pahalgam}`}>
              <Image src= "/gulmarg.avif" alt='category-logo' width={32} height={32} className= {styles.image} /> Pahalgam
          </Link>
          <Link href= "/blog?cat=aharbal" className={`${styles.category} ${styles.aharbal}`}>
              <Image src= "/gulmarg.avif" alt='category-logo' width={32} height={32} className= {styles.image} /> Aharbal
          </Link>
      </div>
    </div>
  )
}

export default CategoryList