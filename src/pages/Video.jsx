import React from 'react'
import Reels from '../components/Reels'
import ReelsSainstagram from '../assets/Reels_Sainstagram'
import './Video.css'

const Video = () => {
    return (
        <div className='Reels'>              
                <Reels url={ReelsSainstagram} />
        </div>
    )
}

export default Video