import { useState } from 'react';
import reactLogo from './assets/react.svg';
import keenLogo from './assets/keen.svg';
import IntroductionPage from './IntroductionPage';
import './styles/App.css';
import './styles/IntroductionPage.css';
import StartButton from './assets/button_start.png';

import Speedtest from './SpeedTestPage';

function HomePage() {
  const [count, setCount] = useState(0);

  const scrollToIntroduction = () => {
    const introduction = document.getElementById('introduction');
    introduction.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <div className="app-header">
        {
          //<img src={keenLogo} className="logo" alt="Keen logo" />
        }
      </div>
      <div className="app-body">
        <div className="app-card">
          <h1>KEEN Organizational Ethics Assessment</h1>
          <button onClick={scrollToIntroduction}>Next</button>
        </div>
      </div>
      <IntroductionPage />
      {
        //<SpeedTestPage />
      }
    </div>
  );
}

export default HomePage;
