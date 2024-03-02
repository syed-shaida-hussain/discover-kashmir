"use client";

import React from 'react'
import { useSelector } from 'react-redux'

const ThemeProvider = ({children}) => {
const {theme} = useSelector((store) => store.theme);
  return (
    <div className= {theme}>{children}</div>
  )
}

export default ThemeProvider