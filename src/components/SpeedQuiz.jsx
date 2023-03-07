import React, { useState } from 'react';
import '.././styles/Introduction.css';
import '../styles/App.css';

function SpeedQuiz() {
  const [showChoices, setShowChoices] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleShowChoices = () => {
    setShowChoices(true);
  };

  const handleSelectChoice = (event) => {
    setSelectedChoice(event.target.value);
  };

  const handleNext = () => {
    // Do something when 'next' is clicked
  };

  return (
    <div className="box" id="speedquiz">
      <p>Hello, what is your favorite color?</p>
      {showChoices ? (
        <div>
          <input type="radio" name="color" value="red" onChange={handleSelectChoice} />
          <label for="color">Red</label>
          <br />
          <input type="radio" name="color" value="blue" onChange={handleSelectChoice} />
          <label for="color">Blue</label>
          <br />
          <input type="radio" name="color" value="green" onChange={handleSelectChoice} />
          <label for="color">Green</label>
          <br />
          <input type="radio" name="color" value="yellow" onChange={handleSelectChoice} />
          <label for="color">Yellow</label>
          <br />
          <input type="radio" name="color" value="purple" onChange={handleSelectChoice} />
          <label for="color">Purple</label>
          <br />
          <button onClick={handleNext}>Next</button>
        </div>
      ) : (
        <button onClick={handleShowChoices}>Show choices</button>
      )}
    </div>
  );
}

export default SpeedQuiz;
