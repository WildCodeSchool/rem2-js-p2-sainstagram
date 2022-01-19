import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import home from '../assets/home.png';
import search from '../assets/search.png';
import video from "../assets/video-icon.png";
import send2 from '../assets/send2.png';
import './Navfooter.css';


const Navfooter = () => {

    const [isFavorite, setIsFavorite] = useState(false);

    function handleClickFavorite() {
    setIsFavorite(true);
    }

    return (
        <div className='navfooter navbar'>
            <NavLink to="/" className='navigation-link'>
                <div><img className='foot-icon' src={home} alt="home-button" /></div>
            </NavLink>
            <NavLink to="/"  className='navigation-link'>
                <div><img className='foot-icon' src={search} alt="search-button" /></div>
            </NavLink>
            <NavLink to="/"  className='navigation-link'>
                <div><img className='foot-icon-video' src= {video} alt="video-button" /></div>
            </NavLink>
            <NavLink to="/"  className='navigation-link'>
                <div><img className='foot-icon' src={send2} alt="send-button" /></div>
            </NavLink>
            <NavLink to="/"  className='navigation-link'>
                <div className='favorite-emoji'
                    onClick={handleClickFavorite}>
                        {isFavorite ? "❤️" : "🤍"}
                </div>
            </NavLink> 
        </div>
    )
}

export default Navfooter;