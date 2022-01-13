import React from 'react'
import './Home.css'
import Header from '../components/Header'
import NavProfile from '../components/NavProfile'
import PostList from '../components/PostList'

const Home = () => {
    return (
        <div className='home'>
            <div className="home-sticky">
                <Header/>
                <NavProfile/>
            </div>
                <PostList/>
        </div>
    )
}

export default Home
