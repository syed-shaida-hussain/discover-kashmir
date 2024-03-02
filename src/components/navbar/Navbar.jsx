import React from 'react';
import styles from "./navbar.module.css"
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className= {styles.logo}>Discover Kashmir</div>
      <div className= {styles.links}>
        <ThemeToggle />
        <Link href="/" className= {styles.link} >Homepage</Link>
        <Link href="/contact" className= {styles.link}>Contact</Link>
        <Link href="/about" className= {styles.link}>About</Link>
        <AuthLinks />
      </div>
    </nav>
  )
}

export default Navbar