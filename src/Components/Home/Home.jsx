import React from 'react'
import Video from '../Video/24carrtos-home-banner.mp4'
import './Home.css'

function Home() {
    return (
        <>
            <div className='home'>
                <div className="video-main">
                    <video className='video' src={Video} autoPlay loop muted />
                </div>
                <div className="overlay">
                    <h1>Simply The Finest</h1>
                </div>
            </div>
        </>
    )
}

export default Home
