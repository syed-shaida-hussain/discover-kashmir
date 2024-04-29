import React from 'react';
import styles from "./featured.module.css"
import Image from 'next/image';
import Link from 'next/link';

const Featured = () => {
  return (
    <div className= {styles.container}>
      <h1 className= {styles.title}>Embrace the Magic of Kashmir : A Symphony of Nature and Culture.</h1>
      <div className= {styles.post}>
        <div className= {styles.imgContainer}>
          <Image src= "/gulmarg.avif" alt='post image' fill className= {styles.postImg}/>
        </div>
        <div className= {styles.textContainer}>
          <h1 className= {styles.postTitle}>Kashmir : Where Beauty Knows No Bounds</h1>
          <p className= {styles.postDescription}>Nestled amidst majestic snow-capped peaks and serene valleys, Kashmir beckons travelers with its unparalleled beauty and rich cultural heritage. With captivating stories, Explore Kashmir is your trusted companion in crafting unforgettable memories in this paradise on earth. Join us as we delve into the heart of Kashmir, where every corner holds a new adventure waiting to be discovered.</p>
          <Link href= "#posts" className= {styles.exploreBtn}>Explore Now</Link>
        </div>
      </div>
    </div>
  )
}

export default Featured