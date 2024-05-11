// "use client";

// import axios from 'axios';
// import styles from './writePage.module.css'
// import React, { useState } from 'react'
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.bubble.css';
// import Image from 'next/image';
// import action from '../actions';
import AddPostForm from '@/components/addPostForm/AddPostForm';

// const options = [
//   {name : "Reset", value : ""},
//   {name : "Dal Lake", value : "dal-lake"},
//   {name : "Meadows", value : "meadows"},
//   {name : "Winter Wonders", value : "winter-wonders"},
//   {name : "Old City", value : "old-city"},
//   {name : "Glaciers", value : "glaciers"},
//   {name : "Mughal Gardens", value : "mughal-gardens"},
//   {name : "Hill stations", value : "hill-stations"}

// ]

  const WritePage = () => {
  // const [value , setValue] = useState("");
  // const [postData , setPostData] = useState({
  //   title : "",
  //   file : "",
  //   video : "",
  //   category : ""
  // })

  // const handleAddPost = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const data = new FormData();
  //     data.set("file" , postData.file);
  //     data.set("title" , postData.title);
  //     data.set("video" , postData.video);
  //     data.set("value" , value);
  //     data.set("category" , postData?.category)
  //     const res = await axios.post("/api/upload", data);
  //     action();
  //     setPostData({...postData , title : "", file : "",  category : "" , video : ""});
  //     setValue("");
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <AddPostForm />
  )
}

export default WritePage