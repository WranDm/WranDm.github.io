import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <div>Thanks for visiting! You can contact me via my email by clicking <div onClick={(e) => {window.location.href ='mailto:TitusESP@gmail.com';}}>here</div></div>
  )
}

export default Footer