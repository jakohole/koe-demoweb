import React, { useState } from 'react';
import Instruction from '../components/NoTimelimitInstruction';
import NoTimelimitQuiz from '../components/NoTimelimitQuiz';
//import Instruction from './Instruction';
import Quiz from '../components/OddmanoutQuiz.jsx';

function NoTimelimitPage() {
  const scrollToQuiz = () => {
    const ntlquiz = document.getElementById('no-time-limit');
    ntlquiz.scrollIntoView({ behavior: 'smooth' });
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
          <h2>
            <span> No Time-limit Test</span>
          </h2>
          <div className="box">
            <Instruction />
            <button onClick={scrollToQuiz}>เริ่มทำแบบประเมิน</button>
          </div>
        </div>
      </div>

      <NoTimelimitQuiz />
    </div>
  );
}

export default NoTimelimitPage;
