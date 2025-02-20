import React, { useContext } from 'react'
import styles from './CategoriesDashboard.module.css'
import { ProductContext } from '../../context/ProductContext'
import {Cell, Column, Row, Table, TableBody, TableHeader} from 'react-aria-components';
import { NavLink } from 'react-router-dom';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';

function CategoriesDashboard() {
    const {categories} = useContext(ProductContext);
    
    return (
    <>
        <DashboardHeader/>
        <section className={styles.section}>
            <Table className={styles.table} aria-label="Files" selectionMode="multiple">
            <TableHeader className={styles.table__header}>
                <Column isRowHeader className={styles.header__text}>Id</Column>
                <Column className={styles.header__text}>Name</Column>
                <Column className={styles.header__text}></Column>
            </TableHeader>
            <TableBody className={styles.table__body}>
                {categories.map((category) => {return(
                <>
                    <Row className={styles.row}>
                    <Cell>{category.id}</Cell>
                    <Cell>{category.name}</Cell>
                    <Cell>
                        <div className={styles.edit__del}>
                        <NavLink className={styles.icon__button} to={`/categoriesDashboard/editForm/${category.id}`}><img src='/images/edit.svg' height={30}/></NavLink>
                        <button className={styles.icon__button}><img src='/images/delete.svg' height={30}/></button>
                        </div>
                    </Cell>
                    </Row>
                </>
                )
                })}
            </TableBody>
            </Table>
        </section>
        </>
        )
}

export default CategoriesDashboard