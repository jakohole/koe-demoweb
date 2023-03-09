import React, { useState } from 'react';
import Instruction from '../components/OddmanoutInstruction';
import OddmanoutQuiz from '../components/OddmanoutQuiz.jsx';
//import Instruction from './Instruction';
import Quiz from '../components/OddmanoutQuiz.jsx';

function OddmanoutPage() {
  const scrollToQuiz = () => {
    const oddquiz = document.getElementById('oddmanout');
    oddquiz.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <div className="app-body">
        <div className="app-card">
          <h2>
            <span> Odd Man Out Test</span>
          </h2>
          <div className="box">
            <Instruction />
            <button onClick={scrollToQuiz}>เริ่มทำแบบประเมิน</button>
          </div>
        </div>
      </div>

      <OddmanoutQuiz />
    </div>
  );
}

export default OddmanoutPage;
