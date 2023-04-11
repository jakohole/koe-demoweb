// ProgressBar.js
import React from 'react';

function ProgressBar({ currentQuestion, totalQuestions }) {
  const percentage = (currentQuestion / totalQuestions) * 100;

  return (
    <React.Fragment>
      <div className="w-full h-3 bg-gray-300 rounded-lg">
        <div
          className="h-3 bg-blue-500 rounded-lg"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </React.Fragment>
  );
}

export default ProgressBar;
