import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import RepoViewer from './RepoViewer';
import AboutMe from './AboutMe';
import NavBar from './NavBar';

function App() {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<AboutMe />} />
            </Routes>
        </Router>
    );
}

export default App;
