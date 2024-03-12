import Menu from '@/components/menu/Menu'
import styles from './singlePage.module.css'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const SingleBlogPage = () => {
  return (
    <div className= {styles.container}>
        <div className= {styles.infoContainer}>
            <div className= {styles.textContainer}>
                <h1 className= {styles.title}>Lorem ipsum dolor sit amet consectetur adipisi deleniti!</h1>
                <div className= {styles.user}>
                    <div className= {styles.userImgContainer}>
                        <Image src= "/gulmarg.avif" alt='user profile image' fill className= {styles.avatar} />
                    </div>
                    <div className= {styles.userTextContainer}>
                        <span className= {styles.username}>John Doe</span>
                        <span className= {styles.date}>01.03.2024</span>
                    </div>
                </div>
            </div>
            <div className= {styles.imgContainer}>
                <Image src= "/gulmarg.avif" alt='post image'  className= {styles.image} fill />
            </div>
        </div>
        <div className= {styles.content}>
            <div className= {styles.post}>
                <div className= {styles.description}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, nobis? Aut iste aliquam recusandae hic? Incidunt est eum distinctio nam ut facilis! Cum optio nostrum quo impedit error nam dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores amet quis itaque, recusandae odit minus unde, perspiciatis, ipsa minima libero adipisci sint animi nesciunt error. Vero voluptatibus dignissimos culpa? Doloribus?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, nobis? Aut iste aliquam recusandae hic? Incidunt est eum distinctio nam ut facilis! Cum optio nostrum quo impedit error nam dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores amet quis itaque, recusandae odit minus unde, perspiciatis, ipsa minima libero adipisci sint animi nesciunt error. Vero voluptatibus dignissimos culpa? Doloribus?</p>
                </div>
                <div className= {styles.comments}>
                    <Comments />
                </div>
            </div>
            <Menu />
        </div>
    </div>
  )
}

export default SingleBlogPage