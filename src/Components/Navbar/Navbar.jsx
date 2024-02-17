import React from 'react'
import './Navbar.css'
import { MdMenu } from "react-icons/md";


function Navbar() {
  return (
   <div className='navbar'>
    <div className="nav-content">
        <div className="nav-left">
          <a href="">ABOUT</a>
          <a href="">SERVICES</a>
          <a href="">EVENTS</a>
        </div>
        <div className="nav-mid">
          <h3>24 CARROTS</h3>
          <p>CARETING & EVENTS</p>
        </div>
        <div className="nav-right">
          <a href="">VENUES</a>
          <a href="">CAREERS</a>
            <MdMenu className='menu-icon'/>
          <button className='nav-button'>Get In Touch</button>
        </div>
        </div>
   </div>
  )
}

export default Navbar
