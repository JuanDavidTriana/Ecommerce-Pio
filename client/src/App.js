import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/admin';
import DetaillProduct from './pages/detaillProduct';
import AdminCreate from './pages/adminCreate';
import AdminEdit from './pages/adminEdit';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeToggleBubble from './components/ThemeToggleBubble';

//Styles
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
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/Create" element={<AdminCreate />} />
        <Route path="/admin/edit/:id" element={<AdminEdit />} />
        <Route path="product/:id" element={<DetaillProduct />} />
      </Routes>
      <Footer />
      <ThemeToggleBubble />
    </Router>
  );
}

export default App;
