"use client";

import axios from 'axios';
import styles from './writePage.module.css'
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

  const WritePage = () => {
  const [value , setValue] = useState("");
  const [postData , setPostData] = useState({
    title : "",
    file : "",
    author : {}
  })
  const handleAddPost = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("file" , postData.file);
    data.set("title" , postData.title);
    data.set("value" , value);
    data.set("authorName" , postData.author?.username);
    data.set("authorId" , postData.author?._id)
    const res = await axios.post("/api/upload", data);
    setPostData({...postData , title : "", file : "", author : {}});
    setValue("");
  }

  const getLoggedInUser = async () => {
    const res = await axios.get("/api/user/me");
    setPostData({...postData, author : res?.data?.user})
    const res2 = await axios.get("/api/posts")
    console.log(res2)

  }

  useEffect(() => {
    getLoggedInUser();
  },[])
  return (
    <form className= {styles.container} onSubmit={handleAddPost}>
        <div className= {styles.flex}>
            <input type='text' placeholder='Title' value={postData.title} className= {styles.input} onChange={(e) => setPostData({...postData , title : e.target.value})} />
            <button type='submit' className= {styles.publish}>Publish</button>
        </div>
        <div className= {styles.editor}>
            <input type='file' id='image' className= {styles.file} onChange={(e) => setPostData({...postData , file : e.target.files?.[0]})} />
            <label htmlFor='image' className= {styles.label}>
                <span className= {`material-symbols-outlined ${styles.icon}`}>add_photo_alternate</span>
            </label>
            <ReactQuill className= {styles.textArea} theme='bubble' value={value} onChange={setValue} placeholder='Tell your story...' />
        </div>
    </form>
  )
}

export default WritePage