import React, { useContext } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { ProductContext } from '../../context/ProductContext';
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
        PageContent = <Navigate to="/notfound" replace />
    }
    else{
        PageContent = (
            <section className={styles.productDetails}>
                <div className={styles.product__info}>
                    <div className={styles.product__title}>
                        <h1>{filteredProduct.name}</h1>
                        <h2>{filteredProduct.category}</h2>
                    </div>
                    <div className={styles.image__container}>
                        <img src={filteredProduct.image}/>
                    </div>
                    <p>{filteredProduct.description}</p>
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