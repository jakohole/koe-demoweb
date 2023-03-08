import { useState } from 'react';
import Home from './pages/HomePage';
import Introduction from './pages/IntroductionPage';
import Speedtest from './pages/SpeedTestPage';

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
