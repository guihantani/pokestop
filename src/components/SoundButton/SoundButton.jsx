import React, { useEffect } from 'react'
import styles from './SoundButton.module.css'
import { useLocation } from 'react-router-dom';

function SoundButton({volume = 0.3}) {
  const location = useLocation();

  useEffect(() => {
    let audio = document.getElementById("backgroundAudio");
    let soundSrc = audio.getAttribute('src');

    if(location.pathname == '/'){
      audio.src = '/sounds/homemusic.mp3'
    }
    else if(location.pathname == '/notfound'){
      audio.pause();
      document.getElementById("button__container").style.display = 'none';
    }
    else if(location.pathname != '/' && soundSrc == '/sounds/homemusic.mp3' && !audio.paused){
      audio.src = '/sounds/shopmusic.mp3'
      audio.play();
    }
    else if(location.pathname != '/' && soundSrc == '/sounds/homemusic.mp3' && audio.paused){
      audio.src = '/sounds/shopmusic.mp3'
    }
    else if((location.pathname).includes('/productsDashboard') || (location.pathname).includes('/categoriesDashboard')){
      audio.pause();
      document.getElementById("button__container").style.display = 'none';
    }
  }, [location]);

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
    document.getElementById("backgroundAudio").volume = volume;
  })

  return (
    <div id='button__container'>
      <audio id='backgroundAudio' src='/sounds/homemusic.mp3' loop>
          <p>Audio not supported</p>
      </audio>
      <button id='sound__button' className={styles.sound__button} onClick={() => handleSoundButtonClick()}>
          <img id='sound__button__icon' src='/images/sound-mute.svg' height={'30px'}/>
      </button>
    </div>
  );
}

export default SoundButton