import React from 'react'
import styles from './BackButton.module.css'
import { NavLink } from 'react-router-dom'

function BackButton() {
  return (
    <NavLink to={-1}>
        <img className={styles.backButton} src='/images/back-arrow.svg' height={'50x'}/>
    </NavLink>
  )
}

export default BackButton