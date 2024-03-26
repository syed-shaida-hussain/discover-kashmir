"use client";

import React, { useEffect, useState } from 'react';
import styles from "./authLinks.module.css";
import Link from 'next/link';
import axios from "axios"
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '@/app/GlobalRedux/features/user/userSlice';

const AuthLinks = () => {
  const [open , setOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const {isUserLoggedIn} = useSelector((store) => store.user)

  const logout = async () => {
    try {
      const res = await axios.get("/api/user/logout")
      router.push('/login')
      localStorage.removeItem("token");
      dispatch(logoutUser())
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {
        !isUserLoggedIn  ? <Link href= "/login" className= {styles.link}>Login</Link> : <>
          <Link className= {styles.link} href="/write">Create</Link>
          <span className= {styles.link} onClick={() =>logout()}>Logout</span>
        </>
      }
      <div className= {styles.burger}>
      {!open ? <span className={`material-symbols-outlined ${styles.burger}`} onClick={() => setOpen(true)} >menu</span> : <span className={`material-symbols-outlined ${styles.burger}`} onClick={() => setOpen(false)}>close</span>}
      </div>
      {
        open && (
          <div className= {styles.responsiveMenu}>
            <Link href="/">Homepage</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          {
          !isUserLoggedIn ? <Link href= "/login">Login</Link> : <>
          <Link href="/write">Create</Link>
          <span className= {styles.link} onClick={() =>logout()}>Logout</span>
          </>
          }
          </div>
        )
      }
    </>
  )
}

export default AuthLinks