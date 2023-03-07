import { useState, useEffect } from 'react';
import './IntroductionPage.css';
import SpeedTest from './SpeedTest';
import SpeedQuiz from './SpeedQuiz';
import './styles/App.css';
import './styles/Quiz.css';

function SpeedTestPage() {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartQuiz = () => {
    setShowQuiz(true);
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
    <div className="box" style={{ marginTop: '100px', position: 'relative' }}>
      <h2 style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
        Part 1.1 Moral Temptations (right vs wrong) - Speed Test
      </h2>
      {showQuiz ? <SpeedQuiz /> : <SpeedTest />}
      {showQuiz ? null : (
        <button
          className="scroll-to-app-button"
          onClick={handleStartQuiz}
          style={{ position: 'fixed', bottom: '20px', right: '20px' }}
        >
          เริ่มทำแบบประเมิน
        </button>
      )}
    </div>
  );
}

export default SpeedTestPage;
