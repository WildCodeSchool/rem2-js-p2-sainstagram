import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { Link } from "react-router-dom";
/*import users from '../assets/users';*/
import User from './User';
import './NavProfile.css';

const NavProfile = () => {
    const [users, setUsers]= useState([]);
    
    useEffect(() => {
        Axios
        .get("https://a.nacapi.com/sainstgram.users")
      // Extract the DATA from the received response
        .then((response) => setUsers(response.data)) 
      // Use this data to update the state
        /*.then((data) => {
        setUsers(data[0]);*/
     // },
    }, []);


    return (
        <div className="NavProfile" >
            {users.map((user, index) => index < 6 ? <Link to={`/Profil/${user.id}`}><User {...user} key={user.id}/></Link> : '')}
        </div>
    )
}

export default NavProfile;