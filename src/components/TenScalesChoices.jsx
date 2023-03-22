import React, { useState } from 'react';

function TenScalesChoices() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected((prevSelected) => (prevSelected === index ? null : index));
  };

  return (
    <div
      className="flex space-x-2 items-start justify-center py-4 "
      style={{ width: 800, height: 120 }}
    >
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`w-10/5 h-full ${
            index === selected
              ? 'bg-gradient-to-t from-teal-300 to-teal-500'
              : 'bg-white'
          } hover:text-white hover:bg-gray-200`}
          onClick={() => handleSelect(index)}
        >
          <div className="flex items-center justify-center flex-1 h-full px-9 pt-6 pb-8">
            <p
              className={`flex-1 h-full text-xl font-lg leading-loose text-center font-semibold${
                selected === index ? 'text-white' : ''
              } hover:text-white`}
            >
              {5 - index}
            </p>
          </div>
          {index === 0 && (
            <p className="text-left text-gray-500 text-sm">
              {'การปรับตัว (Adaptation)'}
            </p>
          )}
        </div>
      ))}
      <div className="w-10/5 h-full">
        <div className="flex items-center justify-center flex-1 h-full px-4 pt-6 pb-8"></div>
      </div>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`w-10/5 h-full ${
            index + 5 === selected
              ? 'bg-gradient-to-t from-teal-300 to-teal-500'
              : 'bg-white'
          } hover:text-white hover:bg-gray-200`}
          onClick={() => handleSelect(index + 5)}
        >
          <div className="flex items-center justify-center flex-1 h-full px-9 pt-6 pb-8">
            <p
              className={`flex-1 h-full text-xl font-lg leading-loose text-center font-semibold${
                selected === index + 5 ? 'text-white' : ''
              } hover:text-white`}
            >
              {index + 1}
            </p>
          </div>
          {index === 4 && (
            <p className="text-right1 text-gray-500 text-sm">
              {'ความเข้มงวด (Rigour)'}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default TenScalesChoices;
