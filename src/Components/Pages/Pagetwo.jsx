import React from 'react'
import './Page.css'
import Wedslide from '../Images/wedslider.jpg'
import { FaArrowRightLong } from "react-icons/fa6";

function Pagetwo() {
  return (
    <div className='pagetwo'>
      <div className="page-two-left">
        <img src={Wedslide} alt="" />
      </div>
      <div className="page-two-right">
        <div >
          <h1 className="wedheading">Making Every Experience Magical</h1>
        </div>
        <div className="events">
          <div className="links">
            <ul>
              <li><a href="">Weddings</a></li>
              <li><a href="">Social</a></li>
              <li><a href="">Corporate</a></li>
              <li><a href="">Venues</a></li>
            </ul>
          </div>
          <div className="content">
            <h3>INCOMPARABLE SOCIAL EVENTS</h3>
            <p>We don’t put you in a box. Each venue is unique to each party, and our curated list of 
              event spaces and venue partners offers easy access with p
              ersonalized service at Southern California’s 
              premier&nbsp;locations.</p>
              <button className='button'>LEARN MORE <FaArrowRightLong className='arrow' /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pagetwo
