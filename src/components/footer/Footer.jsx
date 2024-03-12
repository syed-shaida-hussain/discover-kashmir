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
        <p className= {styles.desc}>lorem ipsum jdckwl jfbwjk lorem ipsum jdckwl jfbwjklorem ipsum jdckwl jfbwjklorem ipsum jdckwl jfbwjklorem ipsum jdckwl jfbwjklorem ipsum jdckwl jfbwjklorem ipsum jdckwl jfbwjklorem ipsum jdckwl jfbwjk </p>
      </div>
      <div className= {styles.links}>
        <div className= {styles.list}>
          <span className= {styles.listTitle}>Links</span>
          <Link href= "/">Homepage</Link>
          <Link href= "/">Blog</Link>
          <Link href= "/">About</Link>
          <Link href= "/">Contact</Link>
        </div>
        <div className= {styles.iconList}>
        <span className= {styles.listTitle}>Social</span>
          <Link href= "/">Github</Link>
          <Link href= "/">Twitter</Link>
          <Link href= "/">LinkedIn</Link>
          <Link href= "/">Portfolio</Link>
      </div>
      </div>
    </section>
  )
}

export default Footer