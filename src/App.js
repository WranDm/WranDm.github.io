import logo from './logo.svg';
import './App.css';
import { Article, Brand, CTA, Feature, Navbar } from './components';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Footer } from './containers';
import Diceroller from './pages/Diceroller';
import Home from './pages/Home';
import React from 'react'

const App = () => {
  return (
    <Router>
        <div className="App">
          <div className="gradient__bg">
            <Navbar />
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='Diceroller' element={<Diceroller/>} />
            </Routes>
            <Footer />
          </div>
        </div>
      
    </Router>
  )
}

export default App;
