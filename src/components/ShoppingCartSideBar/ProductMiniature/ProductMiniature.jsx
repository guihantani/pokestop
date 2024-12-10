import React from 'react'
import styles from './ProductMiniature.module.css'
import { useShoppingCartContext } from '../../../context/ShoppingCartContext';

function ProductMiniature({name, image, price, quantity}) {
    const {deleteFromCart} = useShoppingCartContext();

    let convertedPrice = Number(price);
    let totalPrice = (convertedPrice * quantity).toFixed(2);


    return (
        <div className={styles.productMiniature}>
            <div className={styles.image__container}>
                <img src={image}/>
            </div>
            <div className={styles.content}>
                <p>{`x${quantity} ${name}`}</p>
                <div className={styles.price__container}>
                    <h6>R$</h6>
                    <p>{totalPrice}</p>
                </div>
            </div>
            <button className={styles.deleteButton} onClick={() => deleteFromCart(name)}>
                    <img src='/images/trash.svg'/>
            </button>
        </div>
    )
}

export default ProductMiniature