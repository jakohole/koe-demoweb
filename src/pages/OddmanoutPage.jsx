import React, { useState } from 'react';
import OddmanoutQuiz from '../components/OddmanoutQuiz.jsx';
//import Instruction from './Instruction';
import Quiz from '../components/OddmanoutQuiz.jsx';

function OddmanoutPage() {
  const [count, setCount] = useState(0);

  const scrollToQuiz = () => {
    const introduction = document.getElementById('oddmanout');
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
          <h1>Odd Man Out Test</h1>
          <button onClick={scrollToQuiz}>เริ่มทำแบบประเมิน</button>
        </div>
      </div>

      {
        //<SpeedTestPage />
      }
    </div>
  );
}

export default OddmanoutQuiz;
