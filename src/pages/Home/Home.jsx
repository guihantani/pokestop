import React, { useEffect } from 'react'
import styles from './Home.module.css'
import {Button} from 'react-aria-components';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate('/allproducts');
  }

  function handleSoundButtonClick() {
    let audio, img;
    audio = document.getElementById("backgroundAudio");
    img = document.getElementById("sound__button__icon");
    
    if(!audio.paused){
      img.src = '/images/sound-mute.svg';
      audio.pause();
    }
    else if(audio.paused){
      img.src = '/images/sound-on.svg'
      audio.play();
    }
  }

  React.useEffect(() => {
    document.getElementById("backgroundAudio").volume = 0.3;
  })

  return (
    <>
      <audio id='backgroundAudio' src='/sounds/homemusic.mp3'>
        <p>Audio not supported</p>
      </audio>
      <section className={styles.home}>
        <div className={styles.container}>
          <div className={styles.vignette}>
          </div>
          <div className={styles.upper__screen}>
            <h1>PokeStop</h1>
          </div>
          <div className={styles.bottom__screen}>
            <Button className={styles.button} onPress={() => handleButtonClick()}>Enter Store</Button>
          </div>
        </div>
      </section>
      <button id='sound__button' className={styles.sound__button} onClick={() => handleSoundButtonClick()}>
        <img id='sound__button__icon' src='/images/sound-mute.svg' height={'30px'}/>
      </button>
    </>
  )
}

export default Home