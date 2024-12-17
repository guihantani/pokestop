import React, { useContext, useEffect, useState } from 'react'
import styles from './ProductMiniature.module.css'
import { useShoppingCartContext } from '../../../context/ShoppingCartContext';
import { Button, Group, Input, NumberField } from 'react-aria-components';
import { ProductContext } from '../../../context/ProductContext';

function ProductMiniature({id, name, image, price, quantity}) {
    const {deleteFromCart, updateCartProduct} = useShoppingCartContext();
    const {products} = useContext(ProductContext);
    const [inputValue, setInputValue] = useState(quantity);

    const defaultProduct = products.find((product) => product.id == id);

    return (
        <div className={styles.productMiniature}>
            <div className={styles.image__container}>
                <img src={image}/>
            </div>
            <div className={styles.content}>
                <p>{`x${inputValue} ${name}`}</p>
                <div className={styles.price__container}>
                    <h6>R$</h6>
                    <p>{(Number(price) * inputValue).toFixed(2)}</p>
                </div>
                <div className={styles.numberStepper}>
                    <NumberField aria-label='quantity field' value={inputValue} minValue={1} onChange={(value) => {
                        setInputValue(value);
                        updateCartProduct(id, value);
                    }} 
                        maxValue={defaultProduct.quantity} className={styles.quantity}>
                        <Group aria-label='quantity group' className={styles.quantity__content}>
                            <Button slot="decrement" className={styles.button__decrement}>-</Button>
                            <Input />
                            <Button slot="increment" className={styles.button_increment}>+</Button>
                        </Group>
                    </NumberField>
                </div>
            </div>
            <button className={styles.deleteButton} onClick={() => deleteFromCart(id)}>
                    <img src='/images/trash.svg'/>
            </button>
        </div>
    )
}

export default ProductMiniature