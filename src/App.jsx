import { useState } from 'react';
import reactLogo from './assets/react.svg';
import keenLogo from './assets/keen.svg';
import IntroductionPage from './IntroductionPage';
import './App.css';

function App() {
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
        <h1>KEEN Organizational Ethics Assessment</h1>
      </div>
      <div className="app-body">
        <div className="app-card">
          <button onClick={scrollToIntroduction}>Scroll to Introduction</button>
        </div>
      </div>
      <IntroductionPage />
    </div>
  );
}

export default App;
