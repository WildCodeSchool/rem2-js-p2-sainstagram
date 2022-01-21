import React from 'react'
import './User.css';

function User(props) {
    return (
        <div className='User'>
            <img className='User-profile-pic' src={props.profilepic} alt={props.name} />
            <p className='User-profile-name'>{props.name ? props.name.split(" ")[0] : props.name}</p>
        </div>
    )
}

export default User;