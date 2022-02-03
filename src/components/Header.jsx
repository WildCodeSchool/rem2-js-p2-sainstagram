import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/sainstagramV2.png'
import infos from '../assets/info.png'
import "./Header.css"

const Header = () => {
    return (
        <div className="header" >
            <div className="logo-container">
                <Link to='/'><img className='Header-logo' src={logo} alt="logo" /></Link>
            </div>
            <div className="icons">
                <NavLink to='/addPost' className="icons-container"><img className='add-header' src="https://i.ibb.co/Vx3VP1w/plus-icon.png" alt="logo" /></NavLink>
                <NavLink to='/' className="icons-container"><img className='empty-like-header' src="https://i.ibb.co/RYMkwt1/empty-heart-icon.png" alt="logo" /></NavLink>
                <NavLink to='/infos' className="info-icon"><img className="button-img" src={infos} alt="toggle" /></NavLink>
            </div>
        </div>
    )
}

export default Header