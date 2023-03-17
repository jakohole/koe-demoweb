import { useState } from 'react';
import Home from './pages/HomePage';
import Introduction from './pages/IntroductionPage';
import Speedtest from './pages/SpeedTestPage';
import Oddmanout from './pages/OddmanoutPage';
import Power from './pages/PowerPage';
import Scalestest from './pages/ScalesTestPage';
import Summary from './pages/SummaryPage';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="introduction" element={<Introduction />} />
        <Route path="speedtest" element={<Speedtest />} />
        <Route path="oddmanout" element={<Oddmanout />} />
        <Route path="power" element={<Power />} />
        <Route path="scalestest" element={<Scalestest />} />
        <Route path="lastpage" element={<Summary />} />
      </Routes>
    </div>
  );
}

export default App;
