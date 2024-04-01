import React from 'react';
import styles from "./footer.module.css"
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <section className= {styles.container}>
      <div className= {styles.info}>
        <div className= {styles.logo}>
          <Image src = "/gulmarg.avif" alt='logo' height = {50} width={50} className= {styles.logoImg} />
          <h1 className= {styles.logoText}>Discover Kashmir</h1>
        </div>
        <p className= {styles.desc}>{`Built with Next.js for a smooth user experience, Discover Kashmir is your gateway to Kashmir's beauty. We unveil its wonders through captivating stories, and stunning visuals, inspiring you to explore the magic of this unforgettable region. `}</p>
      </div>
      <div className= {styles.links}>
      <div className= {styles.iconList}>
        <span className= {styles.listTitle}>Social</span>
          <Link href= "https://github.com/syed-shaida-hussain">Github</Link>
          <Link href= "https://twitter.com/shaida_hussain_">Twitter</Link>
          <Link href= "https://www.linkedin.com/in/syed-shaida-hussain-51748b205/">LinkedIn</Link>
          <Link href= "https://syedshaidaportfolio.netlify.app/">Portfolio</Link>
        </div>
        <div className= {styles.list}>
          <span className= {styles.listTitle}>Links</span>
          <Link href= "/">Homepage</Link>
          <Link href= "/about">About</Link>
        </div>
      </div>
    </section>
  )
}

export default Footer