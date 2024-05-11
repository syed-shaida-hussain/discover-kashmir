import styles from "./featured.module.css"
import Carousel from '../carousel/Carousel';

const Featured = () => {
  return (
    <div className= {styles.container}>
      <h1 className= {styles.title}>Embrace the Magic of Kashmir : A Symphony of Nature and Culture.</h1>
      <div className= {styles.post}>
        <div className= {styles.textContainer}>
            <Carousel />
        </div>
      </div>
    </div>
  )
}

export default Featured