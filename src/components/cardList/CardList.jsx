"use client";

import React, { useEffect, useState } from 'react';
import styles from "./cardList.module.css"
import Pagination from '../pagination/Pagination';
import { Card } from '../card/Card';
import axios from "axios";

const CardList = ({cat}) => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    try {
      const res = await axios.get(`/api/posts?cat=${cat || ""}`);
      setPosts(res?.data?.posts)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getPosts();
  },[])
  return (
    <div className= {styles.container} id='posts'>
      <h1 className= {styles.title}>Recent Posts</h1>
      <div className= {styles.posts}>
        {
          posts?.map((post) => <Card key={post?._id} post={post} />)
        }
      </div>
      <Pagination />
    </div>
  )
}

export default CardList