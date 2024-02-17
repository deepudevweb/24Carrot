import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="navlist-left">
        <ul className='navlist-left'>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">SERVICES</a>
          </li>
          <li>
            <a href="">EVENTS</a>
          </li>
        </ul>
      </div>
      <div className="nav-logo">
        <a href="">24 CARROTS</a>
        <p>CARETING & EVENTS</p>
      </div>
      <div className="navlist-right">
        <ul  className='navlist-right'>
          <li>
            <a href="">VENUES</a>
          </li>
          <li>
            <a href="">CAREEERS</a>
          </li>
        </ul>
        <button>GET IN TOUCH</button>
      </div>
    </div>
  )
}

export default Navbar
