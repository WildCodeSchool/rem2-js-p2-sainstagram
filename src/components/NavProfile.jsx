import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { Link } from "react-router-dom";
import User from './User';
import './NavProfile.css';
import refresh2 from '../assets/refresh2.png';


const NavProfile = () => {
    const [users, setUsers] = useState([]);
    const [value, setValue] = useState();

    useEffect(() => {
        Axios
            .get("https://a.nacapi.com/sainstgram.users")
            .then((response) => {
                setUsers(response.data)
            })
    }, []);


    const randomProfile = [];

    function getRandomUsers() {
        if (users.length) {
            for (let i = 0; randomProfile.length < 5; i++) {
                const j = Math.floor(Math.random() * users.length);
                if (!randomProfile.includes(users[j]) && users[j].id != 6) {
                    randomProfile.push(users[j])
                };
            }
        }
    }
    getRandomUsers();

    return (
        <div className="NavProfile" >
            {randomProfile.map((user) => <Link to={`/Profil/${user.id}`}><User {...user} key={user.id} /></Link>)}
            <img onClick={ ()=>{setValue({})}} className='nav-refresh-button' src={refresh2} />
        </div>
        
    )
}

export default NavProfile;