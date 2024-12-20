import React from 'react'
import styles from './Product.module.css'
import { NavLink } from 'react-router-dom'

function Product({name, price, image, page, outOfStock = false}) {
  return (
    <NavLink to={page}>
      <div className={styles.product}>
          <div className={styles.outOfStock__overlay} style={{display: outOfStock? 'block' : 'none'}}>Out Of Stock</div>
          <div className={styles.image__container}>
              <img src={image} alt={`Image of ${name}`}/>
          </div>
          <div className={styles.text__container}>
              <p>{name}</p>
              <div className={styles.price__container}>
                  <h6>R$</h6>
                  <p>{price}</p>
              </div>
          </div>
      </div>
    </NavLink>
  )
}

export default Product