"use client";

import Link from 'next/link'
import styles from './signupPage.module.css'
import { useState } from 'react'
import axios from "axios"
import { useRouter } from 'next/navigation';

const SignupPage = () => {
  const [user , setUser] = useState({username: "" , password : ""});
  const [error , setError] = useState({usernameError : "" , passwordError : ""});
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/user/register' , user);
      if(res.status !== 201) {
        setError({...error , usernameError : res?.data?.errors?.username , passwordError : res?.data?.errors?.password})
      }
      if(res?.data?.status === 201){
        router.push("/login");
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={handleSignup} className= {styles.container}>
        <div className= {styles.wrapper}>
          <h1 className= {styles.title}>Signup</h1>
          <label className= {styles.label}> Username
            <input value={user?.username} type='text' placeholder='Enter your username' className= {styles.input} onChange={(e) => setUser({...user , username : e.target.value})} />
            <div>{error?.usernameError}</div>
          </label>
          <label className= {styles.label}> Password
            <input value={user?.password} type='password' placeholder='Enter your password' className= {styles.input} onChange={(e) => setUser({...user , password : e.target.value})}  />
            <div>{error?.passwordError}</div>
          </label>
          <button type='submit' className= {styles.button}>Signup</button>
          <Link href= "/login" className= {styles.link}>Already a user? Login</Link>
        </div>
    </form>
  )
}

export default SignupPage