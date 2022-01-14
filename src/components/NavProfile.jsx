import React from 'react';
import { Link } from "react-router-dom";
import users from '../assets/users';
import User from './User';
import './NavProfile.css';

const NavProfile = () => {
    return (
        <div className="NavProfile" >
            {users.map((user, index) => index < 6 ? <Link to={`/Profil/${user.id}`}><User {...user} key={user.id}/></Link> : '')}
        </div>
    )
}

export default NavProfile;