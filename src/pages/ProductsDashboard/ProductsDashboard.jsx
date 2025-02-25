import React, { useContext } from 'react'
import styles from './ProductsDashboard.module.css'
import { ProductContext } from '../../context/ProductContext'
import {Cell, Column, Row, Table, TableBody, TableHeader} from 'react-aria-components';
import { NavLink } from 'react-router-dom';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';

function ProductsDashboard() {
  const {products} = useContext(ProductContext);

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
              <Column isRowHeader className={styles.header__text}>Image</Column>
              <Column className={styles.header__text}>Price</Column>
              <Column className={styles.header__text}>Category</Column>
              <Column className={styles.header__text}>Quantity</Column>
              <Column className={styles.header__text}></Column>
            </TableHeader>
            <TableBody className={styles.table__body}>
              {products.map((product) => {return(
                <>
                  <Row className={styles.row}>
                    <Cell>{product.id}</Cell>
                    <Cell>{product.name}</Cell>
                    <Cell><img src={product.image} height={96} width={96}/></Cell>
                    <Cell>{`R$${product.price}`}</Cell>
                    <Cell>{product.category}</Cell>
                    <Cell>{product.quantity}</Cell>
                    <Cell>
                      <div className={styles.edit__del}>
                        <NavLink className={styles.icon__button} to={`/productsDashboard/editForm/${product.id}`}><img src='/images/edit.svg' height={30}/></NavLink>
                        <button className={styles.icon__button}><img src='/images/delete.svg' height={30}/></button>
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