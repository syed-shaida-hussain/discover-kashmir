import styles from "./navbar.module.css";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import dynamic from "next/dynamic";

// Dynamically import AuthLinks so Navbar can stay a server component
const AuthLinks = dynamic(() => import("../authLinks/AuthLinks"), { ssr: false });

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>Discover Kashmir</div>
      <div className={styles.links}>
        <Link href="/" prefetch className={styles.link}>Home</Link>
        <Link href="/about" prefetch className={styles.link}>About</Link>
        <AuthLinks />
        <ThemeToggle />

      </div>
    </nav>
  );
}
