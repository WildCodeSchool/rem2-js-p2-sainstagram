import React from 'react'
import './Home.css'
import Header from '../components/Header'
import NavProfile from '../components/NavProfile'
import PostList from '../components/PostList'

const Home = () => {
    return (
        <div className='home'>
            <Header/>
            <NavProfile/>
            <PostList/>
        </div>
    )
}

export default Home
