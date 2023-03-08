import { useState, useEffect } from 'react';
import '../styles/Timer.css';

function Timer() {
  const [seconds, setSeconds] = useState(20);

  useEffect(() => {
    const timer =
      seconds > 0 && setInterval(() => setSeconds(seconds - 1), 2000);
    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <div className="timer-container">
      <div className="timer">{seconds}</div>
    </div>
  );
}

export default Timer;
