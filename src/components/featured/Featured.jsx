import React from 'react';
import styles from "./featured.module.css"
import Image from 'next/image';

const Featured = () => {
  return (
    <div className= {styles.container}>
      <h1 className= {styles.title}>Embrace the Magic of Kashmir : A Symphony of Nature and Culture.</h1>
      <div className= {styles.post}>
        <div className= {styles.imgContainer}>
          <Image src= "/gulmarg.avif" alt='post image' fill className= {styles.postImg}/>
        </div>
        <div className= {styles.textContainer}>
          <h1 className= {styles.postTitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt.</h1>
          <p className= {styles.postDescription}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, praesentium veritatis! Illum molestiae reiciendis autem fugiat, inventore veritatis animi aperiam modi, provident impedit cumque aliquam quo enim ipsum minus sit!</p>
          <button className= {styles.postBtn}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured