import React from 'react';
import ReactPlayer from 'react-player'

function Reels() {

    const playLists = "https://www.youtube.com/watch?v=5S_7YJAFZTo";

  return (
  
    <div className="Reels">
        <ReactPlayer
        url={playLists}
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
