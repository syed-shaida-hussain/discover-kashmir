"use client";

import React, { useState } from 'react';
import styles from "./authLinks.module.css";
import Link from 'next/link';

const AuthLinks = () => {
  const status = "authenticated";
  const [open , setOpen] = useState(false)
  return (
    <>
      {
        status === "notauthenticated" ? <Link href= "/login" className= {styles.link}>Login</Link> : <>
          <Link className= {styles.link} href="/create">Create</Link>
          <span className= {styles.link}>Logout</span>
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
          status === "notauthenticated" ? <Link href= "/login">Login</Link> : <>
          <Link href="/create">Create</Link>
          <span className= {styles.link}>Logout</span>
        </>
      }

          </div>
        )
      }
    </>
  )
}

export default AuthLinks