import React from 'react'
import styles from './PurchaseSideBar.module.css'

function PurchaseSideBar({price}) {
    return (
        <div className={styles.purchaseSideBar}>
            <div className={styles.content}>
                <div className={styles.price__container}>
                    <h6>R$</h6>
                    <p>{price}</p>
                </div>
                <button className={styles.button}>Add to Cart</button>
            </div>
        </div>
    )
}

export default PurchaseSideBar