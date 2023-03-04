import { useState } from 'react';
import Home from './HomePage';
import Introduction from './IntroductionPage';
import Speedtest from './SpeedTestPage';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="introduction" element={<Introduction />} />
        <Route path="speedtest" element={<Speedtest />} />
      </Routes>
    </div>
  );
}

export default App;
