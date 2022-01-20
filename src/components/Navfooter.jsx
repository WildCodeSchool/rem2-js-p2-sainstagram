import React, { Component } from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import home from '../assets/home.png';
import search from '../assets/search.png';
import video from "../assets/video-icon.png";
import send2 from '../assets/send2.png';
import './Navfooter.css';
import PostList from './PostList';

const Navfooter = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [refreshHome, setRefreshHome] = useState();

    function handleClickFavorite() {
    setIsFavorite(true);
    }
    
    return (
        <div className='navfooter navbar'>
            <NavLink  to="/"  className='navigation-link'>
                <div><img onClick={() => {
                        window.location.href = '/'}}
                className='foot-icon' src={home} alt="home-button" /></div>
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
        </div>
    )
}

            /* <NavLink to="/"  className='navigation-link'>
                <div className='favorite-emoji'
                    onClick={handleClickFavorite}>
                        {isFavorite ? "❤️" : "🤍"}
                </div>*/
            // </NavLink>  */}
export default Navfooter;
