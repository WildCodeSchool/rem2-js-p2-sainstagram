import React from 'react'
import './Home.css'
import SearchBar from '../components/SearchBar'
import Header from '../components/Header'
import NavProfile from '../components/NavProfile'
import PostList from '../components/PostList'

const Home = () => {
    return (
        <div className='home'>
                <NavProfile />              
                <SearchBar />
        </div>
    )
}

export default Home