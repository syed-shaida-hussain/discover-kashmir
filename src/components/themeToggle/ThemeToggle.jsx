"use client";

import { useTheme } from "@/app/GlobalRedux/features/theme/ThemeProvider";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./themeToggle.module.css";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null

  return (
    <div
      className={styles.toggleContainer}
      onClick={toggleTheme}
      title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      <div
        className={`${styles.toggleCircle} ${
          theme === "dark" ? styles.dark : styles.light
        }`}
      >
        <Image
          src={theme === "dark" ? "/moon.png" : "/sun.png"}
          alt="theme icon"
          width={16}
          height={16}
        />
      </div>
    </div>
  );
}
