import Image from "next/image";
import styles from "./card.module.css";
import React from 'react'
import Link from "next/link";

export const Card = ({post}) => {
  const imgSource = post?.image.split("/")[2]
  return (
    <div className= {styles.container}>
        <div className= {styles.imgContainer}>
            <Image src= {`/${imgSource}`} className = {styles.postImg} alt="post image" fill/>
        </div>
        <div className= {styles.textContainer}>
            <div className= {styles.details}>
                <span className= {styles.date}>11.02.2024</span>
            </div>
            <h1>{post?.title}</h1>
            <p className= {styles.desc} dangerouslySetInnerHTML={{__html: post?.value}} />
            <Link href= {`/blogs/${post._id}`} className= {styles.link}>Read More</Link>
        </div>
    </div>
  )
}

