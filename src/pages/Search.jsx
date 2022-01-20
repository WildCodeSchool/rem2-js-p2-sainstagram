import React from 'react'
import './Home.css'
import SearchBar from '../components/SearchBar'
import NavProfile from '../components/NavProfile'

const Home = () => {
    return (
        <div className='home'>
            <NavProfile />
            <SearchBar />
        </div>
    )
}

export default Home