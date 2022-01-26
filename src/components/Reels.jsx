import React from 'react';
import ReactPlayer from 'react-player'
import { useState } from 'react';
import ReelsSainstagram from '../assets/Reels_Sainstagram';

function Reels() {
    const [shorts, setShorts] = useState([]);

  return (
  
    <div className="Reels">
        <ReactPlayer
        url={shorts.url}
        controls
        playing
        muted
        width="100%"
        height="100%"
        />
    </div>
  )
}

export default Reels;