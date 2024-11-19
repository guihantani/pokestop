import React from 'react'
import styles from './Home.module.css'
import SideBar from '../../components/SideBar/SideBar'

function Home() {
  return (
    <>
      <a href={'/pokemons'}>Pokemons</a>
      <a href={'/items'}>Items</a>
    </>
  )
}

export default Home