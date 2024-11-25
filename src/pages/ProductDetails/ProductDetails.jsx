import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../context/ProductContext';

function ProductDetails() {
    const productNameContainer = useParams();
    const {products} = useContext(ProductContext)
    const filteredProduct = products.find(function(product){
        return product.name === productNameContainer.productName
    })
    let PageContent;

    if(filteredProduct == null){
        PageContent = <h1>Product Not Found!</h1>
    }
    else{
        PageContent = (
            <>
                <h1>{filteredProduct.name}</h1>
                <h1>{filteredProduct.price}</h1>
                <img src={filteredProduct.image}/>
            </>
        )
    }

    return (
        <>
            {PageContent}
        </>
    )
}

export default ProductDetails