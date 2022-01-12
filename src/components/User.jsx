import React from 'react'
import NavProfile from './NavProfile';
import './User.css';

function User(props) {
    return (
        <div className='User'>
            <img className='' src={props.profilepic} alt={props.name} />
            <h3>{props.name}</h3>
        </div>
    )
}

export default User;