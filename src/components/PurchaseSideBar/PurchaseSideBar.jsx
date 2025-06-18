import React, { useContext, useEffect, useState } from 'react'
import styles from './PurchaseSideBar.module.css'
import {NumberField, Group, Input, Button} from 'react-aria-components';
import { ShoppingCartContext, useShoppingCartContext } from '../../context/ShoppingCartContext';
import { useNavigate } from 'react-router-dom';

function PurchaseSideBar({isOpen, closePurchaseSidebar, product}) {
    const navigate = useNavigate();
    const {addToCart} = useShoppingCartContext();
    const [inputValue, setInputValue] = useState(1);

    window.addEventListener('resize', resize);

    function resize() {
        if (window.innerWidth < 1200) {
            closePurchaseSidebar();
            document.getElementById('purchaseSideBar').style.transform = 'translateX(400px)'
        }
        else{
            isOpen = true;
            document.getElementById('purchaseSideBar').style.transform = 'translateX(0px)'
        }
    }

    useEffect(() => {
            if(isOpen){
                document.getElementById('purchaseSideBar').style.transform = 'translateX(0)'
            }
            else if(!isOpen){
                document.getElementById('purchaseSideBar').style.transform = 'translateX(400px)'
            }
    })

    function CartButtonClick(){
        const productCopy = structuredClone(product);
        addToCart(productCopy, inputValue);
        navigate('/allproducts');
    }

    return (
        <div className={styles.purchaseSideBar} id={'purchaseSideBar'}>
            <div className={styles.button__container}>
                <button onClick={() => closePurchaseSidebar()}>
                    <img src='/images/arrow.svg' width={'30px'}/>
                </button>
            </div>
            <div className={styles.content}>
                <div className={styles.price__container}>
                    <h6>R$</h6>
                    <p>{product.price}</p>
                </div>
                <div className={styles.available__container}>
                    <p>{`Available: ${product.quantity}`}</p>
                </div>
                <div className={styles.numberStepper}>
                    <NumberField aria-label='quantity field' defaultValue={product.quantity == 0 ? 0 : 1} minValue={product.quantity == 0 ? 0 : 1} onChange={setInputValue} maxValue={product.quantity} className={styles.quantity}>
                        <Group aria-label='quantity group' className={styles.quantity__content}>
                            <Button slot="decrement" className={styles.button__decrement}>-</Button>
                            <Input />
                            <Button slot="increment" className={styles.button_increment}>+</Button>
                        </Group>
                    </NumberField>
                </div>
                {product.quantity == 0 ? 
                    <button className={styles.outOfStock__button} disabled>Out Of Stock</button> : 
                    <button className={styles.button} onClick={() => CartButtonClick()}>Add to Cart</button>
                }
            </div>
        </div>
    )
}

export default PurchaseSideBar