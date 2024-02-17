import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import './Page.css'
import UncontrolledExample from './Slider';

function Pageone() {
    return (
        <div className='pageone'>
            <div className="page-one-left">
                <h4>WELCOME TO 24 CARROT</h4>
                <h1>Remarkable Catering & Events</h1>
                <p>24 Carrots is the premier catering and events company of choice in Southern California. We create remarkable experiences by offering the finest quality foods and providing unsurpassed personalized service, driven by our passion for life’s special occasions.
                </p>
                <button className='button'>GET IN TOUCH <FaArrowRightLong className='arrow' /> </button>
            </div>
            <div className="page-one-right">
                <UncontrolledExample />
            </div>
        </div>
    )
}

export default Pageone
