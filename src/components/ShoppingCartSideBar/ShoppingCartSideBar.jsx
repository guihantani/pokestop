import React, { useContext, useEffect } from 'react'
import styles from './ShoppingCartSideBar.module.css'
import ProductMiniature from './ProductMiniature/ProductMiniature'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'
import { ProductContext } from '../../context/ProductContext'

function ShoppingCartSideBar({isOpen, closeSidebar}) {
    const {cartProducts} = useContext(ShoppingCartContext)

    let productsRender;

    useEffect(() => {
        if(isOpen){
            document.getElementById('shoppingCartSideBar').style.transform = 'translateX(0)'
        }
        else if(!isOpen){
            document.getElementById('shoppingCartSideBar').style.transform = 'translateX(350px)'
        }
    })

    return (
        <div className={styles.shoppingCartSideBar} id='shoppingCartSideBar'>
            <div className={styles.button__container}>
                <button onClick={() => closeSidebar()}>
                <img src='/images/arrow.svg' width={'30px'}/>
                </button>
            </div>
            <div className={styles.products__container}>
                {cartProducts.map((product) => <ProductMiniature key={product.id} name={product.name} image={product.image} price={product.price} quantity={product.quantity}/>)}
            </div>
        </div>
  )
}

export default ShoppingCartSideBar