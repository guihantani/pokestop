import React, { useContext, useState } from 'react'
import styles from './ProductEditForm.module.css'
import { ProductContext } from '../../context/ProductContext'
import { useParams } from 'react-router-dom';
import ProductForm from '../../components/ProductForm/ProductForm';

function ProductEditForm() {
  const {products} = useContext(ProductContext);
  let id = useParams().productId;

  let currentProduct = products.find(product => product.id === id)

  return (
    <ProductForm product={currentProduct}/>
  )
}

export default ProductEditForm