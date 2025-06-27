import React, { useContext, useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import styles from './Products.module.css'
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer'
import { Navigate, useParams } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';

function Products() {
  const productPageNameContainer = useParams();
  const {categories, isLoadingCategories, isLoadingProducts} = useContext(ProductContext)
  const [menuSideBarIsOpen, setMenuSideBarIsOpen] = useState(() => {
      if(window.innerWidth < 950){
          return false
      }
      else{
          return true
      }
  });
  const filteredCategory = categories.find(function(category){
      return category.name === productPageNameContainer.productPage
  })

  function openMenuSideBar(){
      setMenuSideBarIsOpen(true);
  }

  function closeMenuSideBar(){
      setMenuSideBarIsOpen(false);
  }  

  let PageContent;

  if(isLoadingCategories || isLoadingProducts){
    PageContent = <h1>Loading...</h1>
  }

  if(productPageNameContainer.productPage == 'allproducts' && isLoadingCategories == false && isLoadingProducts == false){
    PageContent = (
      <>
        <div className={styles.button__container}>
            <button className={styles.button} onClick={() => openMenuSideBar()}>
              <img src='/images/menu.svg' width={'50px'}/>
            </button>
        </div>
        <div className={styles.container}>
          <SideBar isOpen={menuSideBarIsOpen} closeMenuSideBar={closeMenuSideBar}/>
          <ProductsContainer category='allproducts'/>
        </div>
      </>
    )
  }
  else if(filteredCategory == null && isLoadingCategories == false && isLoadingProducts == false){
      PageContent = <Navigate to="/notfound" replace />
  }
  else if(filteredCategory != null && isLoadingCategories == false && isLoadingProducts == false){
      PageContent = (
        <>
        <div className={styles.button__container}>
            <button className={styles.button} onClick={() => openMenuSideBar()}>
              <img src='/images/menu.svg' width={'50px'}/>
            </button>
        </div>
          <div className={styles.container}>
            <SideBar isOpen={sideBarIsOpen} closeMenuSideBar={closeMenuSideBar}/>
            <ProductsContainer category={filteredCategory.name}/>
          </div>
        </>
      )
  }

  return (
    <>
      {PageContent}
    </>
  )
}

export default Products