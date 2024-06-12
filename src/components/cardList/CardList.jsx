import styles from "./cardList.module.css"
import Pagination from '../pagination/Pagination';
import { Card } from '../card/Card';

async function getData (cat) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/posts?cat=${cat || ""}` , {
      next : {
        revalidate : 0,
        tags : ['posts']
      }
    })
    return res.json()
  } catch (error) {
    console.log(error.message)
  }
}

const CardList = async  ({cat}) => {
  if(!process.env.NEXT_PUBLIC_DOMAIN) {
    return null;
}
  const {posts} = await getData(cat)
  return (
    <div className= {styles.container} id='posts'>
      <h1 className= {styles.title}>Recent Posts</h1>
      <div className= {styles.posts}>
        {
          posts?.map((post) => <Card key={post?._id} post={post} />)
        }
      </div>
      {/* <Pagination /> */}
    </div>
  )
}

export default CardList