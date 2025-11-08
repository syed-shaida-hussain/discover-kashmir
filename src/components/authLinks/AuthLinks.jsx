"use client";

import React, { useEffect, useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@/app/GlobalRedux/features/user/userSlice";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const AuthLinks = React.memo(() => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const { isUserLoggedIn } = useSelector((store) => store.user);

  const [mounted,setMounted] = useState(false)
  
    useEffect(() => {
      setMounted(true)
    },[])
  
  if(!mounted) return null

  const handleLogout = async () => {
    try {
      await axios.get("/api/user/logout");
      if (typeof window !== "undefined") localStorage.removeItem("token");
      dispatch(logoutUser());
      router.push("/login");
      setOpen(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const closeMenu = () => setOpen(false);

  return (
    <>
      {!isUserLoggedIn && <Link href="/login" className={styles.link}>Login</Link>}
      <Link href="/write" className={styles.link}>Create</Link>
      {isUserLoggedIn && (
        <span className={styles.link} onClick={handleLogout}>
          Logout
        </span>
      )}

      <div className={styles.burger}>
        {open ? (
          <IoClose onClick={() => setOpen(false)} />
        ) : (
          <MdMenu onClick={() => setOpen(true)} />
        )}
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/" onClick={closeMenu}>Homepage</Link>
          {!isUserLoggedIn && <Link href="/login" onClick={closeMenu}>Login</Link>}
          <Link href="/write" onClick={closeMenu}>Create</Link>
          <Link href="/about" onClick={closeMenu}>About</Link>
          {isUserLoggedIn && <span onClick={handleLogout}>Logout</span>}
        </div>
      )}
    </>
  );
});

AuthLinks.displayName = "AuthLinks";


export default AuthLinks;
