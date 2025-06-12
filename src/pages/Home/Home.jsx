import React, { useEffect } from 'react'
import styles from './Home.module.css'
import {Button} from 'react-aria-components';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate('/allproducts');
  }

  function handleDashboardClick() {
    navigate('/productsDashboard');
  }

  return (
    <>
      <section className={styles.home}>
        <div className={styles.container}>
          <div className={styles.vignette}>
          </div>
          <div className={styles.upper__screen}>
            <h1>PokeStop</h1>
          </div>
          <div className={styles.bottom__screen}>
            <Button className={styles.button} onPress={() => handleButtonClick()}>Enter Store</Button>
            <Button className={styles.button} onPress={() => handleDashboardClick()}>DashBoard</Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home