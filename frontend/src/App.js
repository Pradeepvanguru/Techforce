import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Blog from './components/Blog';
import RenderPage from './components/RenderPage';
import UIBuilder from './components/UIBuilder';  // Ensure the component name is correct

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/page/:id" element={<RenderPage />} />
                <Route path="/design" element={<UIBuilder />} />
            </Routes>
        </Router>
    );
}

export default App;
