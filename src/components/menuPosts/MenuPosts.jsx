import React from 'react';
import styles from "./menuPosts.module.css"
import Link from 'next/link';
import Image from 'next/image';

const MenuPosts = ({withImage}) => {
  return (
    <div className= {styles.items}>
    <Link href= "/" className= {styles.item}>
        {withImage && <div className= {styles.imgContainer}>
          <Image src= "/gulmarg.avif" alt='image' fill className= {styles.image} />
        </div>}
        <div className= {styles.textContainer}>
            <span className= {`${styles.category} ${styles.gulmarg}`}>Gulmarg</span>
            <h3 className= {styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className= {styles.detail}>
              <span className= {styles.username}>John Doe</span>
              <span className= {styles.date}>17.02.2024</span>
            </div>
        </div>
    </Link>
    <Link href= "/" className= {styles.item}>
        {withImage && <div className= {styles.imgContainer}>
          <Image src= "/gulmarg.avif" alt='image' fill className= {styles.image} />
        </div>}
        <div className= {styles.textContainer}>
            <span className= {`${styles.category} ${styles.aharbal}`}>Aharbal</span>
            <h3 className= {styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className= {styles.detail}>
              <span className= {styles.username}>John Doe</span>
              <span className= {styles.date}>17.02.2024</span>
            </div>
        </div>
    </Link>
    <Link href= "/" className= {styles.item}>
        {withImage && <div className= {styles.imgContainer}>
          <Image src= "/gulmarg.avif" alt='image' fill className= {styles.image} />
        </div>}
        <div className= {styles.textContainer}>
            <span className= {`${styles.category} ${styles.pahalgam}`}>Pahalgam</span>
            <h3 className= {styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className= {styles.detail}>
              <span className= {styles.username}>John Doe</span>
              <span className= {styles.date}>17.02.2024</span>
            </div>
        </div>
    </Link>
    <Link href= "/" className= {styles.item}>
        {withImage && <div className= {styles.imgContainer}>
          <Image src= "/gulmarg.avif" alt='image' fill className= {styles.image} />
        </div>}
        <div className= {styles.textContainer}>
            <span className= {`${styles.category} ${styles.yusmarg}`}>Yusmarg</span>
            <h3 className= {styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className= {styles.detail}>
              <span className= {styles.username}>John Doe</span>
              <span className= {styles.date}>17.02.2024</span>
            </div>
        </div>
    </Link>
</div>
  )
}

export default MenuPosts