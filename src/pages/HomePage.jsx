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
        <div className="inline-flex items-start  px-24 pt-26 mt-12 ">
          <img
            src="https://content.keenprofile.com/wp-content/uploads/2022/02/keenprofile-logo-dark.png"
            className="h-auto max-w-full"
            alt="..."
          />
        </div>
        <div className="inline-flex items-start justify-center px-24 pt-26 mt-12 ">
          <p className="font-gothic text-6xl font-bold text-white">
            KEEN Organizational Ethics Assessment
          </p>
        </div>
        <div className="inline-flex items-start justify-center px-24 pt-26 mt-4 mb-2">
          <p className="font-ibm-plex-sans-thai text-6xl font-bold text-white">
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
            <div className="w-full rounded-lg p-8">
              <IntroductionPage />
            </div>
          </div>
        </div>
      )}
      <div className="inline-flex items-start justify-center px-24 pt-26 mt-12 ">
        <p className="font-gothic text-xs font-bold text-gray-400">
          Powered by KEEN Profile Thailand
        </p>
      </div>
    </div>
  );
}
export default HomePage;
