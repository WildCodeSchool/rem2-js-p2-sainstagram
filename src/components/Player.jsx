import React, { useEffect, useState } from 'react'
import './Player.css';

const Player = (props) => {
    const [health, setHealth] = useState(100);
    
    useEffect(() => {
        setHealth(props.health/props.life*100);
    }, [props.health, props.life]);
    console.log(props);
    return (
        <div className={`Player ${props.className}`}>
            <img src={props.profilepic} alt="Portrait" id={`player${props.id}`}/>
            <p>{props.name}</p>
            <div className='total-life'>
                <div className='Life' style={{width:`${health}%`}}>{props.health<=0 ? "You loose" : ''}</div>
            </div>
        </div>
    )
}

export default Player