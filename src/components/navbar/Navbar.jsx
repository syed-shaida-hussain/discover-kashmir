import styles from "./navbar.module.css";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import dynamic from "next/dynamic";

const AuthLinks = dynamic(() => import("../authLinks/AuthLinks"), { ssr: false });

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <Link href="/" className={styles.logo}>Discover Kashmir</Link>
      <div className={styles.links}>
        <Link href="/" prefetch className={styles.link}>Home</Link>
        <AuthLinks />
        <Link href="/about" prefetch className={styles.link}>About</Link>
        <ThemeToggle />

      </div>
    </nav>
  );
}
