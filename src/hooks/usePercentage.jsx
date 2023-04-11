// hooks/usePercentage.js
import { useState, useEffect } from 'react';

function usePercentage(currentQuestion, totalQuestions, initialPercentage = 0) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(((currentQuestion / totalQuestions) * 100) + initialPercentage);
  }, [currentQuestion, totalQuestions, initialPercentage]);

  return percentage;
}

export default usePercentage;
