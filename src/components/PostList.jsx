import React from 'react'
import Post from './Post'
import './PostList.css'
import posts from '../assets/posts.js'




const PostList = () => { 

    return (
        <div className='post-list'>
            {posts && posts
            .map((post) => (
            <div key={post.userid} className='cards-post'>
                <Post post={post}/>
            </div>
            ))}
        </div>
    )
}

export default PostList
