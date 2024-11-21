import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import styles from './Pokemons.module.css'
import Product from '../../components/Product/Product'

function Pokemons() {
  return (
    <div className={styles.container}>
      <SideBar/>
      <Product name={'Pikachu'} price={'100.00'} image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'}/>
    </div>
  )
}

export default Pokemons