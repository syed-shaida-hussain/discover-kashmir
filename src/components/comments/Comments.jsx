import Link from "next/link"
import styles from "./comments.module.css"
import Image from "next/image"

const Comments = () => {
  const status = "authenticated"
  return (
    <div className={styles.container}>
        <h1 className= {styles.title}>Comments</h1>
        {status === "authenticated" ? (<div className= {styles.write}>
          <textarea placeholder="write a comment" className= {styles.input} />
          <button className= {styles.button}>Send</button>
        </div>) : (<Link href="/login">Login to write comments</Link>)}
        <div className= {styles.comments}>
          <div className= {styles.comment}>
            <div className= {styles.user}>
              <Image src= "/gulmarg.avif" alt="user image" width={40} height={40} className= {styles.userImage} />
              <div className= {styles.userInfo}>
                <span className= {styles.username}>John Doe</span>
                <span className= {styles.date}>11.03.2024</span>
              </div>
            </div>
            <p className= {styles.description}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam corrupti aspernatur fugit quod, repellat ipsam facilis eius amet quaerat neque explicabo omnis consequatur at minima dicta non, dolores, repudiandae a!
            </p>
          </div>
          <div className= {styles.comment}>
            <div className= {styles.user}>
              <Image src= "/gulmarg.avif" alt="user image" width={40} height={40} className= {styles.userImage} />
              <div className= {styles.userInfo}>
                <span className= {styles.username}>John Doe</span>
                <span className= {styles.date}>11.03.2024</span>
              </div>
            </div>
            <p className= {styles.description}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam corrupti aspernatur fugit quod, repellat ipsam facilis eius amet quaerat neque explicabo omnis consequatur at minima dicta non, dolores, repudiandae a!
            </p>
          </div>          <div className= {styles.comment}>
            <div className= {styles.user}>
              <Image src= "/gulmarg.avif" alt="user image" width={40} height={40} className= {styles.userImage} />
              <div className= {styles.userInfo}>
                <span className= {styles.username}>John Doe</span>
                <span className= {styles.date}>11.03.2024</span>
              </div>
            </div>
            <p className= {styles.description}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam corrupti aspernatur fugit quod, repellat ipsam facilis eius amet quaerat neque explicabo omnis consequatur at minima dicta non, dolores, repudiandae a!
            </p>
          </div>          <div className= {styles.comment}>
            <div className= {styles.user}>
              <Image src= "/gulmarg.avif" alt="user image" width={40} height={40} className= {styles.userImage} />
              <div className= {styles.userInfo}>
                <span className= {styles.username}>John Doe</span>
                <span className= {styles.date}>11.03.2024</span>
              </div>
            </div>
            <p className= {styles.description}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam corrupti aspernatur fugit quod, repellat ipsam facilis eius amet quaerat neque explicabo omnis consequatur at minima dicta non, dolores, repudiandae a!
            </p>
          </div>
        </div>
    </div>
  )
}

export default Comments