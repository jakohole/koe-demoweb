import React, { useState } from 'react';
//import Instruction from './Instruction';
import Quiz from '../components/OddmanoutQuiz.jsx';

function OddmanoutQuiz() {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartQuiz = () => {
    setShowQuiz(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="box" style={{ borderRadius: 10 }}>
      <button onClick={handleStartQuiz}>เริ่มทำแบบประเมิน</button>
      {showQuiz && <div>{<Quiz />}</div>}
    </div>
  );
}

export default OddmanoutQuiz;
