"use client";

import React, { useState } from 'react';
import styles from "./authLinks.module.css";
import Link from 'next/link';
import Image from 'next/image';

const AuthLinks = () => {
  const status = "notauthenticated";
  const [open , setOpen] = useState(false)
  return (
    <>
      {
        status === "notauthenticated" ? <Link href= "/login" className= {styles.link}>Login</Link> : <>
          <Link className= {styles.link} href="/create">Create</Link>
          <span className= {styles.link}>Logout</span>
        </>
      }
      <Image src= "/menu.png" alt='menu icon' width={22} height={22} className= {styles.burger} onClick={() => setOpen(!open)} />
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