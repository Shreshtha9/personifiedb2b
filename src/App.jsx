import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import './index.css';
import DisplayAds from './Pages/DisplayAds';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/display-ads" element={<DisplayAds/>} />
            </Routes>
        </Router>
    );
}

export default App;
