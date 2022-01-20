import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { Link } from "react-router-dom";
import User from './User';
import './NavProfile.css';

const NavProfile = () => {
    const [users, setUsers] = useState([]);

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
            for (let i = 0; randomProfile.length < 6; i++) {
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
        </div>
    )
}

export default NavProfile;