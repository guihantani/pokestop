import React from 'react'
import styles from './Product.module.css'

function Product({name, price, image}) {
  return (
    <div className={styles.product}>
        <div className={styles.image__container}>
            <img src={image}/>
        </div>
        <div className={styles.text__container}>
            <p>{name}</p>
            <div className={styles.price__container}>
                <h6>R$</h6>
                <p>{price}</p>
            </div>
        </div>
    </div>
  )
}

export default Product