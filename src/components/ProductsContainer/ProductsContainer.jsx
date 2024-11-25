import React, { useContext } from 'react'
import styles from './ProductsContainer.module.css'
import Product from '../Product/Product'
import { ProductContext } from '../../context/ProductContext'

function ProductsContainer({category}) {
  const {products} = useContext(ProductContext)

  const filteredProducts = products.filter(function(product){return product.category === category})

  let conditionalContainer;


  if(filteredProducts.length == 0){
    conditionalContainer = <h1 className={styles.emptyStock__text}>Sem Disponibilidade</h1>;
  }
  else{
    conditionalContainer = (
      <>
        <h1>{category}</h1>
        <div className={styles.productsContainer}>
            {filteredProducts.map((product) => <Product key={product.id} name={product.name} image={product.image} price={product.price} page={'/'}/>)}
        </div>
      </>
    )
  }

  return (
    <section className={styles.products}>
      {conditionalContainer}
    </section>
  )
}

export default ProductsContainer