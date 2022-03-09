import React from 'react'
import NavProfile from '../components/NavProfile'
import PostList from '../components/PostList'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
                <NavProfile />              
                <PostList />
        </div>
    )
}

export default Home
