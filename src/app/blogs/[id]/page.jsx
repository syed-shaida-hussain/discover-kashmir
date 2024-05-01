import styles from './singlePage.module.css'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

async function getPost (id) {
    try {
        const res = await fetch(`http://localhost:3000/api/posts/${id}`)
        return res.json();
    } catch (error) {
        console.log(error.message)
    }
}

const SingleBlogPage = async ({params}) => {
    const {id} = params
    const {post} = await getPost(id)
  return (
    <div className= {styles.container}>
        <div className= {styles.infoContainer}>
            <div className= {styles.textContainer}>
                <h1 className= {styles.title}>{post?.title}</h1>
                <div className= {styles.user}>
                    <div className= {styles.userTextContainer}>
                        <span className= {styles.username}>Author : {post?.authorName}</span>
                        <span className= {styles.date}>01.03.2024</span>
                    </div>
                </div>
            </div>
            <div className= {styles.imgContainer}>
                <Image src= {`/${post?.image?.split("/")[2]}`} alt='post image'  className= {styles.image} fill />
            </div>
        </div>
        <div>
            <iframe className= {styles.video} src = {`https://www.youtube.com/embed/${post?.video.split('=')[1].split('&')[0]}?autoplay=0&showinfo=0`}
                allowFullScreen />
        </div>
        <div className= {styles.content}>
            <div className= {styles.post}>
                <div className= {styles.description} dangerouslySetInnerHTML={{__html: post?.value}}  />
                <div className= {styles.comments}>
                    <Comments />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleBlogPage