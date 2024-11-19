import React from 'react'
import styles from './SideBar.module.css'
import { NavLink } from 'react-router-dom'

function SideBar() {

    const setFocus = React.useCallback(() => {document.getElementById("search").focus();})

    return (
        <div className={styles.sidebar}>
            <h1>PokeStop</h1>
            <div className={styles.search__container} onClick={setFocus}> 
                <img src='/images/search.png' width={'36px'}/>
                <input type="text" id="search" name="search"></input>
            </div>
            <div className={styles.container__items}>
                <NavLink className={({ isActive }) => { if (isActive) return(styles.active)}} to={'/pokemons'}>Pokemons</NavLink>
                <NavLink className={({ isActive }) => { if (isActive) return(styles.active)}} to={'/items'}>Items</NavLink>
            </div>
        </div>
    )
}


export default SideBar