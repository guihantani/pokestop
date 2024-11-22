import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import styles from './Items.module.css'
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer'

function Items() {
  return (
    <div className={styles.container}>
      <SideBar/>
      <div className={styles.content__container}>
        <h1>Items</h1>
        <ProductsContainer category={'items'}/>
      </div>
    </div>
  )
}

export default Items