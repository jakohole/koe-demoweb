import { useState, useEffect } from 'react';
//import '../styles/IntroductionPage.css';
import SpeedTest from '../components/SpeedTest';
import SpeedQuiz from '../components/SpeedQuiz';
//import '../styles/App.css';
//import '../styles/Quiz.css';
import KeenProfileLogo from '../assets/keen.svg';

function SpeedTestPage() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showTitle, setShowTitle] = useState(true);

  const handleStartQuiz = () => {
    setShowQuiz(true);
    setShowTitle(false);
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
    <div>
      <div className="flex items-center justify-center">
        <img
          src={KeenProfileLogo}
          alt="KeenProfile Logo"
          className="sm:h-14 md:h-18 absolute top-2 left-2 md:top-4 md:left-4 "
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        {showTitle && (
          <div className="flex flex-col justify-center px-24 pt-26 mt-6 mb-4 text-center">
            <p className="font-ibm-plex-san-thai text-5xl font-bold text-white">
              แบบประเมินจริยธรรมองค์กร
            </p>
            <p className="font-gothic text-4xl font-bold text-white">
              Part 1-1 - Moral Temptation : Speed Test
            </p>
          </div>
        )}
        {showQuiz ? <SpeedQuiz /> : <SpeedTest />}
        {showQuiz ? null : (
          <div className="py-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full"
              onClick={handleStartQuiz}
            >
              เริ่มทำแบบประเมิน
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SpeedTestPage;
