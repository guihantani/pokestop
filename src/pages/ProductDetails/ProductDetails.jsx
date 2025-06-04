import React, { useContext } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { ProductContext } from '../../context/ProductContext';
import PurchaseSideBar from '../../components/PurchaseSideBar/PurchaseSideBar';
import styles from './ProductDetails.module.css'
import BackButton from '../../components/BackButton/BackButton';

function ProductDetails() {
    const productIdContainer = useParams();
    const {products, isLoadingCategories, isLoadingProducts } = useContext(ProductContext)
    const filteredProduct = products.find(function(product){
        return (product.id).toString() === productIdContainer.productId
    })
    let PageContent;

    if(isLoadingCategories || isLoadingProducts){
        PageContent = <h1>Loading...</h1>
    }
    else if(filteredProduct == null  && isLoadingCategories == false && isLoadingProducts == false){
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
                <PurchaseSideBar product={filteredProduct}/>
            </section>
        )
    }

    return (
        <>
            <BackButton/>
            {PageContent}
        </>
    )
}

export default ProductDetails