import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../context/ProductContext';
import NotFound from '../NotFound/NotFound';
import PurchaseSideBar from '../../components/PurchaseSideBar/PurchaseSideBar';
import styles from './ProductDetails.module.css'

function ProductDetails() {
    const productNameContainer = useParams();
    const {products} = useContext(ProductContext)
    const filteredProduct = products.find(function(product){
        return product.name === productNameContainer.productName
    })
    let PageContent;

    if(filteredProduct == null){
        PageContent = <NotFound/>
    }
    else{
        PageContent = (
            <section className={styles.productDetails}>
                <div>
                    <h1>{filteredProduct.name}</h1>
                    <h1>{filteredProduct.price}</h1>
                    <img src={filteredProduct.image}/>
                </div>
                <PurchaseSideBar price={filteredProduct.price}/>
            </section>
        )
    }

    return (
        <>
            {PageContent}
        </>
    )
}

export default ProductDetails