import React, { useContext } from 'react'
import styles from './SideBar.module.css'
import { NavLink } from 'react-router-dom'
import { ProductContext } from '../../context/ProductContext'

function SideBar() {
    const {categories, search,  setSearch} = useContext(ProductContext)

    const setFocus = React.useCallback(() => {
        document.getElementById("search").focus();
    })
    

    return (
        <div className={styles.sidebar}>
            <h1>PokeStop</h1>
            <div className={styles.search__container} onClick={setFocus}> 
                <img src='/images/search.png' width={'36px'}/>
                <input type="text" id="search" name="search" defaultValue={search} onChange={(e) => {setSearch(e.target.value.toLowerCase())}}></input>
            </div>
            <div className={styles.container__items}>
                <NavLink className={({ isActive }) => { if (isActive) return(styles.active)}} to={`/allproducts`}>All Products</NavLink>
                {categories.map((category) => <NavLink key={category.id} className={({ isActive }) => { if (isActive) return(styles.active)}} to={`/${category.name}`}>{`${category.name}`}</NavLink>)}
            </div>
        </div>
    )
}


export default SideBar