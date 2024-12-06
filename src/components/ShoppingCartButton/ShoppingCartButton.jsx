import React, { useState } from 'react'
import styles from './ShoppingCartButton.module.css'
import ShoppingCartSideBar from '../ShoppingCartSideBar/ShoppingCartSideBar'

function ShoppingCartButton() {
  const [sidebarIsOpen, setIsOpen] = useState(false);

  function openSidebar(){
    setIsOpen(true);
  }

  function closeSidebar(){
    setIsOpen(false);
  }
  
  return (
    <>
      <ShoppingCartSideBar isOpen={sidebarIsOpen} closeSidebar={closeSidebar}/>
      <div className={styles.button__container}>
        <button className={styles.shoppingCartButton} onClick={() => openSidebar()}>
          <div className={styles.cart__icon}>
            <img src='/images/cart.svg' height={'30px'} width={'30px'}/>
          </div>
          <img src='/images/arrow.svg' width={'30px'}/>
        </button>
      </div>
    </>
  )
}

export default ShoppingCartButton