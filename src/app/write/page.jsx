"use client";

import Image from 'next/image'
import styles from './writePage.module.css'
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

const WritePage = () => {
const [isOpen , setIsOpen] = useState(false);
const [value , setValue] = useState("");
  return (
    <div className= {styles.container}>
        <input type='text' placeholder='Title' className= {styles.input} />
        <div className= {styles.editor}>
            <button className= {styles.button} onClick={() => setIsOpen(!isOpen)}>
                <span className= {`material-symbols-outlined ${styles.icon}`}>add</span>
            </button>
            {isOpen && <div className= {styles.add}>
                <button className= {styles.addButton}>
                    <span className= {`material-symbols-outlined ${styles.icon}`}>add_photo_alternate</span>
                </button> <button className= {styles.addButton}>
                    <span className= {`material-symbols-outlined ${styles.icon}`}>upload</span>
                </button> <button className= {styles.addButton}>
                    <span className= {`material-symbols-outlined ${styles.icon}`}>play_arrow</span>
                </button>
            </div>}
            <ReactQuill className= {styles.textArea} theme='bubble' value={value} onChange={setValue} placeholder='Tell your story...' />
        </div>
        <button className= {styles.publish}>Publish</button>
    </div>
  )
}

export default WritePage