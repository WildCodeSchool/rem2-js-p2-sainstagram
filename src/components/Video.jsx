import React from 'react';
import ReactPlayer from 'react-player'

function Video() {
  return (
    <div className="Reels">
        <ReactPlayer
        url="https://youtu.be/WhMEBGkh6Yg?list=PL9Fy3wAhUA7L_ugUYjAbxwFm7OORqFdHs"
        controls
        playing
        muted
        width="100%"
        height="100%"
        />
    </div>
  )
}

export default Video;