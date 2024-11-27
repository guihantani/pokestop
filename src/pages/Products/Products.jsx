import React, { useContext } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import styles from './Products.module.css'
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer'
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import NotFound from '../NotFound/NotFound';

function Products() {
  const productPageNameContainer = useParams();
  const {categories, isLoadingCategories} = useContext(ProductContext)
  const filteredCategory = categories.find(function(category){
      return category.route === productPageNameContainer.productPage
  })

  let PageContent;

  if(isLoadingCategories){
    PageContent = <h1>Loading...</h1>
  }

  if(productPageNameContainer.productPage == 'allproducts' && isLoadingCategories == false){
    PageContent = (
      <div className={styles.container}>
        <SideBar/>
        <ProductsContainer category='allproducts'/>
      </div>
    )
  }
  else if(filteredCategory == null && isLoadingCategories == false){
      PageContent = <NotFound/>
  }
  else if(filteredCategory != null && isLoadingCategories == false){
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