import React, { useState, useRef, useEffect } from 'react';
import "./App.css";
import hat from './images/hat.svg';

import Snow from "./Snow";


const App = () => {

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

   let interval = useRef();

    const startTimer = () => {
  
    const countdownDate = new Date('December 25, 2021 00:00:00').getTime();

      const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop our timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);

      }
    }, 1000)
  };

  useEffect(() => {
   startTimer();
   interval.current = interval;
    return () => {
      clearInterval(interval.current);
    }
  },[])


  return (
    <div className="app">
    <Snow  />
    <section className="timer__container" >
      <section className="timer">
         <h2>Christmas Countdown</h2>
         <img className="hat" src={hat} alt="hat" />
        <div className="timer__box">
          <section>
            <p>{timerDays}</p>
            <p><small>Days</small></p>
          </section>
          <span>:</span>
          <section>
            <p>{timerHours}</p>
            <p><small>Hours</small></p>
          </section>
          <span>:</span>
          <section>
            <p>{timerMinutes}</p>
            <p><small>Minutes</small></p>
          </section>
          <span>:</span>
          <section>
            <p>{timerSeconds}</p>
            <p><small>Seconds</small></p>
          </section>
        </div>
      </section>
    </section >
    </div>
  )
}

export default App

