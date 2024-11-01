import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';
import './index.css';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path ="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
