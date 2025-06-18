import React, { useContext, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { ProductContext } from '../../context/ProductContext';
import PurchaseSideBar from '../../components/PurchaseSideBar/PurchaseSideBar';
import styles from './ProductDetails.module.css'
import BackButton from '../../components/BackButton/BackButton';

function ProductDetails() {
    const productIdContainer = useParams();
    const {products, isLoadingCategories, isLoadingProducts } = useContext(ProductContext)
    const [purchaseSideBarIsOpen, setPurchaseSideBarIsOpen] = useState(() => {
        if(window.innerWidth < 1200){
            return false
        }
        else{
            return true
        }
    });

    const filteredProduct = products.find(function(product){
        return (product.id).toString() === productIdContainer.productId
    })
    let PageContent;

    function openPurchaseSidebar(){
        setPurchaseSideBarIsOpen(true);
        document.getElementById('overlay').style.visibility = 'visible';
        document.getElementById('overlay').style.opacity = '0.5';
    }

    function closePurchaseSidebar(){
        setPurchaseSideBarIsOpen(false);
        document.getElementById('overlay').style.visibility = 'hidden';
        document.getElementById('overlay').style.opacity = '0';
    }

    if(isLoadingCategories || isLoadingProducts){
        PageContent = <h1>Loading...</h1>
    }
    else if(filteredProduct == null  && isLoadingCategories == false && isLoadingProducts == false){
        PageContent = <Navigate to="/notfound" replace />
    }
    else{
        PageContent = (
            <section className={styles.productDetails}>
                <div className={styles.overlay} id={'overlay'}>
                </div>
                <div className={styles.product__info}>
                    <div className={styles.product__title}>
                        <h1>{filteredProduct.name}</h1>
                        <h2>{filteredProduct.category}</h2>
                    </div>
                    <div className={styles.image__container}>
                        <img src={filteredProduct.image}/>
                    </div>
                    <button className={styles.button} onClick={() => openPurchaseSidebar()}>Add to Cart</button>
                    <p>{filteredProduct.description}</p>
                </div>
                <PurchaseSideBar isOpen={purchaseSideBarIsOpen} closePurchaseSidebar={closePurchaseSidebar} product={filteredProduct}/>
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