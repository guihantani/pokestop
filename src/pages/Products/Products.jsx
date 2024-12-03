import React, { useContext } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import styles from './Products.module.css'
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer'
import { Navigate, useParams } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';

function Products() {
  const productPageNameContainer = useParams();
  const {categories, isLoadingCategories, isLoadingProducts} = useContext(ProductContext)
  const filteredCategory = categories.find(function(category){
      return category.route === productPageNameContainer.productPage
  })

  let PageContent;

  if(isLoadingCategories || isLoadingProducts){
    PageContent = <h1>Loading...</h1>
  }

  if(productPageNameContainer.productPage == 'allproducts' && isLoadingCategories == false && isLoadingProducts == false){
    PageContent = (
      <div className={styles.container}>
        <SideBar/>
        <ProductsContainer category='allproducts'/>
      </div>
    )
  }
  else if(filteredCategory == null && isLoadingCategories == false && isLoadingProducts == false){
      PageContent = <Navigate to="/notfound" replace />
  }
  else if(filteredCategory != null && isLoadingCategories == false && isLoadingProducts == false){
      PageContent = (
        <div className={styles.container}>
          <SideBar/>
          <ProductsContainer category={filteredCategory.name}/>
        </div>
      )
  }

  return (
    <>
      {PageContent}
    </>
  )
}

export default Products