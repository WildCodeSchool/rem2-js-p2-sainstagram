import React from 'react'
import './Home.css'
import NavProfile from '../components/NavProfile'
import PostList from '../components/PostList'

const Home = () => {
    return (
        <div className='home'>
                <NavProfile />              
                <PostList />
        </div>
    )
}

export default Home
