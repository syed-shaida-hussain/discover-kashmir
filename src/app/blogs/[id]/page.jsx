"use client";

import styles from './singlePage.module.css'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'
import { useEffect, useState } from 'react'
import axios from 'axios'

const SingleBlogPage = ({params}) => {
const [singlePost, setSinglePost] = useState({})
const {id} = params

const getSinglePost = async () => {
    const res = await axios.get(`/api/posts/${id}`)
    setSinglePost(res?.data?.post)
}

useEffect(() => {
    getSinglePost();
},[])
  return (
    <div className= {styles.container}>
        <div className= {styles.infoContainer}>
            <div className= {styles.textContainer}>
                <h1 className= {styles.title}>{singlePost?.title}</h1>
                <div className= {styles.user}>
                    <div className= {styles.userTextContainer}>
                        <span className= {styles.username}>Author : {singlePost?.authorName}</span>
                        <span className= {styles.date}>01.03.2024</span>
                    </div>
                </div>
            </div>
            <div className= {styles.imgContainer}>
                <Image src= {`/${singlePost?.image?.split("/")[2]}`} alt='post image'  className= {styles.image} fill />
            </div>
        </div>
        <div className= {styles.content}>
            <div className= {styles.post}>
                <div className= {styles.description} dangerouslySetInnerHTML={{__html: singlePost?.value}}  />
                <div className= {styles.comments}>
                    <Comments />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleBlogPage