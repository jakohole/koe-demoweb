import React, { useState } from 'react';

function TenScalesChoices() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <div
      className="flex space-x-16 items-start justify-center"
      style={{ width: 900, height: 80 }}
    >
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className={`w-1/10 h-full ${
            index === selected
              ? 'bg-gradient-to-r from-green-400 to-green-500'
              : 'bg-white'
          }`}
          onClick={() => handleSelect(index)}
        >
          <div className="flex items-center justify-center flex-1 h-full px-9 pt-6 pb-8">
            <p className="flex-1 h-full text-xl font-medium leading-loose text-center">
              {index + 1}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TenScalesChoices;
