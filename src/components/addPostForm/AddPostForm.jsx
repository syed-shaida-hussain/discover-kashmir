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
    const [value , setValue] = useState("");
    const [postData , setPostData] = useState({
      title : "",
      file : "",
      video : "",
      category : ""
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
        const res = await axios.post("/api/upload", data);
        setPostData({...postData , title : "", file : "",  category : "" , video : ""});
        setValue("");
        action();
        router.push('/')
      } catch (err) {
        const {response} = err
        const {data} = response
        setError({...error , imageError : data?.errors?.image , titleError : data?.errors?.title , valueError : data?.errors?.postValue, categoryError : data?.errors?.category})
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
          const res = await axios.put(`/api/edit/${post._id}`, data);
          action();
          router.push(`/blogs/${post._id}`)
          setPostData({...postData , title : "", file : "",  category : "" , video : ""});
          setValue("");
        } catch (error) {
          console.log(error)
        }
      }
  return (
    <form className= {styles.container} onSubmit={isEditForm ? handleEditPost : handleAddPost}>
    <div className= {styles.flex}>
      <div>
        <input type='text' placeholder='Title...' defaultValue={post?.title} className= {styles.input} onChange={(e) => setPostData({...postData , title : e.target.value})} />
        <div className= {styles.error}>{error?.titleError}</div>
      </div>
        
        {isEditForm ? <button type='submit' className= {styles.publish}>Edit</button> : <button type='submit' className= {styles.publish}>Publish</button>}
    </div>
    <div className= {styles.editor}>
        <div className= {styles.inputs}>
          <input type='file' id='image' className= {styles.file} onChange={(e) => setPostData({...postData , file : e.target.files?.[0]})} />
          <div>
          <label htmlFor='image' className= {styles.label}>
            <Image src= "/add-img.svg" alt='add image icon' width={25} height={25} />
          </label>
          {error?.imageError && <div className= {styles.error}>{error?.imageError}</div>}
          </div>

          <div className= {styles.textAreaContainer}>
            <ReactQuill className= {styles.textArea} theme='bubble' defaultValue={post?.value} onChange={setValue} placeholder='Tell your story...' />
            <div className= {styles.error}>{error?.valueError}</div>
          </div>
          
        </div>
        <input type='text' placeholder='Enter youtube video URL (optional)...' defaultValue={post?.video} className= {`${styles.input} ${styles.videoInput}`} onChange={(e) => setPostData({...postData , video : e.target.value})} />
        <div className= {styles.dropdown}>
            <button>{postData?.category ? "category : " + postData?.category : "Select a category" } </button>
            {categories.map((option , i) => <div key={i} className= {styles.options} onClick={() => setPostData({...postData , category : option.value })}>
              {option.name}
            </div>)}
        </div>
        <div className= {styles.error}>{error?.categoryError}</div>

    </div>
</form>
  )
}

export default AddPostForm