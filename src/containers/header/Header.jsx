import React from 'react'
import './header.css';
import soon from '../../assets/Coming_Soon.png';

const Header = () => {
  return (
    <div className="header section_padding" id='home'>
      <div className="header-content">
        <h1 className="gradient__text">This is the personal website of Titus P.</h1>

        <h2>It's under construction at the moment, but if you'd like to see what I've been up to (on the coding side), you can visit my <a href="https://github.com/WranDm"><u>Github Page</u></a>.</h2>
      </div>
      <div className="header-image">
        <img src={soon} alt="soon" />
      </div>
    </div>
  )
}

export default Header