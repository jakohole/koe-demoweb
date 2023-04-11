// ProgressBar.js
import React from 'react';
import usePercentage from '../hooks/usePercentage';

function ProgressBar({ currentQuestion, totalQuestions, initialPercentage }) {
  const percentage = usePercentage(
    currentQuestion,
    totalQuestions,
    initialPercentage
  );
  //console.log(percentage)

  return (
    <React.Fragment>
      <div className="text-sm text-white font-bold mt-2 mb-2">
        {percentage.toFixed(0)}% Completed
      </div>
      <div className="w-full h-3 bg-gray-300 rounded">
        <div
          className="h-3 bg-blue-500 rounded"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </React.Fragment>
  );
}

export default ProgressBar;
