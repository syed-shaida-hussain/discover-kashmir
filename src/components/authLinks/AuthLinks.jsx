"use client";

import React, { useState } from 'react';
import styles from "./authLinks.module.css";
import Link from 'next/link';
import axios from "axios"
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '@/app/GlobalRedux/features/user/userSlice';
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
const isServer = typeof window === "undefined";


const AuthLinks = () => {
  const [open , setOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const {isUserLoggedIn} = useSelector((store) => store.user)

  const logout = async () => {
    try {
      const res = await axios.get("/api/user/logout")
      setOpen(false)
      router.push('/login')
      if(!isServer) {
        localStorage.removeItem("token")
      }
      dispatch(logoutUser())
    } catch (error) {
      console.log(error)
    }
  }

  const closeModal = () => {
    setOpen(false)
  }

  return (
    <>
      {
        !isUserLoggedIn  && <Link href= "/login" className= {styles.link}>Login</Link> 
      }
         <>
          <Link className= {styles.link} href="/write">Create</Link>
          <span className= {styles.link} onClick={() =>logout()}>Logout</span>
        </>
      
      <div className= {styles.burger}>
      {!open ? <MdMenu className= {styles.burger} onClick={() => setOpen(true)} />  : <IoClose className= {styles.burger} onClick={() => setOpen(false)} />}
      </div>
      {
        open && (
          <div className= {styles.responsiveMenu}>
            <Link href="/" onClick={closeModal}>Homepage</Link>
            <Link href="/about" onClick={closeModal}>About</Link>
          {
          !isUserLoggedIn ? <Link href= "/login" onClick={closeModal}>Login</Link> : <>
          <Link href="/write" onClick={closeModal}>Create</Link>
          <span onClick={() =>logout()}>Logout</span>
          </>
          }
          </div>
        )
      }
    </>
  )
}

export default AuthLinks