import React from 'react'
import './Page.css'
import Pagethreeimg from '../Images/wedding.png'

function Pagethree() {
    return (
        <div className='pagethree'>
            <div className="page-three-content">
                <img src={Pagethreeimg} alt="" />
                <div className="bottom-circle"></div>
                <div className="circle">
                    <p style={{fontSize: "1.5rem", color: "#647B4E"}}>VENUES</p>
                    <h1>Unforgettable <br /> Venues</h1>
                    <p>24 Carrots is the exclusive or preferred caterer at Southern California’s 
                       <br /> 
                       most spectacular properties.From intimate understated spaces to large and luxurious,
                       <br />
                        we’ll help you find the event venue that makes your heart skip a beat.</p>
                    <button className='button'>EXPLORE VENUES</button>
                </div>
            </div>
        </div>
    )
}

export default Pagethree
