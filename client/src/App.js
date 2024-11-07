import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/admin';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//Styles
import './App.css';
import './index.css';
import ThemeToggleBubble from './components/ThemeToggleBubble';



function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path ="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
      <ThemeToggleBubble />
    </Router>
  );
}

export default App;
