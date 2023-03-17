import { useState, useEffect } from 'react';
import '../styles/Timer.css';

function Timer() {
  const [seconds, setSeconds] = useState(20);

  useEffect(() => {
    const timer =
      seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const timerClass = seconds <= 10 ? 'bg-red-700' : 'bg-green-400'; // add a class based on seconds

  return (
    <div
      className={`${timerClass} text-white font-bold py-2 px-24 mt-4 rounded`}
      id="timer"
    >
      <div>เวลาคงเหลือ: {seconds} วินาที</div>
    </div>
  );
}

export default Timer;
