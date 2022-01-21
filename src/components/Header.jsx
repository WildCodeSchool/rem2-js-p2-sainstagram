import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/sainstagramV2.png'
import "./Header.css"

const Header = () => {
    return (
        <div className="header" >
            <Link to='/' ><img className='Header-logo' src={logo} alt="logo" /></Link> 
            <div className="icons">
            <Link to='/addPost' className="icons-container"><img className='add-header' src= "https://i.ibb.co/Vx3VP1w/plus-icon.png" alt="logo" /></Link> 
            <Link to='/' className="icons-container"><img className='empty-like-header' src= "https://i.ibb.co/RYMkwt1/empty-heart-icon.png" alt="logo" /></Link> 
            <button className="button-icon"><img className="button-img" src= "https://i.ibb.co/ykv8d1b/toggle-on-icon.jpg" alt="Saori Kido"></img></button>
            </div>
        </div>
    )
}

export default Header


