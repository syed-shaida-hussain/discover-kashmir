import styles from './loginPage.module.css'

const LoginPage = () => {
  return (
    <div className= {styles.container}>
        <div className= {styles.wrapper}>
            <div className= {styles.socialButton}>Login with Google</div>
            <div className= {styles.socialButton}>Login with Twitter</div>
            <div className= {styles.socialButton}>Login with Github</div>
        </div>
    </div>
  )
}

export default LoginPage