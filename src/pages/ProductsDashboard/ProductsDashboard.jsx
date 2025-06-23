import React, { useContext } from 'react'
import styles from './ProductsDashboard.module.css'
import { ProductContext, useProductContext } from '../../context/ProductContext'
import {Cell, Column, Row, Table, TableBody, TableHeader} from 'react-aria-components';
import { NavLink } from 'react-router-dom';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';

function ProductsDashboard() {
  const {products} = useContext(ProductContext);
  const {deleteProduct} = useProductContext();

  function ConfirmDeletion(product){
    if(confirm(`Delete "${product.name}"?`)){
      deleteProduct(product)
    }
    else{
      return
    }
  }

  return (
    <>
      <DashboardHeader/>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.add__product}>
            <NavLink to={'/productsDashboard/addProductForm'}>Add Product</NavLink>
          </div>
          <Table className={styles.table} aria-label="Files" selectionMode="multiple">
            <TableHeader className={styles.table__header}>
              <Column isRowHeader className={styles.header__text}>Id</Column>
              <Column className={styles.header__text}>Name</Column>
              <Column isRowHeader className={`${styles.header__text} ${styles.optional2}`}>Image</Column>
              <Column className={`${styles.header__text} ${styles.optional}`}>Price</Column>
              <Column className={`${styles.header__text} ${styles.optional}`}>Category</Column>
              <Column className={`${styles.header__text} ${styles.optional}`}>Quantity</Column>
              <Column className={styles.header__text}></Column>
            </TableHeader>
            <TableBody className={styles.table__body}>
              {products.map((product) => {return(
                <>
                  <Row className={styles.row}>
                    <Cell>{product.id}</Cell>
                    <Cell>{product.name}</Cell>
                    <Cell className={styles.optional2}><img src={product.image} height={96} width={96}/></Cell>
                    <Cell className={styles.optional}>{`R$${product.price}`}</Cell>
                    <Cell className={styles.optional}>{product.category}</Cell>
                    <Cell className={styles.optional}>{product.quantity}</Cell>
                    <Cell>
                      <div className={styles.edit__del}>
                        <NavLink className={styles.icon__button} to={`/productsDashboard/productEditForm/${product.id}`}><img src='/images/edit.svg' height={30}/></NavLink>
                        <button className={styles.icon__button} onClick={() => ConfirmDeletion(product)}><img src='/images/delete.svg' height={30}/></button>
                      </div>
                    </Cell>
                  </Row>
                </>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  )
}

export default ProductsDashboard