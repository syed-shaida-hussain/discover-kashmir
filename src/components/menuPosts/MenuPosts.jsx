import React from 'react';
import styles from "./menuPosts.module.css"
import Link from 'next/link';
import axios from "axios";

async function fetchTrendingPosts () {
  try {
      const res = await fetch(`http://localhost:3000/api/carousel`)
      return res.json();
  } catch (error) {
      console.log(error.message)
  }
}

const MenuPosts = async () => {
  const {carouselPosts} = await fetchTrendingPosts();
  return (
    <div className= {styles.items}>
      {carouselPosts.map((post) =><Link key={post._id} href= {`/blogs/${post._id}`} className= {styles.item}>
        <div className= {styles.textContainer}>
            <span className= {`${styles.category}`}>{post.category}</span>
            <h3 className= {styles.postTitle}>{post?.title}</h3>
            <div className= {styles.detail}>
              <span className= {styles.username}>{post?.authorName} </span>
              <span className= {styles.date}> 17.02.2024</span>
            </div>
        </div>
    </Link> )}

</div>
  )
}

export default MenuPosts