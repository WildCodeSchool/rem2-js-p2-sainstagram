import React from 'react'
import logo from '../assets/sainstagramV2.png'
import "./Header.css"

const Header = () => {
    return (
        
        <div className="header" >
            <img className='Header-logo' src={logo} alt="logo" />
        </div>
         
    )
}

export default Header


