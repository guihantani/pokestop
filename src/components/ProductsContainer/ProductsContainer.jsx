import React, { useContext } from 'react'
import styles from './ProductsContainer.module.css'
import Product from '../Product/Product'
import { ProductContext } from '../../context/ProductContext'

function ProductsContainer({category}) {
  const {products} = useContext(ProductContext)

  const filteredProducts = products.filter(function(product){return product.category === category})

  console.log(filteredProducts)

  return (
    <section className={styles.productsContainer}>
        {filteredProducts.map((product) => <Product key={product.id} name={product.name} image={product.image} price={product.price} page={'/'}/>)}
    </section>
  )
}

export default ProductsContainer