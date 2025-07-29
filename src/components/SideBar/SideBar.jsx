import React, { useContext, useEffect } from 'react'
import styles from './SideBar.module.css'
import { NavLink } from 'react-router-dom'
import { ProductContext } from '../../context/ProductContext'

function SideBar({isOpen, closeMenuSideBar}) {
    const {categories, search,  setSearch} = useContext(ProductContext)

    const setFocus = React.useCallback(() => {
        document.getElementById("search").focus();
    })

    window.addEventListener('resize', resize);

    function resize() {
        if (window.innerWidth < 950) {
            closeMenuSideBar();
            document.getElementById('sidebar').style.transform = 'translateX(-360px)'
        }
        else{
            isOpen = true;
            document.getElementById('sidebar').style.transform = 'translateX(0px)'
        }
    }

    useEffect(() => {
        if(isOpen){
            document.getElementById('sidebar').style.transform = 'translateX(0)'
        }
        else if(!isOpen){
            document.getElementById('sidebar').style.transform = 'translateX(-360px)'
        }
    })    

    return (
        <div className={styles.sidebar} id={'sidebar'}>
            <div className={styles.button__container}>
                <button onClick={() => closeMenuSideBar()}>
                    <img src='/images/close.svg' width={'30px'}/>
                </button>
            </div>
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