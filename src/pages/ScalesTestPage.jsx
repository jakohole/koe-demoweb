import { useState, useEffect } from 'react';
import ScalesInstruction from '../components/ScalesInstruction';
//import SpeedQuiz from '../components/SpeedQuiz';

function ScalesTestPage() {
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
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="inline-flex items-start justify-center px-24 pt-26 mt-10 mb-4">
          <p className="font-mono text-4xl font-bold text-gray-100">
            Part 2-2 - Ethical Directions : 10 Point-Scales Self Assessment
          </p>
        </div>
        <div className="py-4">
          {/*<h2 style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
        Part 1.1 Moral Temptations (right vs wrong) - Speed Test
      </h2>*/}
          {showQuiz ? <ScalesInstruction /> : <ScalesTest />}
          {showQuiz ? null : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full"
              onClick={handleStartQuiz}
            >
              เริ่มทำแบบประเมิน
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ScalesTestPage;
