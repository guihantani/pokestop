import React, { useContext, useState } from 'react'
import styles from './PurchaseSideBar.module.css'
import {NumberField, Group, Input, Button} from 'react-aria-components';
import { ShoppingCartContext, useShoppingCartContext } from '../../context/ShoppingCartContext';
import { useNavigate } from 'react-router-dom';

function PurchaseSideBar({product}) {
    const navigate = useNavigate();
    const {addToCart} = useShoppingCartContext();
    const [inputValue, setInputValue] = useState(1);
    const {cartProducts} = useContext(ShoppingCartContext)

    function CartButtonClick(){
        const productCopy = structuredClone(product);
        addToCart(productCopy, inputValue);
        navigate('/allproducts');
    }

    return (
        <div className={styles.purchaseSideBar}>
            <div className={styles.content}>
                <div className={styles.price__container}>
                    <h6>R$</h6>
                    <p>{product.price}</p>
                </div>
                <div className={styles.available__container}>
                    <p>{`Available: ${product.quantity}`}</p>
                </div>
                <div className={styles.numberStepper}>
                    <NumberField aria-label='quantity field' defaultValue={1} minValue={1} onChange={setInputValue} maxValue={product.quantity} className={styles.quantity}>
                        <Group aria-label='quantity group' className={styles.quantity__content}>
                            <Button slot="decrement" className={styles.button__decrement}>-</Button>
                            <Input />
                            <Button slot="increment" className={styles.button_increment}>+</Button>
                        </Group>
                    </NumberField>
                </div>
                <button className={styles.button} onClick={() => CartButtonClick()}>Add to Cart</button>
            </div>
        </div>
    )
}

export default PurchaseSideBar