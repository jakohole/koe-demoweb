import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import keenLogo from '../assets/keen.svg';
import IntroductionPage from './IntroductionPage';
//import '../styles/App.css';
//import '../styles/IntroductionPage.css';
import StartButton from '../assets/button_start.png';

import Speedtest from './SpeedTestPage';

function HomePage() {
  const [showIntroduction, setShowIntroduction] = useState(false);

  const scrollToIntroduction = () => {
    setShowIntroduction(true);
  };

  return (
    <div className="md:container md:mx-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="inline-flex items-start justify-center px-24 pt-26 mt-12 ">
          <p className="font-serif text-4xl font-bold text-gray-100">
            KEEN Organizational Ethics Assessment
          </p>
        </div>
        <div className="inline-flex items-start justify-center px-24 pt-26 mt-2 mb-4">
          <p className="font-ibm-plex-sans-thai text-4xl font-bold text-gray-100">
            แบบประเมินจริยธรรมองค์กร
          </p>
        </div>
        {!showIntroduction && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full"
            onClick={scrollToIntroduction}
          >
            เข้าสู่แบบประเมิน
          </button>
        )}
      </div>
      {showIntroduction && (
        <div className="md:container md:mx-auto " id="introduction">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full rounded-lg shadow-lg p-8">
              <IntroductionPage />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default HomePage;
