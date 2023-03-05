import { useEffect } from 'react';
import './IntroductionPage.css';
import SpeedTest from './SpeedTest';
import './App.css';

function SpeedTestPage() {
  const scrollToNext = () => {
    const quiz1 = document.getElementById('quiz1');
    introduction.scrollIntoView({ behavior: 'smooth' });
  };

  // Add event listener to enable scrolling again when card component is no longer fixed
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';

    return () => {
      body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed-card" id="speedtestpage">
      <h2>Part 1.1 Moral Temptations (right vs wrong) - Speed Test</h2>
      <SpeedTest />
      <button className="scroll-to-app-button" onClick={scrollToNext}>
        เริ่มทำแบบประเมิน
      </button>
    </div>
  );
}

export default SpeedTestPage;
