import styles from "./aboutPage.module.css"

const AboutPage = () => {
  return (
    <>
    <h1 className= {styles.heading}>About us</h1>
    <p className= {styles.container}>
       {` Welcome to Discover Kashmir, your ultimate destination for discovering the hidden gems and breathtaking landscapes of the Kashmir region. Our app is dedicated to showcasing the rich cultural heritage and stunning natural beauty that Kashmir has to offer to travelers from around the globe. We're passionate about showcasing the hidden gems and well-known wonders of Kashmir. Through captivating stories, stunning visuals, and practical travel tips, we aim to inspire you to embark on your own Kashmiri adventure. Whether you're a seasoned traveler or a first-time explorer, we hope Discover Kashmir becomes your trusted resource for planning your unforgettable Kashmiri adventure by reading our blogs and witnessing the real beauty of kashmir.`}
       <p className= {styles.mt10}>{`Whether you're planning your dream vacation to Kashmir or simply want to learn more about this enchanting region, we're here to support you every step of the way. Thank you for choosing Explore Kashmir as your trusted resource for exploring the wonders of Kashmir. We can't wait to hear from you!`}</p>
    <p className= {styles.mt10}>{` 
        Thank you for your interest in Explore Kashmir! Whether you have questions, feedback, or just want to say hello, we're here to help. Please feel free to reach out to us using the contact information provided below:
       `}</p>
      <div className= {styles.mt10}>Email: syedshaida59991@gmail.com</div>
      <div>Phone: +91-9149701175</div>
    </p>

    </>
  )
}

export default AboutPage