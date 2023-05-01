import logo from './logo.svg';
import './App.css';
import { Article, Brand, CTA, Feature, Navbar } from './components';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { Footer } from './containers';
import Diceroller from './pages/Diceroller';
import Home from './pages/Home';
import React from 'react'
import More from './pages/More';
import Modal from './pages/Modal';

const App = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
        <div className="App">
          <div className="gradient__bg">
            <Navbar />
            <Routes location={background || location}>
              <Route path='/' element={<Home/>} />
              <Route path='Diceroller' element={<Diceroller/>} />
            </Routes>
            <Footer />
          </div>
        </div>  
  )
}

export default App;
