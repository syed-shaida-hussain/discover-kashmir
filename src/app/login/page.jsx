"use client";

import Link from 'next/link';
import styles from "./loginPage.module.css";
import { useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { loginUser } from '../GlobalRedux/features/user/userSlice';

const LoginPage = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState({ usernameError: "", passwordError: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('/api/user/login', user);

      if (res.status !== 201) {
        setError({
          usernameError: res?.data?.errors?.username,
          passwordError: res?.data?.errors?.password
        });
      }

      if (res?.data?.status === 200) {
        dispatch(loginUser());
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form onSubmit={handleLogin} className={styles.form}>
          <h1 className={styles.title}>Login</h1>

          <label className={styles.label}>
            Username
            <input
              value={user.username}
              type='text'
              placeholder='Enter your username'
              className={styles.input}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            {error.usernameError && <div className={styles.error}>{error.usernameError}</div>}
          </label>

          <label className={styles.label}>
            Password
            <input
              value={user.password}
              type='password'
              placeholder='Enter your password'
              className={styles.input}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            {error.passwordError && <div className={styles.error}>{error.passwordError}</div>}
          </label>

          <button type='submit' className={styles.button} disabled={loading || !user?.username || !user?.password}>
            {loading ? <span className={styles.loader}></span> : "Login"}
          </button>

          <p className={styles.register}>
            New here? <Link href="/signup" className={styles.link}>Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
