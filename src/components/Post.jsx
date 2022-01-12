import React from 'react'
import './Post.css'

const Post = ({post}) => {
    return (
        <div className='post-card'>
            <img className='post-img' src={post.picture} alt={post.name} />
            <div className='post-desc'>
                <h3>{post.name}</h3>
                <p>{post.date}</p>
                <p>{post.caption}</p>
            </div>
        </div>
    )
}

export default Post
