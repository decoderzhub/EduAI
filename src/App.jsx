import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import useHumbleScroll from './utils/useHumbleScroll'

// Import your page components here
import Page404 from './pages/Page404'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import FundingCalculatorPage from './pages/FundingCalculator'

function App() {
  // Initialize HumbleScroll for the entire app
  useHumbleScroll();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/404" element={<Page404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/funding-calculator" element={<FundingCalculatorPage />} />
          {/* Add more routes for additional pages */}
        </Routes>
      </div>
    </Router>
  )
}

export default App