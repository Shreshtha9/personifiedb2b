import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import './index.css';
import DisplayAds from './Pages/DisplayAds';
import SalesDevelopment from './Pages/SalesDevelopment';
import ContentSyndication from './Pages/ContentSyndication';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/display-ads" element={<DisplayAds/>} />
                 <Route path="/sales-development" element={<SalesDevelopment/>} />
                <Route path="/content-syndication" element={<ContentSyndication/>} />
            </Routes>
        </Router>
    );
}

export default App;
