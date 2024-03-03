import Image from "next/image";
import styles from "./card.module.css";
import React from 'react'
import Link from "next/link";

export const Card = () => {
  return (
    <div className= {styles.container}>
        <div className= {styles.imgContainer}>
            <Image src= "/gulmarg.avif" className = {styles.postImg} alt="post image" fill/>
        </div>
        <div className= {styles.textContainer}>
            <div className= {styles.details}>
                <span className= {styles.date}>11.02.2024</span>
            </div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
            <p className= {styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis eum magni ducimus consequatur neque ea temporibus? Magni adipisci velit vitae deleniti?</p>
            <Link href= "/" className= {styles.link}>Read More</Link>
        </div>
    </div>
  )
}

