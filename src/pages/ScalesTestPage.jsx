import { useState, useEffect } from 'react';
import ScalesInstruction from '../components/ScalesInstruction';
import ScalesQuiz from '../components/ScalesQuiz';
//import SpeedQuiz from '../components/SpeedQuiz';
import KeenProfileLogo from '../assets/keen.svg';

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
      <div className="flex items-center justify-center">
        <img
          src={KeenProfileLogo}
          alt="KeenProfile Logo"
          className="sm:h-14 md:h-18 absolute top-2 left-2 md:top-4 md:left-4 "
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        {showTitle && (
          <div className="inline-flex flex-col justify-center px-24 pt-26 mt-6 mb-4">
            <p className="font-ibm-plex-san-thai text-5xl font-bold text-white">
            <p>
            พาร์ท 2.1 คำถามเพื่อวัดสถานการณ์ทางเลือกด้านจริยธรรม{' '}
            <span className="font-gothic text-2xl font-bold text-white">
              (Ethical Direction)
            </span>
          </p>
          <p>
            ในรูปแบบของข้อคำถามใช้ความเร็ว{' '}
            <span className="font-gothic text-2xl font-bold text-white">
              (Speed test)
            </span>{' '}
          </p>
            </p>
          </div>
        )}
        {showQuiz ? <ScalesQuiz /> : <ScalesInstruction />}
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
