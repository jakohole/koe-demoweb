import React from 'react';

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentQuestion,
  totalQuestions,
}) => {
  const percentage = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="w-full h-3 bg-gray-300 rounded-lg">
      <div
        className="h-3 bg-blue-500 rounded-lg"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
