import { useState, useEffect } from 'react';
import ScalesInstruction from '../components/ScalesInstruction';
import ScalesQuiz from '../components/ScalesQuiz';
//import SpeedQuiz from '../components/SpeedQuiz';

function ScalesTestPage() {
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
      <div className="flex flex-col items-center justify-center">
        {showTitle && (
          <div className="inline-flex items-start justify-center px-24 pt-26 mt-10 mb-4">
            <p className="font-gothic text-4xl font-bold text-white">
              Part 2-2 - Ethical Directions : 10 Point-Scales Self Assessment
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

export default ScalesTestPage;
