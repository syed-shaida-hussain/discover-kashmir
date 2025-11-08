"use client"
import Image from "next/image"
import styles from "./addPostForm.module.css"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.bubble.css';
import { useState } from "react"
import action from "@/app/actions";
import axios from "axios"
import { useRouter } from "next/navigation";
import { categories } from "@/constants/categories";

const AddPostForm = ({post , isEditForm}) => {
  const router = useRouter();
  const [value , setValue] = useState(post?.value || "");
  const [postData , setPostData] = useState({
    title : post?.title || "",
    file : "",
    video : post?.video || "",
    category : post?.category || ""
  })
  const [error , setError] = useState({imageError : "" , titleError : "" , valueError : "" , categoryError : "" });

  const handleAddPost = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.set("file" , postData.file);
      data.set("title" , postData.title);
      data.set("video" , postData.video);
      data.set("value" , value);
      data.set("category" , postData?.category)
      await axios.post("/api/upload", data);
      setPostData({title: "", file: "", video: "", category: ""});
      setValue("");
      action();
      router.push('/');
    } catch (err) {
      const {response} = err;
      const {data} = response;
      setError({...error , imageError : data?.errors?.image , titleError : data?.errors?.title , valueError : data?.errors?.postValue, categoryError : data?.errors?.category});
    }
  }

  const handleEditPost = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.set("file" , postData.file ? postData.file : post?.image);
      data.set("title" , postData.title ? postData.title : post?.title);
      data.set("video" , postData.video ? postData.video : post?.video);
      data.set("value" , value ? value : post?.value);
      data.set("category" , postData?.category ? postData.category : post?.category)
      await axios.put(`/api/edit/${post._id}`, data);
      action();
      router.push(`/blogs/${post._id}`)
      setPostData({title: "", file: "", video: "", category: ""});
      setValue("");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className= {styles.container} onSubmit={isEditForm ? handleEditPost : handleAddPost}>
      <div className= {styles.flex}>
        <div>
          <input 
            type='text' 
            placeholder='Title...' 
            value={postData.title} 
            className= {styles.input} 
            onChange={(e) => setPostData({...postData , title : e.target.value})} 
          />
          <div className= {styles.error}>{error?.titleError}</div>
        </div>
        <button type='submit' className= {styles.publish}>
          {isEditForm ? "Edit" : "Publish"}
        </button>
      </div>

      <div className= {styles.editor}>
        <div className= {styles.inputs}>
          <input type='file' id='image' accept="image/*" className= {styles.file} onChange={(e) => setPostData({...postData , file : e.target.files?.[0]})} />
          <div>
            <label htmlFor='image' className= {styles.label}>
              <Image src= "/add-img.svg" alt='add image icon' width={25} height={25} />
            </label>
            {error?.imageError && <div className= {styles.error}>{error?.imageError}</div>}
          </div>

          <div className= {styles.textAreaContainer}>
            <ReactQuill 
              className= {styles.textArea} 
              theme='bubble' 
              value={value} 
              onChange={setValue} 
              placeholder='Tell your story...' 
            />
            <div className= {styles.error}>{error?.valueError}</div>
          </div>
        </div>

        <input 
          type='text' 
          placeholder='Enter youtube video URL (optional)...' 
          value={postData.video} 
          className= {`${styles.input} ${styles.videoInput}`} 
          onChange={(e) => setPostData({...postData , video : e.target.value})} 
        />

        <div className={styles.dropdown}>
          <select 
            value={postData.category} 
            onChange={(e) => setPostData({...postData, category: e.target.value})}
            className={styles.select}
          >
            <option value="">Select a category</option>
            {categories.map((option, i) => (
              <option key={i} value={option.value}>{option.name}</option>
            ))}
          </select>
          <div className= {styles.error}>{error?.categoryError}</div>
        </div>

      </div>
    </form>
  )
}

export default AddPostForm;
