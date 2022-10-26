import React from 'react'
import Logo from '../assets/logo.png'
import I4G from '../assets/I4G.png'
import "./styles.css";

const Footer = () => {
  return (
    <footer id="footer">
        <hr/>
        <div id="footer-btm">
            <img id="logo" alt="logo" src={Logo}></img>
            <p>HNG Internship 9 Frontend Task</p>
            <img id="i4g" alt="i4g" src={I4G}></img>
        </div>
    </footer>
  )
}

export default Footer