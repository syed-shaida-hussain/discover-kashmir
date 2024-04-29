"use client";

import axios from 'axios';
import styles from './writePage.module.css'
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import Image from 'next/image';

const options = [
  {name : "Reset", value : ""},
  {name : "Dal Lake", value : "dal-lake"},
  {name : "Alpine Meadows", value : "alpine-meadows"},
  {name : "Winter Wonders", value : "winter-wonders"},
  {name : "Old City", value : "old-city"},
  {name : "Glaciers", value : "glaciers"},
  {name : "Mughal Gardens", value : "mughal-gardens"}
]

  const WritePage = () => {
  const [value , setValue] = useState("");
  const [postData , setPostData] = useState({
    title : "",
    file : "",
    category : ""
  })

  const handleAddPost = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.set("file" , postData.file);
      data.set("title" , postData.title);
      data.set("value" , value);
      data.set("category" , postData?.category)
      const res = await axios.post("/api/upload", data);
      setPostData({...postData , title : "", file : "",  category : ""});
      setValue("");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className= {styles.container} onSubmit={handleAddPost}>
        <div className= {styles.flex}>
            <input type='text' placeholder='Title...' value={postData.title} className= {styles.input} onChange={(e) => setPostData({...postData , title : e.target.value})} />
            <button type='submit' className= {styles.publish}>Publish</button>
        </div>
        <div className= {styles.editor}>
            <div className= {styles.inputs}>
              <input type='file' id='image' className= {styles.file} onChange={(e) => setPostData({...postData , file : e.target.files?.[0]})} />
              <label htmlFor='image' className= {styles.label}>
                <Image src= "./add-img.svg" alt='add image icon' width={25} height={25} />
              </label>
              <ReactQuill className= {styles.textArea} theme='bubble' value={value} onChange={setValue} placeholder='Tell your story...' />
            </div>
            <div className= {styles.dropdown}>
                <button>{postData?.category ? "category : " + postData?.category : "Select a category" } </button>
                {options.map((option , i) => <div key={i} className= {styles.options} onClick={() => setPostData({...postData , category : option.value })}>
                  {option.name}
                </div>)}
            </div>
        </div>
    </form>
  )
}

export default WritePage