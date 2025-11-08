"use client";

import Link from 'next/link'
import styles from '../login/loginPage.module.css'
import { useState } from 'react'
import axios from "axios"
import { useRouter } from 'next/navigation';

const SignupPage = () => {
  const [user , setUser] = useState({username: "" , password : ""});
  const [error , setError] = useState({usernameError : "" , passwordError : ""});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('/api/user/register' , user);
      if(res.status !== 201) {
        setError({
          usernameError: res?.data?.errors?.username,
          passwordError: res?.data?.errors?.password
        });
      }
      if(res?.data?.status === 201){
        router.push("/login");
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form onSubmit={handleSignup} className={styles.form}>
          <h1 className={styles.title}>Signup</h1>

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
            {loading ? <span className={styles.loader}></span> : "Signup"}
          </button>

          <p className={styles.register}>
            Already a user? <Link href="/login" className={styles.link}>Login</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignupPage
