import React, { useContext } from 'react'
import styles from './ProductsContainer.module.css'
import Product from '../Product/Product'
import { ProductContext } from '../../context/ProductContext'
import ShoppingCartButton from '../ShoppingCartButton/ShoppingCartButton'

function ProductsContainer({category}) {
  const {products, search} = useContext(ProductContext)
  let categoryProducts;
  let filteredProducts;
  let categoryTitle = category;
  
  if(category == 'allproducts'){
    categoryTitle = 'All Products'
    filteredProducts = products.filter((product) =>{
      if (
        product.name.toLowerCase().includes(search)
      ) {
        return product;
      }      
    })
  }
  else{
    categoryProducts = products.filter(function(product){return product.category === category})
    filteredProducts = categoryProducts.filter((product) =>{
      if (
        product.name.toLowerCase().includes(search)
      ) {
        return product;
      }    
    })
  }

  let conditionalContainer;

  if(filteredProducts.length == 0){
    conditionalContainer = <h1 className={styles.emptyStock__text}>No Stock Available</h1>;
  }
  else{
    conditionalContainer = (
      <>
        <h1>{categoryTitle}</h1>
        <div className={styles.productsContainer}>
            {filteredProducts.map((product) =>{
              if(product.quantity == 0){
                return(<Product outOfStock key={product.id} name={product.name} image={product.image} price={product.price} page={`/${category}/${product.id}`}/>)
              }
              else{
                return(<Product key={product.id} name={product.name} image={product.image} price={product.price} page={`/${category}/${product.id}`}/>)
              }
            })}
        </div>
      </>
    )
  }

  return (
    <section className={styles.products}>
      <ShoppingCartButton/>
      {conditionalContainer}
    </section>
  )
}

export default ProductsContainer