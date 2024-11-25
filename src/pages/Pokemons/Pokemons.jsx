import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import styles from './Pokemons.module.css'
import Product from '../../components/Product/Product'
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer'

function Pokemons() {
  return (
    <div className={styles.container}>
      <SideBar/>
      <ProductsContainer category={'pokemon'}/>
    </div>
  )
}

export default Pokemons