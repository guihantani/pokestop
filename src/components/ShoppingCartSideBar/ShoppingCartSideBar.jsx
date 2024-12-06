import React, { useEffect } from 'react'
import styles from './ShoppingCartSideBar.module.css'
import ProductMiniature from './ProductMiniature/ProductMiniature'

function ShoppingCartSideBar({isOpen, closeSidebar}) {

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
                <ProductMiniature name={'Pikachu'} price={'100.00'} quantity={10} image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"}/>
                <ProductMiniature name={'Pikachu'} price={'100.00'} quantity={9} image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"}/>
            </div>
        </div>
  )
}

export default ShoppingCartSideBar