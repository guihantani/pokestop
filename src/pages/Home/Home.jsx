import React from 'react'
import styles from './Home.module.css'
import {Button} from 'react-aria-components';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/allproducts');
  }

  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.vignette}>
        </div>
        <div className={styles.upper__screen}>
          <h1>PokeStop</h1>
        </div>
        <div className={styles.bottom__screen}>
          <Button className={styles.button} onPress={() => handleClick()}>Enter Store</Button>
        </div>
      </div>
    </section>
  )
}

export default Home