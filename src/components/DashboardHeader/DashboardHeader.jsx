import React from 'react'
import styles from './DashboardHeader.module.css'
import { NavLink } from 'react-router-dom'

function DashboardHeader() {
  return (
    <header className={styles.header}>
        <NavLink className={({ isActive }) => { if (isActive) return(styles.active)}} to={'/productsDashboard'}>Products</NavLink>
        <NavLink className={({ isActive }) => { if (isActive) return(styles.active)}} to={'/categoriesDashboard'}>Categories</NavLink>
    </header>
  )
}

export default DashboardHeader