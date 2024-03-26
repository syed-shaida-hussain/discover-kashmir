"use client";

import styles from './writePage.module.css'
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

const WritePage = () => {
const [value , setValue] = useState("");
  return (
    <div className= {styles.container}>
        <div className= {styles.flex}>
            <input type='text' placeholder='Title' className= {styles.input} />
            <button className= {styles.publish}>Publish</button>
        </div>
        <div className= {styles.editor}>
            
            <input type='file' id='image' className= {styles.file} />
            <label htmlFor='image' className= {styles.label}>
                <span className= {`material-symbols-outlined ${styles.icon}`}>add_photo_alternate</span>
            </label>
            <ReactQuill className= {styles.textArea} theme='bubble' value={value} onChange={setValue} placeholder='Tell your story...' />
        </div>
    </div>
  )
}

export default WritePage