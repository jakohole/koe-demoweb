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
              ? 'bg-gradient-to-r from-green-400 to-green-500'
              : 'bg-white'
          } hover:bg-gray-100`}
          onClick={() => handleSelect(index)}
        >
          <div className="flex items-center justify-center flex-1 h-full px-9 pt-6 pb-8">
            <p className="flex-1 h-full text-xl font-lg leading-loose text-center">
              {5 - index}
            </p>
          </div>
        </div>
      ))}
      <div className="w-40 h-full"></div>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`w-10/5 h-full ${
            index === selected
              ? 'bg-gradient-to-r from-green-400 to-green-500'
              : 'bg-white'
          } hover:bg-gray-100`}
          onClick={() => handleSelect(index + 5)}
        >
          <div className="flex items-center justify-center flex-1 h-full px-9 pt-6 pb-8">
            <p className="flex-1 h-full text-xl font-lg leading-loose text-center">
              {index + 1}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TenScalesChoices;
