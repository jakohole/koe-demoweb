import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import keenLogo from '../assets/keen.svg';
import IntroductionPage from './IntroductionPage';
//import '../styles/App.css';
//import '../styles/IntroductionPage.css';
import StartButton from '../assets/button_start.png';

import Speedtest from './SpeedTestPage';

function HomePage() {
  const [count, setCount] = useState(0);

  const scrollToIntroduction = () => {
    const introduction = document.getElementById('introduction');
    introduction.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="md:container md:mx-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="inline-flex items-start justify-center px-24 pt-26 mt-10 ">
          <p className="font-sans text-4xl font-bold text-gray-100">
            KEEN Organizational Ethics Assessment
          </p>
        </div>
        <div className="inline-flex items-start justify-center px-24 pt-26 mt-2 mb-4">
          <p className="font-ibm-plex-sans-thai text-4xl font-bold text-gray-100">
            แบบประเมินจริยธรรมองค์กร
          </p>
        </div>
        <div>
          <IntroductionPage />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
