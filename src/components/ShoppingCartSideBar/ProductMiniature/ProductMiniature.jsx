import React from 'react'
import styles from './ProductMiniature.module.css'

function ProductMiniature({name, image, price, quantity}) {
    let convertedPrice = Number(price);
    let totalPrice = (convertedPrice * quantity).toFixed(2);

    return (
        <div className={styles.productMiniature}>
            <div className={styles.image__container}>
                <img src={image}/>
            </div>
            <div className={styles.content}>
                <p>{name}</p>
                <div className={styles.price__container}>
                    <h6>R$</h6>
                    <p>{totalPrice}</p>
                </div>
                <p>{`Quantity: ${quantity}`}</p>
            </div>
        </div>
    )
}

export default ProductMiniature