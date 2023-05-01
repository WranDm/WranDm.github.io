import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">Thanks for visiting! You can contact me via my email by clicking <u><strong><a className="pointer" onClick={(e) => {window.location.href ='mailto:TitusESP@gmail.com';}}>HERE</a></strong></u>.</div>
  )
}

export default Footer