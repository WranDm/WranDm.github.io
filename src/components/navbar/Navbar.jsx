import React from 'react'
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/logo.png';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links_container">
          <p><Link to="/" activeStyle>Home</Link></p>
          <p><Link to="/Diceroller" activeStyle>Diceroller</Link></p>
          <p><Link to="/more">More to Come!</Link></p>
          <p><Link to="https://github.com/WranDm">Github (External Link)</Link></p>
        </div>
      </div>  
    </div>
  )
}

export default Navbar