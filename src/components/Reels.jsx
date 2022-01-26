import React from 'react';
import ReactPlayer from 'react-player'

function Reels(props) {

  return (
  
    <div className="Reels">
        <ReactPlayer
        url={props.url}
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