import { useState } from 'react';
import Home from './pages/HomePage';
import Introduction from './pages/IntroductionPage';
import Speedtest from './pages/SpeedTestPage';
import Oddmanout from './pages/OddmanoutPage';
import NoTimelimit from './pages/NoTimelimitPage';
import Scalestest from './pages/ScalesTestPage';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="introduction" element={<Introduction />} />
        <Route path="speedtest" element={<Speedtest />} />
        <Route path="oddmanout" element={<Oddmanout />} />
        <Route path="no-time-limit" element={<NoTimelimit />} />
        <Route path="scalestest" element={<Scalestest />} />
      </Routes>
    </div>
  );
}

export default App;
