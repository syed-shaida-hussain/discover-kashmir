import React from 'react';
import styles from "./menu.module.css"
import MenuPosts from '../menuPosts/MenuPosts';

const Menu = () => {
  return (
    <div className= {styles.container}>
      <h2 className= {styles.subTitle}>{"What's hot?"}</h2>
      <h1 className= {styles.title}>Most Popular</h1>
      <MenuPosts />
    </div>
  )
}

export default Menu