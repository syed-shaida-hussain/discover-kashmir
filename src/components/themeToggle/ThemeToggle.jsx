"use client";

import React from 'react'
import "./themeToggle.module.css"
import Image from 'next/image'
import styles from "./themeToggle.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '@/app/GlobalRedux/features/theme/ThemeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const {theme} = useSelector((store) => store.theme)
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  }
  return (
    <div className={styles.container} onClick={handleToggleTheme} style={theme === "light" ? {
      background : "black"
    } : {
      background : "white"
    }}>
      <Image src= "/moon.png" alt='moon' width={14} height={12} />
      <div className={styles.circle} style={theme === "light" ? {
      background : "white",
      right : 1
    } : {
      background : "black",
      left : 1
    }}></div>
      <Image src= "/sun.png" alt='sun' width={14} height={12} />
    </div>
  )
}

export default ThemeToggle