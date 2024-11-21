import React from 'react'
import styles from './ProductsContainer.module.css'
import Product from '../Product/Product'

function ProductsContainer({category}) {
  return (
    <section className={styles.productsContainer}>
        <Product name={'Pikachu'} price={'100.00'} image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'} page={'/'}/>
        <Product name={'Pikachu'} price={'100.00'} image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'} page={'/'}/>
        <Product name={'Pikachu'} price={'100.00'} image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'} page={'/'}/>
        <Product name={'Pikachu'} price={'100.00'} image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'} page={'/'}/>
        <Product name={'Pikachu'} price={'100.00'} image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'} page={'/'}/>
        <Product name={'Pikachu'} price={'100.00'} image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'} page={'/'}/>
        <Product name={'Pikachu'} price={'100.00'} image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'} page={'/'}/>
        <Product name={'Pikachu'} price={'100.00'} image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'} page={'/'}/>
        <Product name={'Pikachu'} price={'100.00'} image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'} page={'/'}/>
        <Product name={'Pikachu'} price={'100.00'} image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'} page={'/'}/>
        <Product name={'Pikachu'} price={'100.00'} image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'} page={'/'}/>
        <Product name={'Pikachu'} price={'100.00'} image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'} page={'/'}/>
        <Product name={'Pikachu'} price={'100.00'} image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'} page={'/'}/>
    </section>
  )
}

export default ProductsContainer