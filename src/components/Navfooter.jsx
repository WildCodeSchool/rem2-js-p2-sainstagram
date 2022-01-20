import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import home from '../assets/home.png';
import search from '../assets/search.png';
import video from "../assets/video-icon.png";
import send2 from '../assets/send2.png';
import './Navfooter.css';

const Navfooter = () => {
    //const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className='navfooter navbar'>
            <NavLink to="/" className='navigation-link'>
                <img onClick={() => { window.location.href = '/' }}
                    className='foot-icon' src={home} alt="home-button" />
            </NavLink>
            <NavLink to="/search" className='navigation-link'>
                <img className='foot-icon' src={search} alt="search-button" />
            </NavLink>
            <NavLink to="/" className='navigation-link'>
                <img className='foot-icon' src={video} alt="video-button" />
            </NavLink>
            <NavLink to="/" className='navigation-link'>
                <img className='foot-icon' src={send2} alt="send-button" />
            </NavLink>
            <img src="https://i.ibb.co/5402THJ/saori-profilepic.jpg" alt="Saori Kido" className="foot-icon-profile" />
        </div>
    )
}

/* <NavLink to="/"  className='navigation-link'>
    <div className='favorite-emoji'
        onClick={()=>setIsFavorite(true)}>
            {isFavorite ? "❤️" : "🤍"}
    </div>*/
// </NavLink>  */}
export default Navfooter;
