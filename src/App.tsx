import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import DashboardLayout from './layouts/DashboardLayout';
import Home from './pages/Home';
import MissionTerminal from './pages/MissionTerminal';
import StakingPage from './pages/StakingPage';
import MarketplacePage from './pages/MarketplacePage';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Toaster position="bottom-center" />
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Home />} />
            <Route path="mission-terminal" element={<MissionTerminal />} />
            <Route path="stake" element={<StakingPage />} />
            <Route path="marketplace" element={<MarketplacePage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;