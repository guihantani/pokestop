import React, { useContext, useEffect } from 'react'
import styles from './ShoppingCartSideBar.module.css'
import ProductMiniature from './ProductMiniature/ProductMiniature'
import { ShoppingCartContext, useShoppingCartContext } from '../../context/ShoppingCartContext'
import { useProductContext } from '../../context/ProductContext'

function ShoppingCartSideBar({isOpen, closeSidebar}) {
    const {updateProductQuantity} = useProductContext();
    const {cartProducts} = useContext(ShoppingCartContext)
    const {clearCart} = useShoppingCartContext();

    useEffect(() => {
        if(isOpen){
            document.getElementById('shoppingCartSideBar').style.transform = 'translateX(0)'
        }
        else if(!isOpen){
            document.getElementById('shoppingCartSideBar').style.transform = 'translateX(350px)'
        }

        if(cartProducts.length == 0){
            document.getElementById('purchase__button').style.display = 'none'
        }
    })

    function finishPurchase(){
        for (var i = 0; i < cartProducts.length; i++) {
            updateProductQuantity(cartProducts[i]);
        }
        clearCart();
        window.location.reload();
        return;
    }

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
            <button id={'purchase__button'} className={styles.purchase__button} onClick={() => finishPurchase()}>Finish Purchase</button>
        </div>
  )
}

export default ShoppingCartSideBar