import React, { useState, useEffect } from 'react';

export const Timer = () => {

  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  // this function runs as soon as component is rendered.
  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }
    // cleanup function for when we leave page.
    return () => clearInterval(interval)

  }, [timerOn])

  return (
    <div>
      <div>
        {/* we divide it by 100 because when it gets up to 99 we want it to go back to zero */}
        <span>{(time / 10) % 100}</span>
      </div>
      <div>
        <button onClick={() => setTimerOn(true)}>Start</button>
        <button onClick={() => setTimerOn(false)}>Stop</button>
        <button onClick={() => setTimerOn(true)}>Resume</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  )
}
