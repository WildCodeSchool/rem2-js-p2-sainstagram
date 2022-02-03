import React, { useEffect, useState } from 'react'
import './Player.css';

const Player = (props) => {
    const [health, setHealth] = useState(100);

    useEffect(() => {
        setHealth(props.health / props.life * 100);
    }, [props.health, props.life]);

    return (
        <div className={`Player ${props.className} ${props.health<=0 ? 'dead':''}`}>
            <div className='box-inner'>
                <div className='box-front'>
                    <img className="playerpic" src={props.profilepic} alt="Portrait" id={`player${props.id}`} />
                    <p className="player-name">{props.name}</p>
                    <div className='total-life'>
                        {props.health <= 0 ? " Perdu !" : ''}
                        <div className='Life' style={{ width: `${health}%` }}></div>
                    </div>
                </div>
                <div className='box-back'>
                    <img className="playerpic" src={props.profilepic} alt="Portrait" id={`player${props.id}`} />
                    <p className="player-name">{props.name}</p>
                    <div className='total-life'>
                        {props.health <= 0 ? " Perdu !" : ''}
                        <div className='Life' style={{ width: `${health}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player