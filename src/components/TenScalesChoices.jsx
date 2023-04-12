import React, { useState } from 'react';

function TenScalesChoices({ onChoiceClick }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index);
    onChoiceClick(index, true);
  };

  return (
    <div
      className="flex space-x-2 items-start justify-center py-5 "
      style={{ width: 800, height: 120 }}
    >
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={` w-full h-full ${
            index === selected
              ? 'bg-gradient-to-t from-teal-300 to-teal-500'
              : 'bg-white'
          } hover:text-white hover:bg-gray-200`}
          onClick={() => handleSelect(index)}
        >
          <div className="flex items-center justify-center flex-1  h-full px-6 pt-6 pb-8">
            <p
              className={`flex-1 h-full text-base leading-loose text-center font-semibold${
                selected === index ? 'text-white' : ''
              } hover:text-white`}
            >
              {5 - index}
            </p>
          </div>
          <input
            type="radio"
            name="scale"
            value={index}
            checked={selected === index}
            onChange={() => {}}
            className="hidden"
          />
        </div>
      ))}
      <div className="h-full">
        <div className="flex items-center justify-center flex-1 w-3 h-full pt-6 pb-8"></div>
      </div>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`w-full h-full ${
            index + 5 === selected
              ? 'bg-gradient-to-t from-teal-300 to-teal-500'
              : 'bg-white'
          } hover:text-white hover:bg-gray-200`}
          onClick={() => handleSelect(index + 5)}
        >
          <div className="flex items-center justify-center flex-1 w-3 h-full px-9 pt-6 pb-8">
            <p
              className={`flex-1 h-full text-base leading-loose text-center font-semibold${
                selected === index + 5 ? 'text-white' : ''
              } hover:text-white`}
            >
              {index + 1}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TenScalesChoices;
