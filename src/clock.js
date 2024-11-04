import React, { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="clock-container">
      <div className="analog-clock">
        <div className="clock-face">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="number" style={{transform: `rotate(${30 * i}deg) translateY(-110px)`}}>
              <span style={{transform: `rotate(${-30 * i}deg)`}}>{i === 0 ? 12 : i}</span>
            </div>
          ))}
          <div
            className="hour-hand"
            style={{ transform: `rotate(${time.getHours() * 30 + time.getMinutes() * 0.5}deg)` }}
          />
          <div
            className="minute-hand"
            style={{ transform: `rotate(${time.getMinutes() * 6 + time.getSeconds() * 0.1}deg)` }}
          />
          <div
            className="second-hand"
            style={{ transform: `rotate(${time.getSeconds() * 6}deg)` }}
          />
        </div>
      </div>
      <div className="digital-clock">
        <h1>{formatTime(time)}</h1>
      </div>
    </div>
  );
};

export default Clock;